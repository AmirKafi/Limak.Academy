using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Dto.Discounts
{
    public class ApplyDiscountDto
    {
        [Display(Name = "دوره")]
        public int? CourseId { get; set; }

        [Display(Name = "کد تخفیف")]
        public int DiscountId { get; set; }

        public List<SelectListItem> Discounts { get; set; }
    }
}
