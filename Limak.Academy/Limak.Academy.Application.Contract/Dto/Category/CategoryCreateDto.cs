using System.ComponentModel.DataAnnotations;

namespace Limak.Academy.Application.Contract.Dto.Category
{
    public class CategoryCreateDto
    {
        [Display(Name = "عنوان")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public string Title { get; set; }
    }
}
