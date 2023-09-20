using Limak.Academy.Domain.Domain.Courses;
using Limak.Academy.Framework.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Domain.Domain.Teachers
{
    public class Teacher : EntityId<int>
    {
        private Teacher()
        {

        }
        public Teacher(string fullName, string fileName)
        {

            FullName = fullName;
            FileName = fileName;
        }

        public string FullName { get; set; }
        public string FileName { get; set; }

        public ICollection<Course> Courses { get; set; }

        public Teacher Update(string fullName, string fileName)
        {
            FullName = fullName;
            FileName = fileName;

            return this;
        }
    }
}
