using Limak.Academy.Framework.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Domain.Domain.Messages
{
    public interface IMessageRepository : IReadRepository<Message, int>, IWriteRepository<Message, int>, IQueryRepository<Message, int>
    {
    }
}
