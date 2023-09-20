using Limak.Academy.Application.Contract.Dto.Favourites;
using Limak.Academy.Application.Contract.Interfaces.Favourites;
using Limak.Academy.Application.Contract.Mappers.Favourites;
using Limak.Academy.Domain.Domain.Favourites;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Utility.ServiceResponse;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Services.Favourites
{
    public class FavouriteService : IFavouriteService
    {
        private readonly IFavouriteRepository _repository;
        private readonly IMemoryCache _cache;

        public FavouriteService(IFavouriteRepository repository, IMemoryCache cache)
        {
            _repository = repository;
            _cache = cache;
        }


        public async Task<ServiceResponse<bool>> AddToFavourites(FavouriteDto dto)
        {
            var result = new ServiceResponse<bool>();

            try
            {
                await _repository.AddToFavourite(dto.ToModel());

                var favs = await _repository.GetFavourites(dto.UserId);

                _cache.Remove("UserFavourites");
                _cache.Set("UserFavourites",favs);

                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex);
            }
            return result;
        }

        public async Task<ServiceResponse<bool>> Remove(int id)
        {
            var result = new ServiceResponse<bool>();

            try
            {
                var fav = await _repository.GetFavourite(id);

                await _repository.Remove(fav);

                var favs = await _repository.GetFavourites(fav.UserId);

                _cache.Remove("UserFavourites");
                _cache.Set("UserFavourites", favs);

                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex);
            }
            return result;
        }

        public async Task<ServiceResponse<bool>> IsFavourite(string userId,FormEnum disclaimer,int disclaimerId)
        {
            var result = new ServiceResponse<bool>();

            try
            {
                var cachedFavs = _cache.Get<List<Favourite>>("UserFavourites");

                var isFave = cachedFavs.Any(x=> x.UserId == userId && x.Disclaimer == disclaimer &&
                                            (disclaimer == FormEnum.Course ? x.CourseId == disclaimerId :
                                            disclaimer == FormEnum.Teacher ? x.TeacherId == disclaimerId :
                                            x.BlogId == disclaimerId));

                result.SetData(isFave);
            }
            catch (Exception ex)
            {
                result.SetException(ex);
            }
            return result;
        }
    }
}
