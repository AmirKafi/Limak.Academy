using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Dto.Blogs
{
    public class BlogDetailDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string AuthorName { get; set; }
        public string TextBody { get; set; }

        public string Picture { get; set; }
        public string PicturePath { get; set; }
        public bool IsCurrentUserFavourite { get; set; }
    }
}
