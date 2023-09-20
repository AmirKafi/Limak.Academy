using Limak.Academy.Application.Contract.Dto.Category;
using Limak.Academy.Framework.Core;
using Limak.Academy.Utility.ServiceResponse;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Interfaces.Categories
{
    public interface ICategoryService
    {
        Task<ServiceResponse<List<CategoryListDto>>> LoadCategories(CategoryDto dto);
        Task<ServiceResponse<List<CategoryListDto>>> LoadCategories();
        Task<ServiceResponse<bool>> AddCategory(CategoryCreateDto dto);
        Task<ServiceResponse<CategoryUpdateDto>> GetCategory(int categoryId);
        Task<ServiceResponse<bool>> UpdateCategory(CategoryUpdateDto dto);
        Task<ServiceResponse<bool>> Delete(int categoryId);
        Task<ServiceResponse<List<ComboModel>>> GetAsCombo();
    }
}
