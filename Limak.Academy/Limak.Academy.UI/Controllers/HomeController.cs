using Limak.Academy.Application.Contract.Dto;
using Limak.Academy.Application.Contract.Dto.Blogs;
using Limak.Academy.Application.Contract.Dto.Orders;
using Limak.Academy.Application.Contract.Dto.Users;
using Limak.Academy.Application.Contract.Interfaces.Blogs;
using Limak.Academy.Application.Contract.Interfaces.Categories;
using Limak.Academy.Application.Contract.Interfaces.Configs;
using Limak.Academy.Application.Contract.Interfaces.Course;
using Limak.Academy.Application.Contract.Interfaces.Orders;
using Limak.Academy.Application.Contract.Interfaces.Teachers;
using Limak.Academy.Application.Contract.Interfaces.Users;
using Limak.Academy.Application.Services.Users;
using Limak.Academy.Controllers.Base;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Models;
using Limak.Academy.Utility.ServiceResponse;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace Limak.Academy.Controllers
{
    public class HomeController : BaseController
    {
        #region Constructor
        private readonly ICategoryService _categoryService;
        private readonly ITeacherService _teacherService;
        private readonly ICourseService _courseService;
        private readonly IBlogService _blogService;
        private readonly IOrderService _orderService;

        public HomeController(ICategoryService categoryService,
                              ITeacherService teacherService,
                              ICourseService courseService,
                              IBlogService blogService,
                              IOrderService orderService)
        {
            _categoryService = categoryService;
            _teacherService = teacherService;
            _courseService = courseService;
            _blogService = blogService;
            _orderService = orderService;
        }
        #endregion

        public async Task<ActionResult> Index()
        {
            var model = new HomeItemsDto();

            //Category
            var category = await _categoryService.LoadCategories().ConfigureAwait(false);
            model.Categories = category.Data;


            //Courses
            var courses = await _courseService.LoadCourses().ConfigureAwait(false);
            model.Courses = courses.Data;
            model.Courses.ForEach(x => x.FilePath = GetFileUrl(x.FileName, FileFoldersEnum.Course));
            model.Courses.ForEach(x => x.TeacherFilePath = GetFileUrl(x.TeacherFileName, FileFoldersEnum.Teacher));


            //Teacher
            var teacher = await _teacherService.LoadTeachers().ConfigureAwait(false);
            model.Teachers = teacher.Data;
            model.Teachers.ForEach(x => x.FilePath = GetFileUrl(x.FileName, FileFoldersEnum.Teacher));


            //Blog
            var blogs = await _blogService.LoadBlogs(new BlogDto() { limit = 6, offset = 0 }).ConfigureAwait(false);
            model.Blogs = blogs.Data;
            model.Blogs.ForEach(x => x.PicturePath = GetFileUrl(x.Picture, FileFoldersEnum.Blog));

            return View(model);
        }

        [Route("/Search")]
        public async Task<ActionResult> Search(string? query)
        {
            var model = new HomeItemsDto();
            model.SearchText = query;
            //Courses
            var courses = await _courseService.LoadCourses(query).ConfigureAwait(false);
            model.Courses = courses.Data;
            if (courses.ResultStatus == ResultStatus.Successful)
            {
                model.Courses.ForEach(x => x.FilePath = GetFileUrl(x.FileName, FileFoldersEnum.Course));
                model.Courses.ForEach(x => x.TeacherFilePath = GetFileUrl(x.TeacherFileName, FileFoldersEnum.Teacher));
            }


            //Teacher
            var teacher = await _teacherService.LoadTeachers(query).ConfigureAwait(false);
            model.Teachers = teacher.Data;
            if (teacher.ResultStatus == ResultStatus.Successful)
            {
                model.Teachers.ForEach(x => x.FilePath = GetFileUrl(x.FileName, FileFoldersEnum.Teacher));
            }


            //Blog
            var blogs = await _blogService.LoadBlogs(query).ConfigureAwait(false);
            model.Blogs = blogs.Data;
            if (blogs.ResultStatus == ResultStatus.Successful)
            {
                model.Blogs.ForEach(x => x.PicturePath = GetFileUrl(x.Picture, FileFoldersEnum.Blog));
            }

            return View(model);
        }
    }
}