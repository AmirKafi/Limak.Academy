using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Dto.Blogs
{
    public class BlogDto : BaseDto
    {
        public string Title { get; set; }
        public string TextBody { get; set; }

    }
}
