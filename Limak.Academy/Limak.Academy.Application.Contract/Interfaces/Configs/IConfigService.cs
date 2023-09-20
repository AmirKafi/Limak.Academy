using Limak.Academy.Application.Contract.Dto.Configs;
using Limak.Academy.Application.Contract.Dto.Teacher;
using Limak.Academy.Utility.ServiceResponse;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Interfaces.Configs
{
    public interface IConfigService
    {
        Task<ServiceResponse<bool>> SaveConfig(ConfigSaveDto dto);
        Task<ServiceResponse<ConfigDto>> GetConfig();
    }
}
