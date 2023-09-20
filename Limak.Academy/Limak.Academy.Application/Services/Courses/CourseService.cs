using Limak.Academy.Application.Contract.Dto.Course;
using Limak.Academy.Application.Contract.Interfaces.Course;
using Limak.Academy.Application.Contract.Mappers.Courses;
using Limak.Academy.Domain.Domain.Courses;
using Limak.Academy.Domain.Domain.Discounts;
using Limak.Academy.Domain.Domain.Tags;
using Limak.Academy.Framework.Core;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Utility.ServiceResponse;
using Limak.Academy.Persistance.Repositories.Course;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Services.Courses
{
    public class CourseService:ICourseService
    {
        #region Constructor

        private readonly ICourseRepository _repository;

        public CourseService(ICourseRepository repository)
        {
            _repository = repository;
        }

        #endregion

        public async Task<ServiceResponse<List<CourseListDto>>> LoadCourses(CourseDto dto)
        {
            var result = new ServiceResponse<List<CourseListDto>>();
            try
            {
                var data = await _repository.GetList(dto.offset, dto.limit);
                if (dto.CourseType.HasValue)
                    result.SetData(data.ToDto().Where(x=> x.CourseType == dto.CourseType).ToList());
                else
                    result.SetData(data.ToDto());
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<List<CourseListDto>>> LoadCourses(string? title)
        {
            var result = new ServiceResponse<List<CourseListDto>>();
            try
            {
                var data =  _repository.GetQuerable().AsNoTracking()
                                   .Include(x => x.Teacher)
                                   .Include(x => x.EventDays)
                                   .Include(x => x.Category)
                                   .Include(x=> x.Discount)
                                   .AsNoTracking()
                                   .Where(x=> (title == null || x.Title.Contains(title)))
                                   .ToList();
                result.SetData(data.ToDto());
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<List<ComboModel>>> LoadCoursesAsCombo()
        {
            var result = new ServiceResponse<List<ComboModel>>();
            try
            {
                var data =await _repository.GetQuerable().AsNoTracking()
                                   .AsNoTracking()
                                   .ToListAsync();

                result.SetData(data.ToCombo());
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<bool>> AddCourse(CourseCreateDto dto)
        {
            var result = new ServiceResponse<bool>();
            try
            {
                if (dto.EventDays is null) dto.EventDays = new List<WeekDaysEnum>();
                await _repository.Add(dto.ToModel());
                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<CourseUpdateDto>> GetCourse(int courseId)
        {
            var result = new ServiceResponse<CourseUpdateDto>();
            try
            {
                var data =  await _repository.Get(courseId);
                result.SetData(data.ToDto());
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<CourseDetailsDto>> GetCourseDetails(int courseId)
        {
            var result = new ServiceResponse<CourseDetailsDto>();
            try
            {
                var data = await _repository.Get(courseId);
                result.SetData(data.ToDetailDto());
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<bool>> UpdateCourse(CourseUpdateDto dto)
        {
            var result = new ServiceResponse<bool>();
            try
            {
                var course = await _repository.Get(dto.Id);
                if (dto.EventDays is null) dto.EventDays = new List<WeekDaysEnum>();
                course.Update(dto.Title, 
                              dto.CourseType,
                              dto.Price,
                              dto.Description,
                              dto.LicenseKey,
                              dto.FileName,
                              dto.FromTime,
                              dto.ToTime,
                              dto.FromDate,
                              dto.ToDate,
                              dto.EventAddress,
                              dto.EventDays,
                              dto.TeacherId,
                              dto.CategoryId,
                              dto.Tags.Select(x=> new Tag(x,TagTypesEnum.Course)).ToList());

                await _repository.Update(course);

                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<bool>> Delete(int courseId)
        {
            var result = new ServiceResponse<bool>();
            try
            {
                var course = await _repository.GetById(courseId);
                await _repository.Delete(course);

                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<bool>> SetDiscount(int courseId, int discountId)
        {
            var result = new ServiceResponse<bool>();
            try
            {
                var course = await _repository.GetById(courseId);

                if (course is null)
                    result.SetException("دوره مورد نظر یافت نشد");

                course.SetDiscount(discountId);

                await _repository.Update(course);

                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<bool>> RemoveDiscount(int courseId)
        {
            var result = new ServiceResponse<bool>();
            try
            {
                var course = await _repository.GetById(courseId);

                if (course is null)
                    result.SetException("دوره مورد نظر یافت نشد");

                course.RemoveDiscount();

                await _repository.Update(course);

                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

    }
}
