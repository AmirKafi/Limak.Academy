using Limak.Academy.Application.Contract.Dto.Course;
using Limak.Academy.Framework.Core;
using Limak.Academy.Utility.ServiceResponse;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Interfaces.Course
{
    public interface ICourseService
    {
        Task<ServiceResponse<List<CourseListDto>>> LoadCourses(CourseDto dto);
        Task<ServiceResponse<List<CourseListDto>>> LoadCourses(string? title = null);
        Task<ServiceResponse<List<ComboModel>>> LoadCoursesAsCombo();
        Task<ServiceResponse<bool>> AddCourse(CourseCreateDto dto);
        Task<ServiceResponse<CourseUpdateDto>> GetCourse(int courseId);
        Task<ServiceResponse<CourseDetailsDto>> GetCourseDetails(int courseId);
        Task<ServiceResponse<bool>> UpdateCourse(CourseUpdateDto dto);
        Task<ServiceResponse<bool>> Delete(int courseId);
        Task<ServiceResponse<bool>> SetDiscount(int courseId,int discountId);
        Task<ServiceResponse<bool>> RemoveDiscount(int courseId);
    }
}
