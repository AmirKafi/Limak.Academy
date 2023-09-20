using Limak.Academy.Application.Contract.Dto.Orders;
using Limak.Academy.Utility.ServiceResponse;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Interfaces.Orders
{
    public interface IOrderService
    {
        Task<ServiceResponse<List<OrderListDto>>> LoadOrders(string userId);
        Task<ServiceResponse<List<OrderListDto>>> LoadPaidOrders(string userId);
        Task<ServiceResponse<bool>> AddOrder(OrderCreateDto dto);
        Task<ServiceResponse<bool>> RemoveOrder(int orderId);
        Task<ServiceResponse<bool>> RemoveAllOrders(string userId);
        Task RefreshOrders(string userId);
        Task<ServiceResponse<bool>> Pay(List<int> ordersId,int transactionId);
    }
}
