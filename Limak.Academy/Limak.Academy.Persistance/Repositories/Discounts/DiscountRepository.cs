using Limak.Academy.Domain.Domain.Discounts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Persistance.Repositories.Discounts
{
    public class DiscountRepository: CrudRepository<Discount,int>,IDiscountRepository
    {
    }
}
