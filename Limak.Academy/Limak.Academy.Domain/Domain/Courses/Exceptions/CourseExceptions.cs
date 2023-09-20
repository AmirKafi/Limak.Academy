using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Domain.Domain.Courses.Exceptions
{
    public class CourseExceptions
    {
        public class TitleRequired : Exception
        {
            public TitleRequired(string message = "لطفا عنوان دوره را وارد کنید") : base(message)
            {

            }
        }
        public class CourseTypeRequired : Exception
        {
            public CourseTypeRequired(string message = "لطفا نوع دوره را انتخاب کنید") : base(message)
            {

            }
        }
        public class PriceRequired : Exception
        {
            public PriceRequired(string message = "لطفا قیمت دوره را وارد کنید") : base(message)
            {

            }
        }
    }
}
