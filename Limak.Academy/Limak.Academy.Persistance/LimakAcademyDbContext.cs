using Azure;
using Limak.Academy.Domain.Domain.Blogs;
using Limak.Academy.Domain.Domain.Categories;
using Limak.Academy.Domain.Domain.Configs;
using Limak.Academy.Domain.Domain.Courses;
using Limak.Academy.Domain.Domain.Discounts;
using Limak.Academy.Domain.Domain.Favourites;
using Limak.Academy.Domain.Domain.Tags;
using Limak.Academy.Domain.Domain.Teachers;
using Limak.Academy.Domain.Domain.Transactions;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Persistance
{
    public class LimakAcademyDbContext : DbContext
    {

        protected LimakAcademyDbContext()
        {

        }

        public LimakAcademyDbContext(DbContextOptions<LimakAcademyDbContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=45.138.135.5;Initial Catalog=limakaca_DB;Persist Security Info=True;MultipleActiveResultSets=true;User ID=limakaca_DB;Password=AmirKafi8306!;TrustServerCertificate=true");
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(this.GetType().Assembly);
        }

        public DbSet<Course> Courses { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Config> Configs { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Favourite> Favourites { get; set; }
        public DbSet<Discount> Discounts { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
    }
}
