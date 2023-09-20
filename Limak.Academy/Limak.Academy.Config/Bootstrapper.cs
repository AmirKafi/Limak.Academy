using Autofac;
using Limak.Academy.Persistance;
using Limak.Academy.Utility.Extentions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Config
{
    public static class Bootstrapper
    {
        public static void WireUp(ContainerBuilder builder)
        {

            var loadedAssemblies = AppDomain.CurrentDomain.GetAssemblies().ToList();
            loadedAssemblies
                .SelectMany(x => x.GetReferencedAssemblies())
                .Distinct()
                .Where(y => loadedAssemblies.Any((a) => a.FullName == y.FullName) == false)
                .ToList()
                .ForEach(x => loadedAssemblies.Add(AppDomain.CurrentDomain.Load(x)));

            var assemblies = loadedAssemblies
                .Where(x => x.FullName.StartsWith(typeof(Bootstrapper).FullName.Split('.')[0]));

            builder.RegisterAssemblyTypes(assemblies.ToArray())
                .Where(t => t.IsClass == true && t.FullName.EndsWith("Repository"))
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();

            builder.RegisterAssemblyTypes(assemblies.ToArray())
                .Where(t => t.IsClass == true && t.FullName.EndsWith("Service"))
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();

            builder.RegisterAssemblyTypes(assemblies.ToArray())
                .Where(t => t.IsClass == true && t.FullName.EndsWith("Controller"))
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();

            builder.RegisterContext<LimakAcademyDbContext>(ConnectionStringNames.Core);
        }
    }
}
