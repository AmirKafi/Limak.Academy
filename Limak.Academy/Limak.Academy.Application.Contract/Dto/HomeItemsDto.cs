using Limak.Academy.Application.Contract.Dto.Blogs;
using Limak.Academy.Application.Contract.Dto.Category;
using Limak.Academy.Application.Contract.Dto.Course;
using Limak.Academy.Application.Contract.Dto.Teacher;
using Limak.Academy.Application.Contract.Dto.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Dto
{
    public class HomeItemsDto
    {
        public List<CategoryListDto> Categories { get; set; }
        public List<TeacherListDto> Teachers { get; set; }
        public List<CourseListDto> Courses { get; set; }
        public List<BlogListDto> Blogs { get; set; }
        public string SearchText { get; set; }
    }
}
