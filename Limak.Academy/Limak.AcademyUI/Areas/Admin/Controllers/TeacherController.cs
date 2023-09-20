using Limak.Academy.Application.Contract.Dto.Teacher;
using Limak.Academy.Application.Contract.Interfaces.Teachers;
using Limak.Academy.Controllers.Base;
using Limak.Academy.Domain.Enums;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Utility.ServiceResponse;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Limak.Academy.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Policy = "Admin")]
    public class TeacherController : BaseController
    {

        #region Constrcutor
        private readonly ITeacherService _teacherService;

        public TeacherController(ITeacherService TeacherService)
        {
            _teacherService = TeacherService;
        }

        #endregion

        [Route("/Teacher/Index")]
        public IActionResult Index()
        {
            ViewBag.ActivePage = "Teacher";

            return View();
        }

        [Route("/Teacher/LoadTeachers")]
        public async Task<ActionResult> LoadTeachers(TeacherDto dto)
        {
            var data = await _teacherService.LoadTeachers(dto).ConfigureAwait(false);
            if (data.ResultStatus == ResultStatus.Successful)
                data.Data.ForEach(x => x.FilePath = GetFileUrl(x.FileName, FileFoldersEnum.Teacher));

            return Json(data);
        }

        [HttpGet]
        [Route("/Teacher/Create")]
        public async Task<ActionResult> Create()
        {
            ViewBag.ActivePage = "Teacher";
            var model = new TeacherCreateDto();

            return PartialView("Create", model);
        }

        [HttpPost]
        [Route("/Teacher/Create")]
        public async Task<ActionResult> Create(TeacherCreateDto dto)
        {
            ViewBag.ActivePage = "Teacher";


            if (dto.File != null)
            {
                var fileName = SaveFile(dto.File, FileFoldersEnum.Teacher);
                dto.FileName = fileName.Data;
            }
            else
                dto.FileName = "TeacherDefault.jpg";

            var result = await _teacherService.AddTeacher(dto).ConfigureAwait(false);

            return Json(result);
        }

        [HttpGet]
        [Route("/Teacher/Edit")]
        public async Task<ActionResult> Edit(int id)
        {
            ViewBag.ActivePage = "Teacher";

            var Teacher = await _teacherService.GetTeacher(id).ConfigureAwait(false);
            if (Teacher.ResultStatus != ResultStatus.Successful)
            {
                Teacher.SetException("GetDataFailed");
                return Json(Teacher);
            }

            var model = Teacher.Data;

            return PartialView("Edit", model);
        }

        [HttpPost]
        [Route("/Teacher/Edit")]
        public async Task<ActionResult> Edit(TeacherUpdateDto dto)
        {
            ViewBag.ActivePage = "Teacher";


            if(dto.File != null)
            {
                var fileName = SaveFile(dto.File, FileFoldersEnum.Teacher);
                dto.FileName = fileName.Data;
            }
            else
                dto.FileName = "TeacherDefault.jpg";

            var result = await _teacherService.UpdateTeacher(dto).ConfigureAwait(false);

            return Json(result);
        }

        [HttpPost]
        [Route("/Teacher/Delete")]
        public async Task<ActionResult> Delete(List<int> ids)
        {
            ViewBag.ActivePage = "Teacher";

            var result = await _teacherService.Delete(ids[0]).ConfigureAwait(false);

            return Json(result);
        }
    }
}
