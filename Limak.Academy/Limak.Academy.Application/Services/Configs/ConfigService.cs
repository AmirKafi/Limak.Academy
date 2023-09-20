using Limak.Academy.Application.Contract.Dto.Configs;
using Limak.Academy.Application.Contract.Interfaces.Configs;
using Limak.Academy.Application.Contract.Mappers.Configs;
using Limak.Academy.Domain.Domain.Configs;
using Limak.Academy.Utility.ServiceResponse;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Services.Configs
{
    public class ConfigService : IConfigService
    {
        #region Constructor

        private readonly IConfigRepository _configRepository;

        public ConfigService(IConfigRepository configRepository)
        {
            _configRepository = configRepository;
        }

        #endregion
        public async Task<ServiceResponse<ConfigDto>> GetConfig()
        {
            var result = new ServiceResponse<ConfigDto>();

            try
            {
                var config = _configRepository.GetQuerable().AsNoTracking()
                                              .FirstOrDefault();
                result.SetData(config.ToDto());
            }
            catch (Exception ex)
            {
                result.SetException(ex);
            }

            return result;
        }

        public async Task<ServiceResponse<bool>> SaveConfig(ConfigSaveDto dto)
        {
            var result = new ServiceResponse<bool>();

            try
            {
                var config = _configRepository.GetQuerable().AsNoTracking();

                if (config.Count() != 0)
                {
                    await _configRepository.Update(dto.ToModel());
                    result.SetData(true);
                }
                else
                {
                    await _configRepository.Add(dto.ToModel());
                    result.SetData(true);
                }
            }
            catch (Exception ex)
            {
                result.SetException(ex);
            }

            return result;
        }
    }
}
