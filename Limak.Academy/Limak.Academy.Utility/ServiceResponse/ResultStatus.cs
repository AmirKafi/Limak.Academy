using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Utility.ServiceResponse
{
    public enum ResultStatus
    {
        /// <summary>
        /// این مقدار نشاندهنده وجود استثناء در اجرای دستور است
        /// </summary>
        Exception = -3,
        /// <summary>
        /// در مراحل اجرای دستور، دیتای مورد نظر یافت نشد
        /// </summary>
        DataNotFound = -2,
        /// <summary>
        /// اجرای دستور، ناموفق بود
        /// </summary>
        UnSuccessful = -1,
        /// <summary>
        /// وضعیت پیش فرض است
        /// </summary>
        UnKnown = 0,
        /// <summary>
        /// دستور با موفقیت اجرا شد
        /// </summary>
        Successful = 1

    }
}
