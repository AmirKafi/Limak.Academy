using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Dto.Configs
{
    public class ConfigSaveDto
    {
        public int Id { get; set; }

        [Display(Name = "آدرس")]
        public string? Address { get; set; }

        [Display(Name = "ایمیل")]
        public string? Email { get; set; }

        [Display(Name = "شماره تماس")]
        public string? ContactNumber { get; set; }

        [Display(Name = "لینک اینستاگرام")]
        public string? InstagramLink { get; set; }

        [Display(Name = "لینک تلگرام")]
        public string? TelegramLink { get; set; }
    }
}
