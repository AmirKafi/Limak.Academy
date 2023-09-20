using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace Limak.Academy.Application.Contract.Dto.Blogs
{
    public class BlogUpdateDto
    {
        public int Id { get; set; }

        [Display(Name = "عنوان مطلب")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public string Title { get; set; }

        [Display(Name = "متن مطلب")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public string TextBody { get; set; }

        [Display(Name = "تصویر")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public string Picture { get; set; }
        public IFormFile PictureFile { get; set; }
    }
}
