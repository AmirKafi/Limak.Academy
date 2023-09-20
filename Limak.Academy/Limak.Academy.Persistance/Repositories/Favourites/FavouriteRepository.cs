using Limak.Academy.Domain.Domain.Favourites;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Persistance.Repositories.Favourites
{
    public class FavouriteRepository : IFavouriteRepository
    {
        private readonly LimakAcademyDbContext _db;
        public FavouriteRepository(LimakAcademyDbContext db)
        {
            _db = db;
        }

        public async Task AddToFavourite(Favourite favourite)
        {
            await _db.AddAsync(favourite);
            await _db.SaveChangesAsync();
        }

        public async Task<Favourite> GetFavourite(int id)
        {
            return await _db.Favourites.FirstOrDefaultAsync(x=> x.Id == id);
        }

        public async Task Remove(Favourite favourite)
        {
            _db.Remove(favourite);
            await _db.SaveChangesAsync();
        }

        public async Task<List<Favourite>> GetFavourites(string userId)
        {
            return await _db.Favourites.Where(x => x.UserId == userId).ToListAsync();
        }

    }
}
