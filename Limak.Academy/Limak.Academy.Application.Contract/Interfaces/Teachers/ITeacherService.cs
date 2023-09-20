using Limak.Academy.Application.Contract.Dto.Teacher;
using Limak.Academy.Framework.Core;
using Limak.Academy.Utility.ServiceResponse;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Interfaces.Teachers
{
    public interface ITeacherService
    {
        Task<ServiceResponse<List<TeacherListDto>>> LoadTeachers(TeacherDto dto);
        Task<ServiceResponse<List<TeacherListDto>>> LoadTeachers(string? fullName = null);
        Task<ServiceResponse<bool>> AddTeacher(TeacherCreateDto dto);
        Task<ServiceResponse<TeacherUpdateDto>> GetTeacher(int teacherId);
        Task<ServiceResponse<bool>> UpdateTeacher(TeacherUpdateDto dto);
        Task<ServiceResponse<bool>> Delete(int teacherId);
        Task<ServiceResponse<List<ComboModel>>> GetAsCombo();
    }
}
