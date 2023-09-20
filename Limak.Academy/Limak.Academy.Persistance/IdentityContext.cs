using Limak.Academy.Domain.Domain.Users;
using Limak.Academy.Persistance.Configurations;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Persistance
{
    public class IdentityContext : IdentityDbContext<User>
    {
        public IdentityContext(DbContextOptions<IdentityContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {

            builder.Entity<IdentityUser<string>>().ToTable("Users", "identity");
            builder.Entity<IdentityRole<string>>().ToTable("Roles", "identity");
            builder.Entity<IdentityRoleClaim<string>>().ToTable("RoleClaims", "identity");
            builder.Entity<IdentityUserClaim<string>>().ToTable("UserClaims", "identity");
            builder.Entity<IdentityUserLogin<string>>().ToTable("UserLogins", "identity");
            builder.Entity<IdentityUserRole<string>>().ToTable("UserRoles", "identity");
            builder.Entity<IdentityUserToken<string>>().ToTable("UserTokens", "identity");

            builder.Entity<IdentityUserLogin<string>>().HasKey(a => new { a.LoginProvider, a.ProviderKey });
            builder.Entity<IdentityUserRole<string>>().HasKey(a => new { a.UserId, a.RoleId });
            builder.Entity<IdentityUserToken<string>>().HasKey(a => new { a.UserId, a.LoginProvider, a.Name });

            builder.Entity<IdentityRole>().HasData(new IdentityRole
            {
                Name = "Admin",
                NormalizedName = "ADMIN",
                Id = "341743f0-asd2–42de-afbf-59kmkkmk72cf6",
                ConcurrencyStamp = "341743f0-asd2–42de-afbf-59kmkkmk72cf6"
            });

            builder.Entity<IdentityRole>().HasData(new IdentityRole
            {
                Name = "User",
                NormalizedName = "USER",
                Id = "341743f0-asd2–42de-afkt-59kmkkmk72cf6",
                ConcurrencyStamp = "341743f0-asd2–42de-afkt-59kmkkmk72cf6"
            });

            builder.ApplyConfiguration(new UserEFConfig());
        }
    }
}
