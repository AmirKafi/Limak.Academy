using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Framework.Core
{
    public class ApplicationSettingsModel
    {
        public bool DeveloperMode { get; set; }
        public string SpotPlayerApiKey { get; set; }
        public string ConnectionString { get; set; }
    }
}
