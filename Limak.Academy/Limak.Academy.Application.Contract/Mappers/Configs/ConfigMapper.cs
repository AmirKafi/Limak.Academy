using Limak.Academy.Application.Contract.Dto.Configs;
using Limak.Academy.Domain.Domain.Configs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Mappers.Configs
{
    public static class ConfigMapper
    {
        public static Config ToModel(this ConfigSaveDto dto)
        {
            return new Config(dto.Email,
                              dto.Address,
                              dto.ContactNumber,
                              dto.InstagramLink,
                              dto.TelegramLink);
        }

        public static ConfigDto ToDto(this Config? model)
        {
            if (model == null)
                throw new ArgumentNullException("عملیات با خطا مواجه شد");

            return new ConfigDto()
            {
                Address = model.Address,
                Email = model.Email,
                ContactNumber = model.ContactNumber,
                InstagramLink = model.InstagramLink,
                TelegramLink = model.TelegramLink
            };
        }
    }
}
