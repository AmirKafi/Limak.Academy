using Limak.Academy.Application.Contract.Dto.Transactions;
using Limak.Academy.Utility.ServiceResponse;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Interfaces.Transactions
{
    public interface ITransactionService
    {
        public Task<ServiceResponse<int>> Pay(TransactionCreateDto dto);
    }
}
