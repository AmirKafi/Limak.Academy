using Limak.Academy.Domain.Domain.Categories;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Limak.Academy.Domain.Domain.Blogs;

namespace Limak.Academy.Persistance.Configurations
{
    public class BlogEFConfig : IEntityTypeConfiguration<Blog>
    {
        public void Configure(EntityTypeBuilder<Blog> builder)
        {
            builder.HasOne(x => x.Author)
                   .WithMany(x => x.Blogs)
                   .HasForeignKey(x => x.AuthorId);
        }
    }
}
