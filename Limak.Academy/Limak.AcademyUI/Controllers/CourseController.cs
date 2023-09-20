using Limak.Academy.Application.Contract.Dto.Course;
using Limak.Academy.Application.Contract.Interfaces.Course;
using Limak.Academy.Application.Contract.Interfaces.Favourites;
using Limak.Academy.Application.Contract.Interfaces.Users;
using Limak.Academy.Controllers.Base;
using Limak.Academy.Domain.Enums;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Utility.Extentions;
using Microsoft.AspNetCore.Mvc;

namespace Limak.Academy.Controllers
{
    public class CourseController : BaseController
    {
        #region Constructor
        private readonly ICourseService _courseService;
        private readonly IFavouriteService _favouriteService;
        private readonly IUserService _userService;

        public CourseController(ICourseService courseService, IFavouriteService favouriteService, IUserService userService)
        {
            _courseService = courseService;
            _favouriteService = favouriteService;
            _userService = userService;
        }

        #endregion

        [Route("/OfflineCourses")]
        public async Task<ActionResult> OfflineCourses(CourseDto dto)
        {
            dto.CourseType = CourseTypeEnum.Offline;
            dto.limit = 100;
            dto.offset = 0;

            var courses = await _courseService.LoadCourses(dto).ConfigureAwait(false);
            courses.Data.ForEach(x => x.FilePath = GetFileUrl(x.FileName, FileFoldersEnum.Course));
            courses.Data.ForEach(x => x.TeacherFilePath = GetFileUrl(x.TeacherFileName, FileFoldersEnum.Teacher));

            ViewBag.CourseType = dto.CourseType;
            return View("Index", courses.Data);
        }

        [Route("/OnlineCourses")]
        public async Task<ActionResult> OnlineCourses(CourseDto dto)
        {
            dto.CourseType = CourseTypeEnum.Online;
            dto.limit = 100;
            dto.offset = 0;

            var courses = await _courseService.LoadCourses(dto).ConfigureAwait(false);
            courses.Data.ForEach(x => x.FilePath = GetFileUrl(x.FileName, FileFoldersEnum.Course));
            courses.Data.ForEach(x => x.TeacherFilePath = GetFileUrl(x.TeacherFileName, FileFoldersEnum.Teacher));

            ViewBag.CourseType = dto.CourseType;
            return View("Index", courses.Data);
        }

        [Route("/CourseDetails")]
        public async Task<ActionResult> CourseDetails(int courseId)
        {
            var course = await _courseService.GetCourseDetails(courseId).ConfigureAwait(false);
            var model = course.Data;

            model.FilePath = GetFileUrl(model.FileName, FileFoldersEnum.Course);
            model.TeacherFilePath = GetFileUrl(model.TeacherFileName, FileFoldersEnum.Teacher);

            var userId = await _userService.GetUserId(User).ConfigureAwait(false);

            var isFavourite = await _favouriteService.IsFavourite(userId.Data,FormEnum.Course,courseId);

            model.IsCurrentUserFavourite = isFavourite.Data;

            return View("CourseDetails", course.Data);
        }
    }
}
