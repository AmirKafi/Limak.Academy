using Limak.Academy.Framework.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Domain.Domain.Categories
{
    public interface ICategoryRepository : IReadRepository<Category, int>, IWriteRepository<Category, int>, IQueryRepository<Category, int>, IDeleteRepository<Category, int>
    {
    }
}
