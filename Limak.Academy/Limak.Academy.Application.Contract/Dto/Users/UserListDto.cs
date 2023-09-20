using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Utility.Extentions;

namespace Limak.Academy.Application.Contract.Dto.Users
{
    public class UserListDto:BaseListDto<string>
    {
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public RoleEnum Role { get; set; }
        public string RoleTitle => Role.GetDisplayName();
        public bool IsActive { get; set; }
        public string IsActiveTitle => IsActive ? "فعال" : "غیر فعال";
    }
}
