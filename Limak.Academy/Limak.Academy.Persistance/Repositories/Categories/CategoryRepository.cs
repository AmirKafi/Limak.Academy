using Limak.Academy.Domain.Domain.Categories;
using Limak.Academy.Domain.Domain.Courses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Persistance.Repositories.Categories
{
    public class CategoryRepository : CrudRepository<Category, int>, ICategoryRepository
    {
    }
}
