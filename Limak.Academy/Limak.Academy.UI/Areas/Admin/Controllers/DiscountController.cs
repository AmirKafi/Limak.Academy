using Limak.Academy.Application.Contract.Dto.Category;
using Limak.Academy.Application.Contract.Dto.Discounts;
using Limak.Academy.Application.Contract.Interfaces.Course;
using Limak.Academy.Application.Contract.Interfaces.Discounts;
using Limak.Academy.Application.Contract.Interfaces.Users;
using Limak.Academy.Controllers.Base;
using Limak.Academy.Utility.ServiceResponse;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Limak.Academy.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Policy = "Admin")]
    public class DiscountController : BaseController
    {

        #region Constructor
        private readonly IDiscountService _discountService;
        private readonly IUserService _userService;
        private readonly ICourseService _courseService;

        public DiscountController(IDiscountService discountService, ICourseService courseService, IUserService userService)
        {
            _discountService = discountService;
            _courseService = courseService;
            _userService = userService;
        }
        #endregion

        [Route("/Discount/Index")]
        public IActionResult Index()
        {
            return View();
        }

        [Route("/Discount/LoadDiscounts")]
        public async Task<ActionResult> LoadDiscounts(int offset, int limit)
        {
            var dto = new DiscountDto()
            {
                offset = offset,
                limit = limit
            };
            var data = await _discountService.LoadDiscounts(dto).ConfigureAwait(false);

            return Json(data);
        }

        [HttpGet]
        [Route("/Discount/Create")]
        public async Task<ActionResult> Create()
        {
            ViewBag.ActivePage = "Discount";

            var users = await _userService.LoadUsers().ConfigureAwait(false);
            var courses = await _courseService.LoadCoursesAsCombo().ConfigureAwait(false);

            var model = new DiscountCreateDto();
            model.Users = ComboToSelectList(users.Data);
            model.Courses = ComboToSelectList(courses.Data);

            return PartialView("Create", model);
        }

        [HttpPost]
        [Route("/Discount/Create")]
        public async Task<ActionResult> Create(DiscountCreateDto dto)
        {
            ViewBag.ActivePage = "Discount";

            if (!dto.IsSpecifiedByUser)
                dto.SpecifiedUserId = null;
            else if (dto.SpecifiedUserId is null)
                ModelState.AddModelError("", "لطفا کاربر مورد نظر خود را انتخاب کنید");

            if (!ModelState.IsValid)
            {
                var error = new ServiceResponse<bool>();
                error.SetException(GetErrorMessages());
                return Json(error);
            }

            var result = await _discountService.AddDiscount(dto).ConfigureAwait(false);

            return Json(result);
        }

        [HttpPost]
        [Route("/Discount/UpdateExpiration")]
        public async Task<ActionResult> UpdateExpiration(int discountId, bool expire)
        {

            var result = await _discountService.UpdateExpiration(discountId, expire).ConfigureAwait(false);

            return Json(result);
        }
    }
}
