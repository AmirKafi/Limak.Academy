using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Framework.Core.Enum
{
    public enum WeekDaysEnum : int
    {
        [Display(Name = "شنبه")]
        SaturDay = 1,

        [Display(Name = "یکشنبه")]
        SunDay,

        [Display(Name = "دوشنبه")]
        MonDay,

        [Display(Name = "سه شنبه")]
        TeusDay,

        [Display(Name = "چهارشنبه")]
        WednesDay,

        [Display(Name = "پنج شنبه")]
        ThursDay,

        [Display(Name = "جمعه")]
        FriDay
    }
}
