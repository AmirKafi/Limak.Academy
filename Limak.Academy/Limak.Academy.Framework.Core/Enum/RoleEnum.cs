using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Framework.Core.Enum
{
    public enum RoleEnum
    {
        [Display(Name = "مدیر سیستم")]
        Admin = 1,

        [Display(Name = "کاربر")]
        User
    }
}
