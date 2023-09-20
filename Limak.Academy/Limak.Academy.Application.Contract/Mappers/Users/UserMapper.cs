using Limak.Academy.Application.Contract.Dto.Users;
using Limak.Academy.Domain.Domain.Users;
using Limak.Academy.Framework.Core;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Utility.Extentions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Mappers.Users
{
    public static class UserMapper
    {
        public static User ToModel(this UserCreateDto dto)
        {
            return new User(dto.UserName,
                            dto.FirstName,
                            dto.LastName,
                            dto.PhoneNumber,
                            dto.Role,
                            dto.Email,
                            dto.Password.ToMd5(),
                            dto.IsActive);
        }

        public static List<UserListDto> ToDto(this IEnumerable<User>? model)
        {
            if (model is null)
                return new List<UserListDto>();

            return model.Select(x => new UserListDto()
            {
                Id = x.Id,
                Email = x.Email,
                PhoneNumber = x.PhoneNumber,
                LastName = x.LastName,
                FirstName = x.FirstName,
                UserName = x.UserName,
                Role = x.Role,
                IsActive = x.IsActive,
                CreatedOn = x.CreatedOn
            }).ToList();
        }

        public static UserUpdateDto ToDto(this User model)
        {
            return new UserUpdateDto()
            {
                Id = model.Id,
                UserName = model.UserName,
                FirstName = model.FirstName,
                LastName = model.LastName,
                PhoneNumber = model.PhoneNumber,
                Email = model.Email,
                Role = model.Role,
                IsActive = model.IsActive
            };
        }

        public static List<ComboModel> ToCombo(this List<User>? model)
        {
            if (model is null)
                return new List<ComboModel>();
            else
                return model.Select(x => new ComboModel()
                {
                    Value = x.Id,
                    Title = x.FirstName + " " + x.LastName
                }).ToList();
        }
    }
}
