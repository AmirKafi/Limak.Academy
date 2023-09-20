using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace Limak.Academy.Application.Contract.Dto.Blogs
{
    public class BlogCreateDto
    {
        [Display(Name = "عنوان مطلب")]
        [Required(ErrorMessage ="این فیلد اجباری می باشد")]
        public string Title { get; set; }

        [Display(Name = "متن مطلب")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public string TextBody { get; set; }

        public string AuthorId { get; set; }

        [Display(Name = "تصویر")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public string Picture { get; set; }
        public IFormFile PictureFile { get; set; }
    }
}
