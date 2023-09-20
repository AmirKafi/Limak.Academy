using Limak.Academy.Application.Contract.Dto.Messages;
using Limak.Academy.Domain.Domain.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Mappers.Messages
{
    public static class MessageMapper
    {
        public static Message ToModel(this MessageCreateDto dto)
        {
            return new Message(dto.Title,
                               dto.MessageBody,
                               dto.SenderId);
        }

        public static List<MessageListDto> ToDto(this IEnumerable<Message>? model)
        {
            return model.Select(x => new MessageListDto()
            {
                Id = x.Id,
                Title = x.Title,
                MessageBody = x.MessageBody,
                SenderId = x.SenderId,
                SenderName = x.Sender is null ? "" : x.Sender.FirstName + " " + x.Sender.LastName,
                IsRead = x.IsRead,
                ReaderName = x.Reader is null ? "" : x.Reader.FirstName + " " + x.Reader.LastName,
                CreatedOn = x.CreatedOn
                
            }).ToList();
        }

        public static MessageUpdateDto ToDto(this Message model)
        {
            return new MessageUpdateDto()
            {
                Id = model.Id,
                Title = model.Title,
                MessageBody = model.MessageBody,
                SenderId = model.SenderId,
                IsRead = model.IsRead
            };
        }
    }
}
