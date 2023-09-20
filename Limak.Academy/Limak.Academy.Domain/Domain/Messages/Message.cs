using Limak.Academy.Domain.Domain.Users;
using Limak.Academy.Framework.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Domain.Domain.Messages
{
    public class Message : EntityId<int>
    {
        public Message(string title, string messageBody, string senderId)
        {
            Title = title;
            MessageBody = messageBody;
            SenderId = senderId;
            IsRead = false;
        }
        public string Title { get; set; }
        public string MessageBody { get; set; }
        public string SenderId { get; set; }
        public User Sender { get; set; }

        public bool IsRead { get; set; }
        public string? ReaderId { get; set; }
        public User? Reader { get; set; }

        public Message Read(string readerId)
        {
            IsRead = true;
            ReaderId = readerId;

            return this;
        }
    }
}
