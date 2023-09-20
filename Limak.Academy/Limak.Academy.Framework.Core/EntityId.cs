using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Framework.Core
{
    public class EntityId<T>
    {
        public T Id { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;

        public override bool Equals(object obj)
        {
            if (this.GetType() != obj.GetType()) return false;
            var otherId = obj as EntityId<T>;
            return otherId != null && otherId.Id.Equals(this.Id);
        }
        public override int GetHashCode()
        {
            return this.Id.GetHashCode();
        }
    }
}
