using Limak.Academy.Application.Contract.Dto.Messages;
using Limak.Academy.Application.Contract.Interfaces.Categories;
using Limak.Academy.Application.Contract.Interfaces.Messages;
using Limak.Academy.Application.Contract.Interfaces.Users;
using Limak.Academy.Controllers.Base;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Limak.Academy.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Policy = "Admin")]
    public class MessageController : BaseController
    {
        #region Constrcutor
        private readonly IMessageService _messageService;
        private readonly IUserService _userService;

        public MessageController(IMessageService MessageService, IUserService userService)
        {
            _messageService = MessageService;
            _userService = userService;
        }

        #endregion

        [Route("/Message/Index")]
        public IActionResult Index()
        {
            ViewBag.ActivePage = "Message";

            return View();
        }

        [Route("/Message/LoadMessages")]
        public async Task<ActionResult> LoadMessages(MessageDto dto)
        {
            var data = await _messageService.LoadMessages(dto).ConfigureAwait(false);

            return Json(data);
        }

        [Route("/Message/Read")]
        [HttpGet]
        public async Task<ActionResult> Read(int messageId)
        {
            var message = await _messageService.GetMessage(messageId).ConfigureAwait(false);

            var model = message.Data;

            if (!model.IsRead)
            {
                var userId = await _userService.GetUserId(User);
                await _messageService.Read(messageId, userId.Data).ConfigureAwait(false);
            }

            return PartialView(message.Data);
        }
    }
}
