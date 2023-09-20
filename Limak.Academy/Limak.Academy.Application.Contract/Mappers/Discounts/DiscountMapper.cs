using Limak.Academy.Application.Contract.Dto.Discounts;
using Limak.Academy.Domain.Domain.Discounts;
using Limak.Academy.Framework.Core;
using Limak.Academy.Utility.Extentions.DateTime;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Mappers.Discounts
{
    public static class DiscountMapper
    {
        public static Discount ToModel(this DiscountCreateDto dto)
        {
            return new Discount(dto.Code,
                                dto.Precentage,
                                dto.Description,
                                dto.SpecifiedUserId,
                                dto.ExpireDate);
        }

        public static List<DiscountListDto> ToDto(this IEnumerable<Discount>? model)
        {

            return model.Select(x => new DiscountListDto()
            {
                Id = x.Id,
                Precentage = x.Precentage,
                Code = x.Code,
                CreatedOn = x.CreatedOn,
                Description = x.Description,
                ExpireDate = x.ExpireDate.AsDateOnly(),
                Expired = x.Expired,
                SpecifiedUserId = x.SpecifiedUserId,
                SpecifiedUserFullName = x.SpecifiedUser is null ? null : x.SpecifiedUser.FirstName + " " + x.SpecifiedUser.LastName
            }).ToList();
        }
        public static DiscountDetailDto ToDto(this Discount? model)
        {

            return new DiscountDetailDto()
            {
                Id = model.Id,
                Precentage = model.Precentage,
                Code = model.Code,
                Description = model.Description,
                ExpireDate = model.ExpireDate.AsDateOnly(),
                Expired = model.Expired,
                SpecifiedUserFullName = model.SpecifiedUser is null ? null : model.SpecifiedUser.FirstName + " " + model.SpecifiedUser.LastName,
            };
        }

        public static List<ComboModel> ToCombo(this IEnumerable<Discount>? model)
        {
            if (model is null)
                return new List<ComboModel>();

            return model.Select(x=> new ComboModel()
            {
                Title = x.Code,
                Value = x.Id
            }).ToList();
        }
    }
}
