using Azure;
using Limak.Academy.Domain.Domain.Categories;
using Limak.Academy.Domain.Enums;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Framework.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Limak.Academy.Domain.Domain.Tags;
using Limak.Academy.Domain.Domain.Teachers;
using Limak.Academy.Domain.Domain.Discounts;

namespace Limak.Academy.Domain.Domain.Courses
{
    public class Course : EntityId<int>
    {
        private Course()
        {

        }
        public Course(string title,
                      CourseTypeEnum courseType,
                      Int64 price,
                      string description,
                      string? licenseKey,
                      string fileName,
                      TimeOnly? fromTime,
                      TimeOnly? toTime,
                      DateOnly? fromDate,
                      DateOnly? toDate,
                      string? eventAddress,
                      List<WeekDaysEnum> eventDays,
                      int teacherId,
                      int categoryId,
                      List<Tag> tags)
        {
            Title = title;
            CourseType = courseType;
            Price = price;
            Description = description;
            FileName = fileName;
            TeacherId = teacherId;
            CategoryId = categoryId;

            if (courseType == CourseTypeEnum.Online)
            {
                LicenseKey = licenseKey;
                FromDate = null;
                ToDate = null;
                EventAddress = null;
                _eventDays = new List<CourseDays>();
            }
            else
            {
                LicenseKey = null;
                FromDate = fromDate?.ToDateTime(fromTime ?? default);
                ToDate = toDate?.ToDateTime(toTime ?? default);
                EventAddress = eventAddress;
                _eventDays = eventDays.Select(x => new CourseDays(this.Id, (int)x)).ToList();
            }
            _tags = tags;
            TeacherId = teacherId;
        }

        #region Properties
        public string Title { get; private set; }
        public CourseTypeEnum CourseType { get; private set; }
        public Int64 Price { get; private set; }
        public string Description { get; private set; }
        public string? LicenseKey { get; private set; }
        public string FileName { get; private set; }
        public DateTime? FromDate { get; private set; }
        public DateTime? ToDate { get; private set; }
        public string? EventAddress { get; private set; }

        public List<CourseDays> _eventDays { get; private set; } = new List<CourseDays>();
        public virtual ICollection<CourseDays> EventDays => _eventDays;

        public List<Tag> _tags { get; private set; } = new List<Tag>();
        public ICollection<Tag> Tags => _tags;

        public int TeacherId { get; private set; }
        public Teacher Teacher { get; private set; }

        public int CategoryId { get; private set; }
        public Category Category { get; private set; }

        public int? DiscountId { get; set; }
        public Discount Discount { get; set; }

        #endregion

        #region Methods

        public Course Update(string title,
                             CourseTypeEnum courseType,
                             Int64 price,
                             string description,
                             string? licenseKey,
                             string fileName,
                             TimeOnly? fromTime,
                             TimeOnly? toTime,
                             DateOnly? fromDate,
                             DateOnly? toDate,
        string? eventAddress,
                             List<WeekDaysEnum> eventDays,
                             int teacherId,
                             int categoryId,
                             List<Tag> tags)
        {
            Title = title;
            CourseType = courseType;
            Price = price;
            Description = description;
            FileName = fileName;
            TeacherId = teacherId;
            CategoryId = categoryId;

            _tags.Clear();
            _tags = tags;

            if (courseType == CourseTypeEnum.Online)
            {
                LicenseKey = licenseKey;
                FromDate = null;
                ToDate = null;
                EventAddress = null;
                _eventDays = new List<CourseDays>();
            }
            else
            {
                LicenseKey = null;
                FromDate = fromDate?.ToDateTime(fromTime ?? default);
                ToDate = toDate?.ToDateTime(toTime ?? default);
                EventAddress = eventAddress;
                _eventDays.Clear();
                _eventDays.AddRange(eventDays.Select(x => new CourseDays(this.Id, (int)x)).ToList());
            }
            return this;
        }

        public Course SetDiscount(int discount)
        {
            this.DiscountId = discount;
            return this;
        }
        public Course RemoveDiscount()
        {
            this.DiscountId = null;
            return this;
        }
        #endregion
    }
}
