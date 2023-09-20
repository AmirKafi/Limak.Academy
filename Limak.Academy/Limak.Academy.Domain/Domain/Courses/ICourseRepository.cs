using Limak.Academy.Framework.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Domain.Domain.Courses
{
    public interface ICourseRepository : IReadRepository<Course, int>, IWriteRepository<Course, int>, IQueryRepository<Course, int>, IDeleteRepository<Course, int>
    {
    }
}
