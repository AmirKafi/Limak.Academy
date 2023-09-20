using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Dto.Users
{
    public class ChangePasswordDto
    {
        public string UserId { get; set; }

        [Display(Name = "پسورد قبلی")]
        public string OldPassword { get; set; }


        [Display(Name = "پسورد جدید")]
        public string NewPassword { get; set; }


        [Display(Name = "تکرار پسورد جدید")]
        public string ConfirmNewPassword { get; set; }
    }
}
