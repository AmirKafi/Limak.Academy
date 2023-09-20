using Limak.Academy.Framework.Core.Enum;
using System.ComponentModel.DataAnnotations;

namespace Limak.Academy.Application.Contract.Dto.Users
{
    public class UserCreateDto
    {
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

        [Display(Name = "کلمه عبور")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public string Password { get; set; }

        [Display(Name = "تایید کلمه عبور")]
        [Required(ErrorMessage = "این فیلد اجباری می باشد")]
        public string ConfirmPassword { get; set; }

        public DateTime PasswordExiresOn { get; set; }

        [Display(Name = "فعال")]
        public bool IsActive { get; set; }
    }
}
