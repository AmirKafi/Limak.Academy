using Limak.Academy.Domain.Domain.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Persistance.Repositories.Messages
{
    public class MessageRepository:CrudRepository<Message,int>,IMessageRepository
    {
    }
}
