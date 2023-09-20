using Limak.Academy.Domain.Domain.Courses;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Framework.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Domain.Domain.Tags
{
    public class Tag : EntityId<int>
    {
        public Tag(string title, TagTypesEnum tagType)
        {
            this.Title = title;
            this.TagType = tagType;
        }
        public string Title { get; set; }
        public TagTypesEnum TagType { get; set; }

        public int CourseId { get; set; }
        public Course Course { get; set; }
    }
}
