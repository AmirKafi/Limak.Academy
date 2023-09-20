using Limak.Academy.Application.Contract.Dto.Category;
using Limak.Academy.Application.Contract.Interfaces.Categories;
using Limak.Academy.Application.Contract.Mappers.Categories;
using Limak.Academy.Domain.Domain.Categories;
using Limak.Academy.Domain.Domain.Courses;
using Limak.Academy.Framework.Core;
using Limak.Academy.Utility.ServiceResponse;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Services.Categories
{
    public class CategoryService : ICategoryService
    {
        #region Constructor
        private readonly ICategoryRepository _repository;
        private readonly ICourseRepository _courseRepository;
        public CategoryService(ICategoryRepository repository, ICourseRepository courseRepository)
        {
            _repository = repository;
            _courseRepository = courseRepository;
        }

        #endregion

        public async Task<ServiceResponse<List<CategoryListDto>>> LoadCategories(CategoryDto dto)
        {
            var result = new ServiceResponse<List<CategoryListDto>>();
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

        public async Task<ServiceResponse<List<CategoryListDto>>> LoadCategories()
        {
            var result = new ServiceResponse<List<CategoryListDto>>();
            try
            {
                var courses = _courseRepository.GetQuerable().AsNoTracking().ToList();
                var data =_repository.GetQuerable().AsNoTracking().Select(x=> new CategoryListDto()
                {
                    Id = x.Id,
                    Title = x.Title
                }).ToList();

                data.ForEach(x => x.Count = courses.Where(a => a.CategoryId == x.Id).ToList().Count());

                result.SetData(data);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<bool>> AddCategory(CategoryCreateDto dto)
        {
            var result = new ServiceResponse<bool>();
            try
            {
                var model = dto.ToModel();
                await _repository.Add(model);
                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<CategoryUpdateDto>> GetCategory(int categoryId)
        {
            var result = new ServiceResponse<CategoryUpdateDto>();
            try
            {
                var data = await _repository.Get(categoryId);
                result.SetData(data.ToDto());
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<bool>> UpdateCategory(CategoryUpdateDto dto)
        {
            var result = new ServiceResponse<bool>();
            try
            {
                var category = await _repository.Get(dto.Id);
                category.Update(dto.Title);

                await _repository.Update(category);

                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<bool>> Delete(int categoryId)
        {
            var result = new ServiceResponse<bool>();
            try
            {
                var category = await _repository.GetById(categoryId);
                await _repository.Delete(category);

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
                var category = _repository.GetQuerable().AsNoTracking();
                var categories = category.Select(x => x.ToComboModel()).ToList();

                result.SetData(categories);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }
    }
}
