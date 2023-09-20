using Limak.Academy.Domain.Enums;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Utility.Extentions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Dto.Course
{
    public class CourseListDto:BaseListDto<int>
    {
        public string Title { get; set; }
        public CourseTypeEnum CourseType { get; set; }
        public string? CourseTypeTitle => CourseType.GetDisplayName();
        public Int64 Price { get; set; }
        public string Description { get; set; }
        public TimeOnly? FromTime { get; set; }
        public TimeOnly? ToTime { get; set; }

        public DateOnly? FromDate { get; set; }

        public DateOnly? ToDate { get; set; }

        public string? EventAddress { get; set; }

        public string CategoryTitle { get; set; }
        public string TeacherName { get; set; }
        public string TeacherFileName { get; set; }
        public string TeacherFilePath { get; set; }

        public Int64? DiscountPrice { get; set; }
        public Int64? DiscountPrecentage { get; set; }

        public List<WeekDaysEnum> _eventDays { get; set; }

        public string FilePath { get; set; }
        public string FileName { get; set; }

        public List<string> Tags { get; set; }
    }
}
