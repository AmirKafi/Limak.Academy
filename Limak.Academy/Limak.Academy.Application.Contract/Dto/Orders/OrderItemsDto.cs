using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Dto.Orders
{
    public class OrderItemsDto
    {
        public int OrderId { get; set; }
        public string Title { get; set; }
        public int Qty { get; set; }
        public Int64 Price { get; set; }
        public Int64 TotalPrice { get; set; }
        public Int64? DiscountPrice { get; set; }
        public string PicturePath { get; set; }
    }
}
