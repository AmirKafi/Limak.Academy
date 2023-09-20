using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Framework.Core.Interfaces
{
    public interface ISegregationRepository<TEntity, TKey> : IDisposable, IAsyncDisposable
    {
    }


    public interface IReadRepository<TEntity, TKey> : ISegregationRepository<TEntity, TKey>
    {
        Task<IEnumerable<TEntity>> GetList(int page = 0, int pageSize = 10);
        Task<TEntity?> GetById(TKey id);
        Task<TEntity?> Get(TKey id);
    }

    public interface IQueryRepository<TEntity, TKey> : ISegregationRepository<TEntity, TKey>
    {
        IQueryable<TEntity> GetQuerable();
    }

    public interface IWriteRepository<TEntity, TKey> : ISegregationRepository<TEntity, TKey>
    {
        Task<TEntity?> Load(TKey id);
        Task Add(TEntity entity);
        Task Update(TEntity entity);
    }


    public interface IDeleteRepository<TEntity, TKey> : ISegregationRepository<TEntity, TKey>
    {
        Task Delete(TKey key);
        Task Delete(TEntity entity);
    }

    public interface IUsageRepository<TEntity, TKey> : ISegregationRepository<TEntity, TKey>
    {
        Task<bool> IsUsage(TKey key);
    }
}
