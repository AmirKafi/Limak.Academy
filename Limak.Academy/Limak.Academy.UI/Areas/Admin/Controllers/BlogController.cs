using Limak.Academy.Application.Contract.Dto.Blogs;
using Limak.Academy.Application.Contract.Interfaces.Blogs;
using Limak.Academy.Application.Contract.Interfaces.Categories;
using Limak.Academy.Application.Contract.Interfaces.Users;
using Limak.Academy.Controllers.Base;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Utility.ServiceResponse;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Limak.Academy.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Policy = "Admin")]
    public class BlogController : BaseController
    {
        #region Constrcutor
        private readonly IBlogService _blogService;
        private readonly IUserService _userService;

        public BlogController(IBlogService BlogService, IUserService userService)
        {
            _blogService = BlogService;
            _userService = userService;
        }

        #endregion

        [Route("/Blog/Index")]
        public IActionResult Index()
        {
            ViewBag.ActivePage = "Blog";

            return View();
        }

        [Route("/Blog/LoadBlogs")]
        public async Task<ActionResult> LoadBlogs(BlogDto dto)
        {
            var data = await _blogService.LoadBlogs(dto).ConfigureAwait(false);
            if(data.ResultStatus == ResultStatus.Successful)
                data.Data.ForEach(x => x.PicturePath = GetFileUrl(x.Picture, FileFoldersEnum.Blog));

            return Json(data);
        }

        [HttpGet]
        [Route("/Blog/Create")]
        public async Task<ActionResult> Create()
        {
            ViewBag.ActivePage = "Blog";
            var model = new BlogCreateDto();

            return PartialView("Create", model);
        }

        [HttpPost]
        [Route("/Blog/Create")]
        public async Task<ActionResult> Create(BlogCreateDto dto)
        {
            ViewBag.ActivePage = "Blog";

            if (dto.PictureFile != null)
            {
                var fileName = SaveFile(dto.PictureFile, FileFoldersEnum.Blog);
                dto.Picture = fileName.Data;
            }
            var userId = await _userService.GetUserId(User);
            dto.AuthorId = userId.Data;

            var result = await _blogService.AddBlog(dto).ConfigureAwait(false);

            return Json(result);
        }

        [HttpGet]
        [Route("/Blog/Edit")]
        public async Task<ActionResult> Edit(int id)
        {
            ViewBag.ActivePage = "Blog";

            var Blog = await _blogService.GetBlog(id).ConfigureAwait(false);
            if (Blog.ResultStatus != ResultStatus.Successful)
            {
                Blog.SetException("GetDataFailed");
                return Json(Blog);
            }

            var model = Blog.Data;

            return PartialView("Edit", model);
        }

        [HttpPost]
        [Route("/Blog/Edit")]
        public async Task<ActionResult> Edit(BlogUpdateDto dto)
        {
            ViewBag.ActivePage = "Blog";

            if (dto.PictureFile != null)
            {
                var fileName = SaveFile(dto.PictureFile, FileFoldersEnum.Blog);
                dto.Picture = fileName.Data;
            }

            var result = await _blogService.UpdateBlog(dto).ConfigureAwait(false);

            return Json(result);
        }

        [HttpPost]
        [Route("/Blog/Delete")]
        public async Task<ActionResult> Delete(List<int> ids)
        {
            ViewBag.ActivePage = "Blog";

            var result = await _blogService.Delete(ids[0]).ConfigureAwait(false);

            return Json(result);
        }
    }
}
