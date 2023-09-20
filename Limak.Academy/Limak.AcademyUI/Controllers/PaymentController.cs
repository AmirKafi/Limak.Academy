using Limak.Academy.Application.Contract.Dto.Transactions;
using Limak.Academy.Application.Contract.Interfaces.Orders;
using Limak.Academy.Application.Contract.Interfaces.Transactions;
using Limak.Academy.Application.Contract.Interfaces.Users;
using Limak.Academy.Controllers.Base;
using Limak.Academy.Utility.ServiceResponse;
using Microsoft.AspNetCore.Mvc;

namespace Limak.Academy.Controllers
{
    public class PaymentController : BaseController
    {
        #region Constructor
        private readonly ITransactionService _service;
        private readonly IConfiguration _configuration;
        private readonly IOrderService _orderService;
        private readonly IUserService _userService;

        public PaymentController(ITransactionService service, IConfiguration configuration, IOrderService orderService, IUserService userService)
        {
            _service = service;
            _configuration = configuration;
            _orderService = orderService;
            _userService = userService;
        }
        #endregion

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Route("/Pay")]
        public async Task<ActionResult> Pay(List<int> ordersId, Int64 totalPrice, Int64 discountPrice,int? discountId)
        {
            var userId = await _userService.GetUserId(User);
            var isDevMode = _configuration.GetValue<bool>("DeveloperMode");
            var result = new ServiceResponse<int>();
            var model = new TransactionCreateDto();

            if (isDevMode)
            {
                model.OrdersId = ordersId;
                model.TotalPrice = totalPrice + (Int64)((decimal)totalPrice * (decimal)0.09);
                model.DiscountPrice = discountPrice;
                model.PaymentCode = "Test";
                model.PaymentResult = "200";
                model.PaymentResultDescription = "Test";
                model.DiscountId = discountId;

                result = await _service.Pay(model);
                if (result.ResultStatus == ResultStatus.Successful)
                {
                    await _orderService.Pay(ordersId,result.Data);
                }
            }

            if (result.ResultStatus == ResultStatus.Successful)
                await _orderService.RefreshOrders(userId.Data);

            return Json(result);
        }
    }
}
