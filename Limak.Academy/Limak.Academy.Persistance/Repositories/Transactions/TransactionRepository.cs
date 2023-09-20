using Limak.Academy.Domain.Domain.Transactions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Persistance.Repositories.Transactions
{
    public class TransactionRepository:CrudRepository<Transaction,int>,ITransactionRepository
    {
    }
}
