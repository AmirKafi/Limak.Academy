using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace Limak.Academy.Application.Contract.Dto.Teacher
{
    public class TeacherUpdateDto
    {
        public int Id { get; set; }

        [Display(Name = "نام و نام خانوادگی مدرس")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public string FullName { get; set; }

        [Display(Name = "تصویر")]
        public string? FileName { get; set; }
        public IFormFile? File { get; set; }
    }
}
