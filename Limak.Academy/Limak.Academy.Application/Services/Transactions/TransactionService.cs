using Limak.Academy.Application.Contract.Dto.Transactions;
using Limak.Academy.Application.Contract.Interfaces.Transactions;
using Limak.Academy.Application.Contract.Mappers.Transactions;
using Limak.Academy.Domain.Domain.Orders;
using Limak.Academy.Domain.Domain.Transactions;
using Limak.Academy.Utility.ServiceResponse;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Services.Transactions
{
    public class TransactionService : ITransactionService
    {
        private readonly ITransactionRepository _repository;
        private readonly IOrderRepository _orderRepository;

        public TransactionService(ITransactionRepository repository, IOrderRepository orderRepository)
        {
            _repository = repository;
            _orderRepository = orderRepository;
        }

        public async Task<ServiceResponse<int>> Pay(TransactionCreateDto dto)
        {
            var result = new ServiceResponse<int>();

            try
            {
                var orders = _orderRepository.GetQuerable().AsNoTracking().Where(x => dto.OrdersId.Contains(x.Id)).ToList();

                var model = dto.ToModel();

                await _repository.Add(model);

                result.SetData(model.Id);
            }
            catch (Exception ex)
            {
                result.SetException(ex);
            }

            return result;
        }
    }
}
