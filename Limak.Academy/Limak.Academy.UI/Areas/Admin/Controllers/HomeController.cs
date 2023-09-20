using Limak.Academy.Application.Contract.Dto;
using Limak.Academy.Application.Contract.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Limak.Academy.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Policy = "Admin")]
    public class HomeController : Controller
    {

        [Route("/Admin/Index")]
        public async Task<ActionResult> Index()
        {
            return View();
        }
    }
}
