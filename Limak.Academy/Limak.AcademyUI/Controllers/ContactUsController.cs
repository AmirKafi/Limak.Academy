using Limak.Academy.Application.Contract.Dto.Messages;
using Limak.Academy.Application.Contract.Interfaces.Configs;
using Limak.Academy.Application.Contract.Interfaces.Messages;
using Limak.Academy.Application.Contract.Interfaces.Users;
using Limak.Academy.Controllers.Base;
using Limak.Academy.Utility.ServiceResponse;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Limak.Academy.Controllers
{
    public class ContactUsController : BaseController
    {
        #region Constructor
        private readonly IConfigService _configService;
        private readonly IUserService _usesrService;
        private readonly IMessageService _messageService;

        public ContactUsController(IMessageService messageService, IConfigService configService, IUserService usesrService)
        {
            _messageService = messageService;
            _configService = configService;
            _usesrService = usesrService;
        }
        #endregion

        [Route("/ContactUs")]
        public async Task<ActionResult> Index()
        {
            var model = await _configService.GetConfig().ConfigureAwait(false);

            return View(model.Data);
        }

        [Route("/SendMessage")]
        [HttpPost]
        public async Task<ActionResult> SendMessage(MessageCreateDto dto)
        {
            string message = "";
            if (dto.Title is null)
                message += "لطفا عنوان پیام را وارد کنید" + "</br>";
            if (dto.MessageBody is null)
                message += "لطفا متن پیام را وارد کنید" + "</br>";


            var userId = await _usesrService.GetUserId(User).ConfigureAwait(false);
            dto.SenderId = userId.Data;

            if (!message.IsNullOrEmpty())
            {
                var error = new ServiceResponse<bool>();
                error.SetException(message);
                return Json(error);
            }
            var model = await _messageService.AddMessage(dto).ConfigureAwait(false);

            return Json(model.Data);
        }
    }
}
