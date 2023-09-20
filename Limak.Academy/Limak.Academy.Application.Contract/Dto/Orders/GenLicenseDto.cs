using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Dto.Orders
{
    public partial class GenLicenseDto
    {
        [JsonProperty("test")]
        public bool Test { get; set; } = false;

        [JsonProperty("course")]
        public string[] Course { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("watermark")]
        public Watermark Watermark { get; set; }
    }

    public partial class Watermark
    {
        [JsonProperty("texts")]
        public Text[] Texts { get; set; }
    }

    public partial class Text
    {
        [JsonProperty("text")]
        public string TextText { get; set; }
    }

    public class LicenseKeyResult
    {
        public string _Id { get; set; }
        public string Key { get; set; }
        public string Url { get; set; }
    }
}
