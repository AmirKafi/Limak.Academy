using Limak.Academy.Application.Contract.Dto.Users;
using Limak.Academy.Application.Contract.Interfaces.Users;
using Limak.Academy.Controllers.Base;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Utility.ServiceResponse;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Limak.Academy.Controllers
{
    public class AccountController : BaseController
    {
        #region Constructor
        private readonly IUserService _userService;

        public AccountController(IUserService userService)
        {
            _userService = userService;
        }
        #endregion

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("/Login")]
        public async Task<ActionResult> Login()
        {
            return PartialView();
        }

        [HttpPost]
        [Route("/Login")]
        public async Task<ActionResult> Login(UserLoginDto dto)
        {
            var user = await _userService.Login(dto.UserName, dto.Password);
            return Json(user);
        }

        [HttpGet]
        [Route("/Register")]
        public async Task<ActionResult> Register()
        {
            return PartialView();
        }

        [HttpPost]
        [Route("/Register")]
        public async Task<ActionResult> Register(UserCreateDto dto)
        {
            dto.Role = RoleEnum.User;
            dto.IsActive = true;

            var user = await _userService.AddUser(dto);
            if(user.ResultStatus == ResultStatus.Successful)
                await _userService.Login(dto.UserName, dto.Password);

            return Json(user);
        }

        [HttpGet]
        [Route("/ChangePassword")]
        public async Task<ActionResult> ChangePassword()
        {
            var userId = await _userService.GetUserId(User);

            var model = new ChangePasswordDto();
            model.UserId = userId.Data;

            return PartialView(model);
        }

        [HttpPost]
        [Route("/ChangePassword")]
        public async Task<ActionResult> ChangePassword(ChangePasswordDto dto)
        {
            var user = await _userService.ChangePassword(dto);

            return Json(user);
        }

        [HttpPost]
        [Route("/SignOut")]
        public async Task<ActionResult> SignOut()
        {
            await _userService.SignOut(User);

            return RedirectToAction("Index", "Home");
        }
    }

}
