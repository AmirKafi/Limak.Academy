using Limak.Academy.Application.Contract.Dto.Course;
using Limak.Academy.Application.Contract.Dto.Orders;
using Limak.Academy.Application.Contract.Mappers.Courses;
using Limak.Academy.Domain.Domain.Orders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Mappers.Orders
{
    public static class OrderMapper
    {
        public static Order ToModel(this OrderCreateDto dto)
        {
            return new Order(dto.OrderType,
                             dto.CourseId,
                             dto.Qty,
                             dto.Price,
                             dto.UserId);
        }

        public static List<OrderListDto> ToDto(this List<Order> model)
        {
            return model.Select(x => new OrderListDto()
            {
                Id = x.Id,
                CreatedOn = x.CreatedOn,
                IsPayed = x.Transaction is null ? false : true,
                OrderType = x.OrderType,
                Price = x.Price,
                UserId = x.UserId,
                Qty = x.Qty,
                TotalPrice = x.TotalPrice,
                UserFullName = x.User.FirstName + " " + x.User.LastName,
                Course = x.Course is null ? new CourseDetailsDto() : x.Course.ToDetailDto(),
                LicenseKey = x.LicenseKey
            }).ToList();
        }
    }
}
