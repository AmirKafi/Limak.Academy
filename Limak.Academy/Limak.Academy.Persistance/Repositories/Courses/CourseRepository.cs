using Limak.Academy.Domain.Domain.Courses;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Persistance.Repositories.Course
{
    public class CourseRepository : CrudRepository<Limak.Academy.Domain.Domain.Courses.Course, int>, ICourseRepository
    {
        public async Task<IEnumerable<Limak.Academy.Domain.Domain.Courses.Course>> GetList(int skip = 0, int take = 10)
        {
            return await _dbContext.Courses
                                   .Include(x=> x.Teacher)
                                   .Include(x=> x.EventDays)
                                   .Include(x=> x.Category)
                                   .Include(x=> x.Tags)
                                   .Include(x=> x.Discount)
                                   .Skip(take * skip)
                                   .Take(take)
                                   .AsNoTracking()
                                   .OrderByDescending(t => t.Id)
                                   .ToListAsync();
        }
        public Task<Limak.Academy.Domain.Domain.Courses.Course> Get(int id)
        {
            var result = _dbContext.Courses
                                   .Include(x => x.Teacher)
                                   .Include(x => x.EventDays)
                                   .Include(x => x.Category)
                                   .Include(x => x.Tags)
                                   .Include(x => x.Discount)
                                   .FirstOrDefaultAsync(x=> x.Id == id);
            return result;
        }
    }
}
