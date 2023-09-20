using Limak.Academy.Domain.Domain.Users;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Persistance.Configurations
{
    public class UserEFConfig : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("Users", "identity");
            builder.HasMany(x => x.Blogs)
                   .WithOne(x => x.Author)
                   .HasForeignKey(x => x.AuthorId);
        }
    }
}
