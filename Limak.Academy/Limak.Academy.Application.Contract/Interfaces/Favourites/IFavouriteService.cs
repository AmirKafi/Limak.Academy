using Limak.Academy.Application.Contract.Dto.Favourites;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Utility.ServiceResponse;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Interfaces.Favourites
{
    public interface IFavouriteService
    {
        Task<ServiceResponse<bool>> AddToFavourites(FavouriteDto dto);
        Task<ServiceResponse<bool>> IsFavourite(string userId, FormEnum disclaimer, int disclaimerId);
    }
}
