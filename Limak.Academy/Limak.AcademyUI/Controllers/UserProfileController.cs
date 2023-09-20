using Limak.Academy.Application.Contract.Dto.Users;
using Limak.Academy.Application.Contract.Interfaces.Orders;
using Limak.Academy.Application.Contract.Interfaces.Users;
using Limak.Academy.Controllers.Base;
using Limak.Academy.Domain.Domain.Users;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Utility.ServiceResponse;
using Microsoft.AspNetCore.Mvc;

namespace Limak.Academy.Controllers
{
    public class UserProfileController : BaseController
    {
        #region Constructor
        private readonly IUserService _userService;
        private readonly IOrderService _orderService;

        public UserProfileController(IUserService userService, IOrderService orderService)
        {
            _userService = userService;
            _orderService = orderService;
        }

        #endregion
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<ActionResult> UserSetting()
        {
            ViewBag.ActivePage = "UserSetting";

            var userId = await _userService.GetUserId(User).ConfigureAwait(false);

            var model = await _userService.GetUser(userId.Data).ConfigureAwait(false);

            return View(model.Data);
        }

        [HttpPost]
        public async Task<ActionResult> UserSetting(UserUpdateDto dto)
        {
            ViewBag.ActivePage = "UserSetting";

            var user = await _userService.GetUser(dto.Id).ConfigureAwait(false);
            dto.Role = user.Data.Role;
            dto.IsActive= user.Data.IsActive;

            var result = await _userService.UpdateUser(dto).ConfigureAwait(false);

            return Json(result);
        }

        [HttpGet]
        public IActionResult UserFavourites()
        {
            return View();
        }

        public async Task<ActionResult> UserCourses()
        {
            ViewBag.ActivePage = "UserCourses";
            var userId = await _userService.GetUserId(User);
            var orders = await _orderService.LoadPaidOrders(userId.Data);
            if (orders.ResultStatus == ResultStatus.Successful)
                orders.Data.ForEach(x => x.Course.FilePath = GetFileUrl(x.Course.FileName, FileFoldersEnum.Course));

            return View(orders.Data);
        }
    }
}
