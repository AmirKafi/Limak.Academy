using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Limak.Academy.Utility.Extentions.DateTime;

namespace Limak.Academy.Application.Contract.Dto
{
    public class BaseDto
    {
        public int offset { get; set; }
        public int limit { get; set; }
    }

    public class BaseListDto<T>
    {
        public T Id { get; set; }
        public DateTime CreatedOn { get; set; }
        public string CreatedOnFa => CreatedOn.ToFa();
    }
}
