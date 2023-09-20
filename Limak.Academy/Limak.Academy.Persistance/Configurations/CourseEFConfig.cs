using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;
using Limak.Academy.Domain.Domain.Courses;

namespace Limak.Academy.Persistance.Configurations
{
    public class CourseEFConfig : IEntityTypeConfiguration<Course>
    {
        public void Configure(EntityTypeBuilder<Course> builder)
        {
            builder.HasMany(s => s.EventDays)
                .WithOne(d => d.Course)
                .HasForeignKey(d => d.CourseId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(x=> x.Tags)
                   .WithOne(x=> x.Course)
                   .HasForeignKey(x=> x.CourseId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
