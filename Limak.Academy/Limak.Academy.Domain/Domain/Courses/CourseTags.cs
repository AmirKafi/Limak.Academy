using Azure;
using Limak.Academy.Domain.Domain.Tags;
using Limak.Academy.Framework.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Domain.Domain.Courses
{
    public class CourseTags : IValueObject
    {
        public CourseTags(int tagId, int courseId)
        {
            this.TagId = tagId;
            this.CourseId = courseId;
        }

        public int TagId { get; set; }
        public int CourseId { get; set; }

        public Tag Tag { get; set; }
        public Course Course { get; set; }
    }
}
