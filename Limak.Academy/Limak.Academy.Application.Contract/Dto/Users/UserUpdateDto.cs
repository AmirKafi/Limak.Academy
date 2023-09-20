using Limak.Academy.Framework.Core.Enum;
using System.ComponentModel.DataAnnotations;

namespace Limak.Academy.Application.Contract.Dto.Users
{
    public class UserUpdateDto
    {
        public string Id { get; set; }

        [Display(Name = "نام کاربری")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public string UserName { get; set; }

        [Display(Name = "نام")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public string FirstName { get; set; }

        [Display(Name = "نام نام خانوادگی")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public string LastName { get; set; }

        [Display(Name = "شماره موبایل")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public string PhoneNumber { get; set; }

        [Display(Name = "ایمیل")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public string Email { get; set; }

        [Display(Name = "نوع کاربری")]
        public RoleEnum Role { get; set; }

        [Display(Name = "فعال")]
        public bool IsActive { get; set; }
    }
}
