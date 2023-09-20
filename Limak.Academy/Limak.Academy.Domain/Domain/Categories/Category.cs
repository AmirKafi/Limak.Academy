using Limak.Academy.Framework.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Domain.Domain.Categories
{
    public class Category : EntityId<int>
    {
        public Category(string title)
        {
            Title = title;
        }

        public string Title { get; set; }

        public Category Update(string title)
        {
            Title = title;
            return this;
        }
    }
}
