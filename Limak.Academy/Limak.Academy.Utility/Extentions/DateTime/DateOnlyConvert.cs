using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Utility.Extentions.DateTime
{
    using System;

    public static class DateOnlyConvert
    {
        public static DateOnly AsDateOnly(this DateTime dt)
        {
            return DateOnly.FromDateTime(dt);
        }

        public static DateOnly? AsDateOnly(this DateTime? dt)
        {
            return dt is null ? null : DateOnly.FromDateTime(dt.Value);
        }

        public static DateTime AsDateTime(this DateOnly dt)
        {
            return dt.ToDateTime(TimeOnly.Parse("10:00 AM"));
        }

        public static DateTime? AsDateTime(this DateOnly? dt)
        {
            return dt is null ? null : dt.Value.AsDateTime();
        }
    }
}
