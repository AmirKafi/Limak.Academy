using Microsoft.AspNetCore.Mvc.Rendering;
using System.ComponentModel.DataAnnotations;

namespace Limak.Academy.Application.Contract.Dto.Discounts
{
    public class DiscountCreateDto
    {
        [Display(Name = "کد تخفیف")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public string Code { get; set; }

        [Display(Name = "مقدار(درصد)")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public int Precentage { get; set; }

        [Display(Name = "توضیحات")]
        public string? Description { get; set; }

        [Display(Name = "منحصر به کاربر مشخصی می باشد؟")]
        public bool IsSpecifiedByUser { get; set; } = false;

        [Display(Name = "کاربر")]
        public string? SpecifiedUserId { get; set; }

        [Display(Name = "تاریخ انقضا")]
        public DateOnly? ExpireDate { get; set; }

        public List<SelectListItem>? Users { get; set; }
        public List<SelectListItem>? Courses { get; set; }
    }
}
