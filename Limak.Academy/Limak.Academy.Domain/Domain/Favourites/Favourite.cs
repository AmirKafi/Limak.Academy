using Limak.Academy.Domain.Domain.Blogs;
using Limak.Academy.Domain.Domain.Courses;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Framework.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Limak.Academy.Domain.Domain.Teachers;
using Limak.Academy.Domain.Domain.Users;

namespace Limak.Academy.Domain.Domain.Favourites
{
    public class Favourite : EntityId<int>
    {

        #region Constructor

        public Favourite(string userId, FormEnum disclaimer, int? courseId, int? teacherId, int? blogId)
        {
            this.UserId = userId;
            this.Disclaimer = disclaimer;
            this.CourseId = courseId;
            this.TeacherId = teacherId;
            this.BlogId = blogId;
        }

        #endregion

        public string UserId { get; private set; }
        public User User { get; private set; }

        public FormEnum Disclaimer { get; private set; }

        public int? CourseId { get; private set; }
        public Course? Course { get; private set; }

        public int? TeacherId { get; private set; }
        public Teacher? Teacher { get; private set; }

        public int? BlogId { get; private set; }
        public Blog? Blog { get; private set; }
    }
}
