using Limak.Academy.Application.Contract.Dto.Favourites;
using Limak.Academy.Domain.Domain.Favourites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Mappers.Favourites
{
    public static class FavouriteMapper
    {
        public static Favourite ToModel(this FavouriteDto dto)
        {
            return new Favourite(dto.UserId,
                                 dto.Disclaimer,
                                 dto.CourseId,
                                 dto.TeacherId,
                                 dto.BlogId);
        }

        public static List<FavouriteDto> ToDto(this List<Favourite> model)
        {
            return model.Select(x => new FavouriteDto()
            {
                Id = x.Id,
                UserId = x.UserId,
                BlogId = x.BlogId,
                CourseId = x.CourseId,
                Disclaimer = x.Disclaimer,
                TeacherId = x.TeacherId
            }).ToList();
        }
    }
}
