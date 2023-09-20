using Limak.Academy.Application.Contract.Dto.Teacher;
using Limak.Academy.Domain.Domain.Courses;
using Limak.Academy.Domain.Domain.Teachers;
using Limak.Academy.Framework.Core;
using Limak.Academy.Framework.Core.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Mappers.Teachers
{
    public static class TeacherMapper
    {
        public static Teacher ToModel(this TeacherCreateDto dto)
        {
            return new Teacher(dto.FullName,dto.FileName);
        }

        public static List<TeacherListDto> ToDto(this IEnumerable<Teacher>? model)
        {
            if (model is null)
                return new List<TeacherListDto>();

            return model.Select(x => new TeacherListDto()
            {
                Id = x.Id,
                FullName = x.FullName,
                FileName= x.FileName,
                CreatedOn = x.CreatedOn
            }).ToList();
        }

        public static TeacherUpdateDto ToDto(this Teacher model)
        {
            return new TeacherUpdateDto()
            {
                Id = model.Id,
                FullName = model.FullName,
                FileName= model.FileName,
            };
        }

        public static ComboModel ToComboModel(this Teacher model)
        {
            return new ComboModel()
            {
                Title = model.FullName,
                Value = model.Id
            };
        }
    }
}
