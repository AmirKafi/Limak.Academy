using Limak.Academy.Framework.Core;
using Limak.Academy.Framework.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Persistance.Repositories
{
    /// <summary>
    /// read /write repository
    /// </summary>
    /// <typeparam name="TEntity"></typeparam>
    /// <typeparam name="TKey"></typeparam>
    public abstract class CrudRepository<TEntity, TKey> :
          IWriteRepository<TEntity, TKey>
        , IReadRepository<TEntity, TKey>
        , IDeleteRepository<TEntity, TKey>
        where TEntity : EntityId<TKey>
        where TKey : struct
    {
        public required LimakAcademyDbContext _dbContext { protected get; init; }

        public async Task Add(TEntity entity)
        {
            await this._dbContext.AddAsync(entity);
            await _dbContext.SaveChangesAsync();
        }



        public async Task Update(TKey key, TEntity entity)
        {
            var find = await _dbContext.Set<TEntity>().FirstOrDefaultAsync(t => t.Id.Equals(key));
            if (find != null)
            {
                _dbContext.Update(entity);
                await _dbContext.SaveChangesAsync();
            }
        }

        public virtual async Task<TEntity?> Load(TKey id)
        {
            var result = await _dbContext.Set<TEntity>().AsTracking().FirstOrDefaultAsync(t => t.Id.Equals(id));
            return result;
        }

        public async Task Update(TEntity entity)
        {
            _dbContext.Update(entity);
            await _dbContext.SaveChangesAsync();
        }


        public async Task<TEntity?> GetById(TKey id)
        {
            return await _dbContext.Set<TEntity>().AsTracking().FirstOrDefaultAsync(t => t.Id.Equals(id));
        }

        public virtual async Task<TEntity?> Get(TKey id)
        {
            return await _dbContext.Set<TEntity>().AsNoTracking().FirstOrDefaultAsync(t => t.Id.Equals(id));
        }

        public async Task<IEnumerable<TEntity>> GetList(int skip = 0, int take = 10)
        {
            return await _dbContext.Set<TEntity>().AsNoTracking().OrderByDescending(t => t.Id).Skip(skip * take).Take(take).ToListAsync();

        }

        public IQueryable<TEntity?> GetQuerable()
        {
            var result = _dbContext.Set<TEntity>().AsNoTracking().OrderByDescending(x => x.Id).AsQueryable();
            return result;
        }

        public async Task Delete(TEntity entity)
        {
            _dbContext.Remove(entity);
            await _dbContext.SaveChangesAsync();
        }

        public Task Delete(TKey key)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            _dbContext.Dispose();
        }

        public async ValueTask DisposeAsync()
        {
            await _dbContext.DisposeAsync();
        }

    }
}
