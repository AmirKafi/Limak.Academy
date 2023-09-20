using Limak.Academy.Domain.Domain.Discounts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Dto.Transactions
{
    public class TransactionCreateDto
    {
        public Int64 TotalPrice { get; set; }
        public Int64 DiscountPrice { get; set; }
        public Int64 PayablePrice => this.TotalPrice - this.DiscountPrice;

        public string PaymentCode { get; set; }
        public string PaymentResult { get; set; }
        public string PaymentResultDescription { get; set; }

        public int? DiscountId { get; set; }
        public List<int> OrdersId { get; set; }
    }
}
