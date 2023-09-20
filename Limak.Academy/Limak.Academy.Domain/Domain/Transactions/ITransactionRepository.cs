using Limak.Academy.Framework.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Domain.Domain.Transactions
{
    public interface ITransactionRepository : IReadRepository<Transaction, int>, IWriteRepository<Transaction, int>, IQueryRepository<Transaction, int>, IDeleteRepository<Transaction, int>
    {
    }
}
