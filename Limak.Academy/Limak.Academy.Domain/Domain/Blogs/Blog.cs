using Limak.Academy.Domain.Domain.Users;
using Limak.Academy.Framework.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Domain.Domain.Blogs
{
    public class Blog : EntityId<int>
    {
        private Blog()
        {

        }

        public Blog(string title,
                    string textBody,
                    string picture,
                    string authorId)
        {
            this.Title = title;
            this.TextBody = textBody;
            this.Picture = picture;
            this.AuthorId = authorId;
        }

        public string Title { get; set; }
        public string TextBody { get; set; }
        public string Picture { get; set; }
        public string AuthorId { get; set; }
        public User Author { get; set; }


        public Blog Update(string title,
                           string textBody,
                           string picture)
        {
            this.Title = title;
            this.TextBody = textBody;
            this.Picture = picture;

            return this;
        }
    }
}
