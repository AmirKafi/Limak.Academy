using Limak.Academy.Framework.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Domain.Domain.Configs
{
    public interface IConfigRepository : IReadRepository<Config, int>, IWriteRepository<Config, int>, IQueryRepository<Config, int>
    {
    }
}
