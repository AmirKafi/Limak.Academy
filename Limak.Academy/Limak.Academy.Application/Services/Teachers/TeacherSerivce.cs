using Limak.Academy.Application.Contract.Dto.Teacher;
using Limak.Academy.Application.Contract.Interfaces.Teachers;
using Limak.Academy.Application.Contract.Mappers.Teachers;
using Limak.Academy.Domain.Domain.Courses;
using Limak.Academy.Domain.Domain.Teachers;
using Limak.Academy.Framework.Core;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Utility.ServiceResponse;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Services.Teacher
{
    public class TeacherSerivce : ITeacherService
    {
        #region Constructor
        private readonly ITeacherRepository _repository;
        private readonly ICourseRepository _courseRepository;
        public TeacherSerivce(ITeacherRepository repository, ICourseRepository courseRepository)
        {
            _repository = repository;
            _courseRepository = courseRepository;
        }

        #endregion

        public async Task<ServiceResponse<List<TeacherListDto>>> LoadTeachers(TeacherDto dto)
        {
            var result = new ServiceResponse<List<TeacherListDto>>();
            try
            {
                var data = await _repository.GetList(dto.offset, dto.limit);
                result.SetData(data.ToDto());
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<List<TeacherListDto>>> LoadTeachers(string? fullName)
        {
            var result = new ServiceResponse<List<TeacherListDto>>();
            try
            {
                var courses = _courseRepository.GetQuerable().AsNoTracking();
                var data = _repository
                    .GetQuerable().AsNoTracking()
                    .Where(x => (fullName == null || x.FullName.Contains(fullName)))
                    .Select(x=> new TeacherListDto()
                    {
                        Id = x.Id,
                        FullName= x.FullName,
                        FileName= x.FileName
                    }).ToList();

                data.ForEach(x => x.Count = courses.Where(a => a.TeacherId == x.Id).Count());

                result.SetData(data);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<bool>> AddTeacher(TeacherCreateDto dto)
        {
            var result = new ServiceResponse<bool>();
            try
            {
                await _repository.Add(dto.ToModel());
                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<TeacherUpdateDto>> GetTeacher(int teacherId)
        {
            var result = new ServiceResponse<TeacherUpdateDto>();
            try
            {
                var data = await _repository.Get(teacherId);
                result.SetData(data.ToDto());
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<bool>> UpdateTeacher(TeacherUpdateDto dto)
        {
            var result = new ServiceResponse<bool>();
            try
            {
                var teacher = await _repository.Get(dto.Id);
                teacher.Update(dto.FullName,dto.FileName);

                await _repository.Update(teacher);

                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<bool>> Delete(int teacherId)
        {
            var result = new ServiceResponse<bool>();
            try
            {
                var teacher = await _repository.GetById(teacherId);
                await _repository.Delete(teacher);

                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<List<ComboModel>>> GetAsCombo()
        {
            var result = new ServiceResponse<List<ComboModel>>();
            try
            {
                var teacher = _repository.GetQuerable().AsNoTracking();
                var teachers = teacher.Select(x=> x.ToComboModel()).ToList();

                result.SetData(teachers);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }
    }
}
