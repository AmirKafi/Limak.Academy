using Autofac;
using Limak.Academy.Config;
using Limak.Academy.Utility.Extentions;
using Limak.Academy.Persistance;
using System.ComponentModel;

namespace Limak.Academy
{
    public class AutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            Bootstrapper.WireUp(builder);
        }
    }
}
