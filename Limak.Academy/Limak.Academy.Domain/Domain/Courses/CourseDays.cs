using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Framework.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Domain.Domain.Courses
{
    public class CourseDays : EntityId<int>
    {
        private CourseDays()
        {

        }
        public CourseDays(int courseId, int weekDayId)
        {
            CourseId = courseId;
            WeekDayId = weekDayId;
        }

        public int CourseId { get; set; }
        public int WeekDayId { get; set; }

        public virtual WeekDaysEnum WeekDay { get; set; }
        public virtual Course Course { get; set; }
    }
}
