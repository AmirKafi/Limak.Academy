using Limak.Academy.Domain.Enums;
using Limak.Academy.Framework.Core.Enum;
using Microsoft.AspNetCore.Http;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Limak.Academy.Application.Contract.Dto.Course
{
    public class CourseCreateDto
    {
        [DisplayName("عنوان دوره")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public string? Title { get; set; }

        [DisplayName("نوع")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public CourseTypeEnum? CourseType { get; set; }

        [DisplayName("مبلغ")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public Int64? Price { get; set; }

        [DisplayName("توضیحات")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public string? Description { get; set; }

        [DisplayName("کد لایسنس")]
        public string? LicenseKey { get; set; }

        [DisplayName("تصویر")]
        public string? FileName { get; set; }
        public IFormFile File { get; set; }

        [DisplayName("از ساعت")]
        public TimeOnly? FromTime { get; set; }

        [DisplayName("تا ساعت")]
        public TimeOnly? ToTime { get; set; }

        [DisplayName("از تاریخ")]
        public string? FromDateLocal { get; set; }
        public DateOnly? FromDate { get; set; }

        [DisplayName("تا تاریخ")]
        public string? ToDateLocal { get; set; }
        public DateOnly? ToDate { get; set; }

        [DisplayName("محل برگزاری")]
        public string? EventAddress { get; set; }

        [DisplayName("روز های برگزاری")]
        public List<WeekDaysEnum> EventDays { get; set; }

        [DisplayName("مدرس")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public int TeacherId { get; set; }

        [DisplayName("دسته بندی")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public int CategoryId { get; set; }

        [DisplayName("تگ ها")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public string TagsLocal { get; set; }

        public List<string>? Tags { get; set; }
    }

}
