using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Limak.Academy.Domain.Domain.Configs;

namespace Limak.Academy.Persistance.Configurations
{
    public class ConfigEFConfig : IEntityTypeConfiguration<Config>
    {
        public void Configure(EntityTypeBuilder<Config> builder)
        {

        }
    }
}
