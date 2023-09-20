using Limak.Academy.Domain.Domain.Blogs;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Persistance.Repositories.Blogs
{
    public class BlogRepository:CrudRepository<Blog,int>,IBlogRepository
    {
        public Task<Blog> Get(int id)
        {
            var result = _dbContext.Blogs
                                   .Include(x => x.Author)
                                   .FirstOrDefaultAsync(x => x.Id == id);
            return result;
        }
    }
}
