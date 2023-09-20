using Limak.Academy.Application.Contract.Dto.Course;
using Limak.Academy.Domain.Domain.Courses;
using Limak.Academy.Domain.Domain.Tags;
using Limak.Academy.Domain.Domain.Users;
using Limak.Academy.Framework.Core;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Utility.Extentions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Mappers.Courses
{
    public static class CourseMapper
    {
        public static Course ToModel(this CourseCreateDto dto)
        {
            return new Course(dto.Title,
                              dto.CourseType.Value,
                              dto.Price.Value,
                              dto.Description,
                              dto.LicenseKey,
                              dto.FileName,
                              dto.FromTime,
                              dto.ToTime,
                              dto.FromDate,
                              dto.ToDate,
                              dto.EventAddress,
                              dto.EventDays,
                              dto.TeacherId,
                              dto.CategoryId,
                              dto.Tags.Select(x => new Tag(x, TagTypesEnum.Course)).ToList());
        }

        public static List<CourseListDto> ToDto(this IEnumerable<Course>? model)
        {
            if (model is null)
                return new List<CourseListDto>();

            return model.Select(x => new CourseListDto()
            {
                Id = x.Id,
                Title = x.Title,
                CourseType = x.CourseType,
                Price = x.Price,
                Description = x.Description,
                FileName = x.FileName,
                EventAddress = x.EventAddress,
                FromTime = TimeOnly.FromDateTime(x.FromDate ?? default),
                ToTime = TimeOnly.FromDateTime(x.ToDate ?? default),
                FromDate = DateOnly.FromDateTime(x.FromDate ?? default),
                ToDate = DateOnly.FromDateTime(x.ToDate ?? default),
                TeacherName = x.Teacher is null ? "" : x.Teacher.FullName,
                CategoryTitle = x.Category is null ? "" : x.Category.Title,
                TeacherFileName = x.Teacher.FileName is null ? "TeacherDefault.jpg" : x.Teacher.FileName,
                CreatedOn = x.CreatedOn,
                Tags = x.Tags is null ? new List<string>() : x.Tags.Select(x => x.Title).ToList(),
                DiscountPrice = x.Discount is null ? null : (Int64)((x.Price) * (Convert.ToDecimal(x.Discount.Precentage) / 100)),
                DiscountPrecentage = x.Discount is null ? null : x.Discount.Precentage
            }).ToList();
        }

        public static CourseUpdateDto ToDto(this Course model)
        {
            return new CourseUpdateDto()
            {
                Id = model.Id,
                Title = model.Title,
                CourseType = model.CourseType,
                Price = model.Price,
                Description = model.Description,
                LicenseKey = model.LicenseKey,
                FileName = model.FileName,
                EventAddress = model.EventAddress,
                FromTime = TimeOnly.FromDateTime(model.FromDate ?? default),
                ToTime = TimeOnly.FromDateTime(model.ToDate ?? default),
                FromDate = DateOnly.FromDateTime(model.FromDate ?? default),
                ToDate = DateOnly.FromDateTime(model.ToDate ?? default),
                EventDays = model.EventDays.Select(x => (WeekDaysEnum)x.WeekDayId).ToList(),
                TeacherId = model.TeacherId,
                CategoryId = model.CategoryId,
                Tags = model.Tags is null ? new List<string>() : model.Tags.Select(x => x.Title).ToList()
            };
        }

        public static CourseDetailsDto ToDetailDto(this Course model)
        {
            return new CourseDetailsDto()
            {
                CourseId = model.Id,
                Title = model.Title,
                CourseType = model.CourseType,
                Price = model.Price,
                Description = model.Description,
                FileName = model.FileName,
                EventAddress = model.EventAddress,
                FromTime = TimeOnly.FromDateTime(model.FromDate ?? default),
                ToTime = TimeOnly.FromDateTime(model.ToDate ?? default),
                FromDate = DateOnly.FromDateTime(model.FromDate ?? default),
                ToDate = DateOnly.FromDateTime(model.ToDate ?? default),
                EventDays = string.Join(" , ", model.EventDays.Select(x => ((WeekDaysEnum)x.WeekDayId).GetDisplayName()).ToList()),
                Tags = model.Tags is null ? new List<string>() : model.Tags.Select(x => x.Title).ToList(),
                TeacherFileName = model.Teacher.FileName,
                CategoryTitle = model.Category is null ? "" : model.Category.Title,
                TeacherName = model.Teacher.FullName,
                CreatedOn = model.CreatedOn,
                DiscountPrice = model.Discount is null ? null : (Int64)((model.Price) * (Convert.ToDecimal(model.Discount.Precentage) / 100)),
                DiscountPrecentage = model.Discount is null ? null : model.Discount.Precentage
            };
        }

        public static List<ComboModel> ToCombo(this List<Course>? model)
        {
            if (model is null)
                return new List<ComboModel>();
            else
                return model.Select(x => new ComboModel()
                {
                    Value = x.Id,
                    Title = x.Title
                }).ToList();
        }
    }
}
