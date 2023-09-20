using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Application.Contract.Dto.Messages
{
    public class MessageDto:BaseDto
    {
        public string SenderId { get; set; }
        public string Title { get; set; }
        public string MessageBody { get; set; }
    }
}
