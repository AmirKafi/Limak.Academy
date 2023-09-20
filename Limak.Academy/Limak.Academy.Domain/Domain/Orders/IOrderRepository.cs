using Limak.Academy.Framework.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Domain.Domain.Orders
{
    public interface IOrderRepository : IReadRepository<Order, int>, IWriteRepository<Order, int>, IQueryRepository<Order, int>, IDeleteRepository<Order, int>
    {
    }
}
