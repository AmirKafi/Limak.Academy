using Limak.Academy.Application.Contract.Dto.Orders;
using Limak.Academy.Application.Contract.Interfaces.Course;
using Limak.Academy.Application.Contract.Interfaces.Discounts;
using Limak.Academy.Application.Contract.Interfaces.Orders;
using Limak.Academy.Application.Contract.Interfaces.Users;
using Limak.Academy.Controllers.Base;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Utility.ServiceResponse;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace Limak.Academy.Controllers
{
    public class OrderController : BaseController
    {
        #region Constructor
        private readonly IOrderService _orderService;
        private readonly IUserService _userService;
        private readonly ICourseService _courseService;
        private readonly IMemoryCache _cache;
        private readonly IDiscountService _discountService;

        public OrderController(IOrderService orderService, IUserService userService, ICourseService courseService, IMemoryCache cache, IDiscountService discountService)
        {
            _orderService = orderService;
            _userService = userService;
            _courseService = courseService;
            _cache = cache;
            _discountService = discountService;
        }
        #endregion

        public async Task<ActionResult> Index()
        {

            return View();
        }

        public async Task<ActionResult> LoadOrders()
        {

            var userId = await _userService.GetUserId(User);
            var model = await _orderService.LoadOrders(userId.Data).ConfigureAwait(false);

            foreach (var item in model.Data)
            {
                if (item.OrderType == FormEnum.Course)
                {
                    item.Course.FilePath = GetFileUrl(item.Course.FileName, FileFoldersEnum.Course);
                }
            }

            var result = new ServiceResponse<List<OrderItemsDto>>();
            result.SetData(model.Data.Select(x => new OrderItemsDto()
            {
                OrderId = x.Id,
                Price = x.Price,
                Qty = x.Qty,
                Title = x.OrderType == FormEnum.Course ? x.Course.Title : "",
                DiscountPrice = x.OrderType == FormEnum.Course ? x.Course.DiscountPrice : null,
                TotalPrice = x.OrderType == FormEnum.Course ? (x.Course.DiscountPrice is null ? x.TotalPrice : x.TotalPrice - (x.Course.DiscountPrice.Value * x.Qty)) : 0,
                PicturePath = x.OrderType == FormEnum.Course ? GetFileUrl(x.Course.FileName,FileFoldersEnum.Course) : ""
            }).ToList());

            return Json(result);
        }

        [Route("/AddOrder")]
        [HttpPost]
        public async Task<ActionResult> AddOrder(FormEnum orderType, int orderItemId)
        {
            var dto = new OrderCreateDto();

            var userId = await _userService.GetUserId(User);
            if (orderType == FormEnum.Course)
            {
                dto.OrderType = orderType;

                var course = await _courseService.GetCourseDetails(orderItemId);
                dto.CourseId = orderItemId;
                dto.Price = course.Data.Price;
                dto.Qty = 1;
            }
            dto.UserId = userId.Data;
            var result = await _orderService.AddOrder(dto);

            return Json(result);
        }

        [Route("/RemoveOrder")]
        [HttpPost]
        public async Task<ActionResult> RemoveOrder(int orderId)
        {
            var result = await _orderService.RemoveOrder(orderId);

            return Json(result);
        }

        [Route("/RemoveAllOrders")]
        [HttpPost]
        public async Task<ActionResult> RemoveAllOrders()
        {
            var userId = await _userService.GetUserId(User).ConfigureAwait(false);

            var result = await _orderService.RemoveAllOrders(userId.Data);

            return Json(result);
        }

        [Route("/GetValidDiscount")]
        [HttpPost]
        public async Task<ActionResult> GetValidDiscount(string code)
        {
            var userId = await _userService.GetUserId(User).ConfigureAwait(false);
            
            var result = await _discountService.GetValidDiscount(code,userId.Data);

            return Json(result);
        }
    }
}
