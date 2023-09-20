using Limak.Academy.Domain.Domain.Teachers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Persistance.Repositories.Teachers
{
    public class TeacherRepository:CrudRepository<Teacher,int>,ITeacherRepository
    {
    }
}
