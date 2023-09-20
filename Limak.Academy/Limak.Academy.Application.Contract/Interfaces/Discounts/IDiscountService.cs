using Limak.Academy.Application.Contract.Dto.Discounts;
using Limak.Academy.Application.Contract.Dto.Favourites;
using Limak.Academy.Framework.Core;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Utility.ServiceResponse;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Interfaces.Discounts
{
    public interface IDiscountService
    {
        Task<ServiceResponse<List<DiscountListDto>>> LoadDiscounts(DiscountDto dto);
        Task<ServiceResponse<List<DiscountListDto>>> LoadDiscounts();
        Task<ServiceResponse<List<ComboModel>>> LoadDiscountsAsCombo();
        Task<ServiceResponse<bool>> AddDiscount(DiscountCreateDto dto);
        Task<ServiceResponse<bool>> UpdateExpiration(int discountId,bool expire);
        Task<ServiceResponse<DiscountDetailDto>> GetValidDiscount(string code, string? userId);
    }
}
