using Limak.Academy.Application.Contract.Dto.Orders;
using Limak.Academy.Application.Contract.Interfaces.Orders;
using Limak.Academy.Application.Contract.Mappers.Orders;
using Limak.Academy.Domain.Domain.Orders;
using Limak.Academy.Domain.Domain.Transactions;
using Limak.Academy.Domain.Domain.Users;
using Limak.Academy.Domain.Enums;
using Limak.Academy.Utility.Extentions;
using Limak.Academy.Utility.ServiceResponse;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Services.Orders
{
    public class OrderService : IOrderService
    {

        #region Constructor
        private readonly IOrderRepository _repository;
        private readonly IConfiguration _configuration;
        private readonly IMemoryCache _cache;

        public OrderService(IOrderRepository repository, IMemoryCache cache, IConfiguration configuration)
        {
            _repository = repository;
            _cache = cache;
            _configuration = configuration;
        }

        #endregion

        public async Task<ServiceResponse<List<OrderListDto>>> LoadOrders(string userId)
        {
            var result = new ServiceResponse<List<OrderListDto>>();

            try
            {
                var orders = new List<Order>();
                var cache = _cache.Get("UserOrders");
                if (cache != null)
                {
                    result.SetData(_cache.Get<List<OrderListDto>>("UserOrders").Where(x => x.UserId == userId).ToList());
                }
                else
                {
                    orders = _repository.GetQuerable().AsNoTracking()
                                        .Include(x => x.Course)
                                        .ThenInclude(x => x.Teacher)
                                        .Include(x => x.Course)
                                        .ThenInclude(x => x.Discount)
                                        .Include(x => x.Course)
                                        .ThenInclude(x => x.EventDays)
                                        .Include(x => x.User)
                                        .Include(x => x.Transaction)
                                        .Where(x => x.UserId == userId && x.Transaction == null)
                                        .ToList();

                    result.SetData(orders.ToDto());
                }
            }
            catch (Exception ex)
            {
                result.SetException(ex);
            }
            return result;
        }

        public async Task<ServiceResponse<List<OrderListDto>>> LoadPaidOrders(string userId)
        {
            var result = new ServiceResponse<List<OrderListDto>>();

            try
            {
                var orders = new List<Order>();
                var cache = _cache.Get("UserPaidOrders");
                if (cache != null)
                {
                    result.SetData(_cache.Get<List<OrderListDto>>("UserPaidOrders").Where(x => x.UserId == userId).ToList());
                }
                else
                {
                    orders = _repository.GetQuerable().AsNoTracking()
                                        .Include(x => x.Course)
                                        .ThenInclude(x => x.Teacher)
                                        .Include(x => x.Course)
                                        .ThenInclude(x => x.EventDays)
                                        .Include(x => x.Course)
                                        .ThenInclude(x => x.Discount)
                                        .Include(x => x.User)
                                        .Include(x => x.Transaction)
                                        .Where(x => x.UserId == userId && x.Transaction != null)
                                        .ToList();

                    result.SetData(orders.ToDto());
                }
            }
            catch (Exception ex)
            {
                result.SetException(ex);
            }
            return result;
        }

        public async Task RefreshOrders(string userId)
        {
            var orders = await _repository.GetQuerable().AsNoTracking()
                                        .Include(x => x.Course)
                                        .ThenInclude(x => x.Teacher)
                                        .Include(x => x.Course)
                                        .ThenInclude(x => x.Discount)
                                        .Include(x => x.Course)
                                        .ThenInclude(x => x.EventDays)
                                        .Include(x => x.User)
                                        .Include(x => x.Transaction)
                                        .Where(x => x.UserId == userId && x.Transaction == null)
                                        .ToListAsync();
            _cache.Remove("UserOrders");
            _cache.CreateEntry("UserOrders");
            _cache.Set("UserOrders", orders.ToDto());
        }

        public async Task<ServiceResponse<bool>> AddOrder(OrderCreateDto dto)
        {
            var result = new ServiceResponse<bool>();

            try
            {
                var orders = _repository.GetQuerable().AsNoTracking()
                                        .Where(x => x.UserId == dto.UserId && x.Transaction == null)
                                        .ToList();

                var model = dto.ToModel();
                if (orders.Any(x => x.CourseId == dto.CourseId && dto.UserId == x.UserId))
                    result.SetException("این دوره از قبل داخل سبد خرید شما وجود دارد");
                else
                {
                    if (orders.Any(x => x.UserId == dto.UserId && x.CourseId == dto.CourseId && x.Transaction == null))
                    {
                        model = orders.First(x => x.UserId == dto.UserId && x.CourseId == dto.CourseId);
                        model.AddToOrderQty();
                        await _repository.Update(model);
                    }
                    else
                        await _repository.Add(model);

                    orders = _repository.GetQuerable().AsNoTracking()
                                            .Include(x => x.Course)
                                            .ThenInclude(x => x.Teacher)
                                            .Include(x => x.Course)
                                            .ThenInclude(x => x.Discount)
                                            .Include(x => x.Course)
                                            .ThenInclude(x => x.EventDays)
                                            .Include(x => x.User)
                                            .Include(x => x.Transaction)
                                            .Where(x => x.UserId == dto.UserId && x.Transaction == null)
                                            .ToList();

                    _cache.Remove("UserOrders");
                    _cache.CreateEntry("UserOrders");
                    _cache.Set("UserOrders", orders.ToDto());
                    result.SetData(true);
                }

            }
            catch (Exception ex)
            {
                result.SetException(ex);
            }
            return result;
        }

        public async Task<ServiceResponse<bool>> RemoveOrder(int orderId)
        {
            var result = new ServiceResponse<bool>();

            try
            {
                var order = await _repository.Get(orderId);
                if (order is null)
                    throw new Exception("آیتم مورد نظر یافت نشد");

                if (order.Qty > 1)
                {
                    order.RemoveFromOrderQty();
                    await _repository.Update(order);
                }
                else
                    await _repository.Delete(order);


                var orders = _repository.GetQuerable().AsNoTracking()
                                        .Include(x => x.Course)
                                        .ThenInclude(x => x.Teacher)
                                        .Include(x => x.Course)
                                        .ThenInclude(x => x.EventDays)
                                        .Include(x => x.Course)
                                        .ThenInclude(x => x.Discount)
                                        .Include(x => x.User)
                                        .Include(x => x.Transaction)
                                        .Where(x => x.UserId == order.UserId && x.Transaction == null)
                                        .ToList();

                _cache.Remove("UserOrders");
                _cache.CreateEntry("UserOrders");
                _cache.Set("UserOrders", orders.ToDto());

                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex);
            }
            return result;
        }

        public async Task<ServiceResponse<bool>> RemoveAllOrders(string userId)
        {
            var result = new ServiceResponse<bool>();

            try
            {
                var orders = _repository.GetQuerable().AsNoTracking().Where(x => x.UserId == userId && x.Transaction == null).ToList();

                foreach (var item in orders)
                {
                    await _repository.Delete(item);
                }
                _cache.Remove("UserOrders");

                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex);
            }
            return result;
        }

        public async Task<ServiceResponse<bool>> Pay(List<int> ordersId, int transactionId)
        {
            var result = new ServiceResponse<bool>();

            try
            {

                var orders = _repository.GetQuerable().AsNoTracking().Include(x => x.Course).Include(x => x.User).Where(x => ordersId.Contains(x.Id)).ToList();
                var onlineOrders = orders.Where(x => x.Course == null ? false : x.Course.CourseType == CourseTypeEnum.Online).Select(x => x.Id).ToList();
                var offlineOrders = orders.Where(x => x.Course == null ? false : x.Course.CourseType == CourseTypeEnum.Offline).Select(x => x.Id).ToList();

                if (onlineOrders.Any())
                {
                    #region RestSharpSettings
                    var options = new RestClientOptions()
                    {
                        RemoteCertificateValidationCallback = (sender, certificate, chain, sslPolicyErrors) => true
                    };
                    var client = new RestClient(options);
                    var endPoint = "https://panel.spotplayer.ir/license/edit/";
                    #endregion
                    var rnd = new Random();
                    foreach (var orderId in onlineOrders)
                    {
                        var order = await _repository.GetQuerable().Include(x => x.Course).Include(x => x.User).Where(x => x.Id == orderId).FirstAsync();
                        if (order is null)
                            throw new Exception("آیتم مورد نظر یافت نشد");


                        var request = new RestRequest(endPoint, Method.Post)
                            .AddHeader("$API", _configuration.GetValue<string>("SpotPlayerApiKey"))
                            .AddHeader("$LEVEL", -1)
                            .AddJsonBody(JsonConvert.SerializeObject(new GenLicenseDto()
                            {
                                Course = new string[1]
                                {
                                order.Course.LicenseKey
                                },
                                Name = order.User.UserName,
                                Watermark = new Watermark()
                                {
                                    Texts = new Text[1]
                                    {
                                    new Text()
                                    {
                                        TextText = StringHelper.RandomString(11)
                                    }
                                    }
                                }
                            }));
                        var response = await client.ExecuteAsync(request);

                        if (response.IsSuccessful)
                        {
                            var licenseRes = JsonConvert.DeserializeObject<LicenseKeyResult>(response.Content);
                            order.Pay(transactionId, licenseRes.Key);
                            await _repository.Update(order);
                        }

                    }
                }
                else if (offlineOrders.Any())
                {
                    foreach (var item in offlineOrders)
                    {
                        var order = _repository.GetQuerable().Include(x => x.Course).Where(x => x.Id == item).First();
                        order.Pay(transactionId);
                        await _repository.Update(order);
                    }
                }

                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex);
            }
            return result;
        }
    }
}
