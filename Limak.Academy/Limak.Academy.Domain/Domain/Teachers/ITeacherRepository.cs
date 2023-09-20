using Limak.Academy.Framework.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Domain.Domain.Teachers
{
    public interface ITeacherRepository : IReadRepository<Teacher, int>, IWriteRepository<Teacher, int>, IQueryRepository<Teacher, int>, IDeleteRepository<Teacher, int>
    {
    }
}
