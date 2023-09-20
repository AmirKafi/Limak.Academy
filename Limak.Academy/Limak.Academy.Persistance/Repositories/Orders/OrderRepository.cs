using Limak.Academy.Domain.Domain.Orders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Persistance.Repositories.Orders
{
    public class OrderRepository:CrudRepository<Order,int>,IOrderRepository
    {
    }
}
