using Limak.Academy.Application.Contract.Dto.Category;
using Limak.Academy.Application.Contract.Interfaces.Categories;
using Limak.Academy.Controllers.Base;
using Limak.Academy.Utility.ServiceResponse;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Limak.Academy.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Policy = "Admin")]
    public class CategoryController : BaseController
    {

        #region Constrcutor
        private readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        #endregion

        [Route("/Category/Index")]
        public IActionResult Index()
        {
            ViewBag.ActivePage = "Category";

            return View();
        }

        [Route("/Category/LoadCategories")]
        public async Task<ActionResult> LoadCategories(CategoryDto dto)
        {
            var data = await _categoryService.LoadCategories(dto).ConfigureAwait(false);

            return Json(data);
        }

        [HttpGet]
        [Route("/Category/Create")]
        public async Task<ActionResult> Create()
        {
            ViewBag.ActivePage = "Category";
            var model = new CategoryCreateDto();

            return PartialView("Create", model);
        }

        [HttpPost]
        [Route("/Category/Create")]
        public async Task<ActionResult> Create(CategoryCreateDto dto)
        {
            ViewBag.ActivePage = "Category";


            var result = await _categoryService.AddCategory(dto).ConfigureAwait(false);

            return Json(result);
        }

        [HttpGet]
        [Route("/Category/Edit")]
        public async Task<ActionResult> Edit(int id)
        {
            ViewBag.ActivePage = "Category";

            var Category = await _categoryService.GetCategory(id).ConfigureAwait(false);
            if (Category.ResultStatus != ResultStatus.Successful)
            {
                Category.SetException("GetDataFailed");
                return Json(Category);
            }

            var model = Category.Data;

            return PartialView("Edit", model);
        }

        [HttpPost]
        [Route("/Category/Edit")]
        public async Task<ActionResult> Edit(CategoryUpdateDto dto)
        {
            ViewBag.ActivePage = "Category";

            var result = await _categoryService.UpdateCategory(dto).ConfigureAwait(false);

            return Json(result);
        }

        [HttpPost]
        [Route("/Category/Delete")]
        public async Task<ActionResult> Delete(List<int> ids)
        {
            ViewBag.ActivePage = "Category";

            var result = await _categoryService.Delete(ids[0]).ConfigureAwait(false);

            return Json(result);
        }
    }
}