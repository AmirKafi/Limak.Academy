using Limak.Academy.Application.Contract.Dto.Users;
using Limak.Academy.Application.Contract.Interfaces.Users;
using Limak.Academy.Application.Contract.Mappers.Users;
using Limak.Academy.Domain.Domain.Users;
using Limak.Academy.Framework.Core;
using Limak.Academy.Utility.ServiceResponse;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Security.Claims;

namespace Limak.Academy.Application.Services.Users
{
    public class UserService : IUserService
    {
        #region Constructor
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly SignInManager<User> _signInManager;
        private readonly UserManager<User> _userManager;

        public UserService(SignInManager<User> signInManager,
                           UserManager<User> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        #endregion

        public async Task<ServiceResponse<SignInResult>> Login(string username, string password)
        {
            var result = new ServiceResponse<SignInResult>();
            try
            {
                var model = await _userManager.Users.FirstOrDefaultAsync(x => x.UserName == username);
                if (model is null)
                    result.SetException("نام کاربری یا کلمه عبور اشتباه است");
                await _userManager.AddClaimAsync(model, new Claim("UserRole", model.Role.ToString()));
                await _userManager.AddClaimAsync(model, new Claim("UserFullName", model.FirstName + " " + model.LastName));
                var user = await _signInManager.PasswordSignInAsync(username, password, true, true);
                if (!user.Succeeded)
                    result.SetException("نام کاربری یا کلمه عبور اشتباه است");

                result.SetData(user);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<List<UserListDto>>> LoadUsers(UserDto dto)
        {
            var result = new ServiceResponse<List<UserListDto>>();
            try
            {
                var data = await _userManager.Users.Skip(dto.offset * dto.limit).Take(dto.limit).ToListAsync();
                result.SetData(data.ToDto());
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<List<ComboModel>>> LoadUsers()
        {
            var result = new ServiceResponse<List<ComboModel>>();
            try
            {
                var data = await _userManager.Users.ToListAsync();
                result.SetData(data.ToCombo());
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<IdentityResult>> AddUser(UserCreateDto dto)
        {
            var result = new ServiceResponse<IdentityResult>();
            try
            {
                GuardAgainstPasswordConflict(dto.Password, dto.ConfirmPassword);
                var model = dto.ToModel();
                var user = await _userManager.CreateAsync(dto.ToModel(), dto.Password);
                await _userManager.AddToRoleAsync(model, model.Role.ToString());
                if (user.Succeeded)
                    result.SetData(user);
                else
                    result.SetException(string.Join("<br/>", user.Errors.Select(x => x.Description).ToList()));
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<UserUpdateDto>> GetUser(ClaimsPrincipal principal)
        {
            var result = new ServiceResponse<UserUpdateDto>();
            try
            {
                var userId = _userManager.GetUserId(principal);
                var data = await _userManager.Users.FirstOrDefaultAsync(x => x.Id == userId);
                if (data is null)
                    throw new Exception("کاربر مورد نظر یافت نشد");

                result.SetData(data.ToDto());
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<string>> GetUserId(ClaimsPrincipal principal)
        {
            var result = new ServiceResponse<string>();
            try
            {
                var userId = _userManager.GetUserId(principal);

                result.SetData(userId);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<UserUpdateDto>> GetUser(string userId)
        {
            var result = new ServiceResponse<UserUpdateDto>();
            try
            {
                var data = await _userManager.Users.FirstOrDefaultAsync(x => x.Id == userId);
                if (data is null)
                    throw new Exception("کاربر مورد نظر یافت نشد");

                result.SetData(data.ToDto());
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<bool>> UpdateUser(UserUpdateDto dto)
        {
            var result = new ServiceResponse<bool>();
            try
            {
                var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Id == dto.Id);
                if (user is null)
                    throw new Exception("کاربر مورد نظر یافت نشد");

                await _userManager.RemoveFromRoleAsync(user, user.Role.ToString());

                user.Update(dto.UserName,
                            dto.FirstName,
                            dto.LastName,
                            dto.PhoneNumber,
                            dto.Role,
                            dto.Email,
                            dto.IsActive);

                var res = await _userManager.UpdateAsync(user);

                await _userManager.AddToRoleAsync(user, user.Role.ToString());

                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }


        public async Task<ServiceResponse<bool>> ChangePassword(ChangePasswordDto dto)
        {
            var result = new ServiceResponse<bool>();
            try
            {
                GuardAgainstPasswordConflict(dto.NewPassword, dto.ConfirmNewPassword);

                var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Id == dto.UserId);
                if (user is null)
                    throw new Exception("کاربر مورد نظر یافت نشد");

                var res = await _userManager.ChangePasswordAsync(user,dto.OldPassword,dto.NewPassword);
                if (res.Succeeded)
                    result.SetData(true);
                else
                    result.SetException(string.Join("<br/>", res.Errors.Select(x => x.Description).ToList()));
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<bool>> Delete(string userId)
        {
            var result = new ServiceResponse<bool>();
            try
            {
                var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Id == userId);

                if (user is null)
                    throw new Exception("کاربر مورد نظر یافت نشد");

                await _userManager.DeleteAsync(user);

                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task SignOut(ClaimsPrincipal principal)
        {
            var user = await _userManager.GetUserAsync(principal);

            await _userManager.RemoveClaimsAsync(user, principal.Claims);

            await _signInManager.SignOutAsync();
        }

        #region Private

        private void GuardAgainstPasswordConflict(string password, string confirmPassword)
        {
            if (!password.Equals(confirmPassword))
                throw new Exception("پسورد ها باهم یکسان نیستند");
        }
        #endregion

    }
}
