using Limak.Academy.Domain.Domain.Courses;
using Limak.Academy.Domain.Domain.Users;
using Limak.Academy.Framework.Core;
using Limak.Academy.Utility.Extentions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Limak.Academy.Utility.Extentions.DateTime;

namespace Limak.Academy.Domain.Domain.Discounts
{
    public class Discount : EntityId<int>
    {
        private Discount()
        {

        }
        public Discount(string code,
                            int precentage,
                            string? description,
                            string? specifiedUserId,
                            DateOnly? expireDate)
        {
            this.Code = code;
            this.Description = description;
            this.Precentage = precentage;
            this.SpecifiedUserId = specifiedUserId;
            this.ExpireDate = expireDate.AsDateTime();
            this.Expired = false;
        }

        public string Code { get; private set; }
        public int Precentage { get; private set; }
        public string? Description { get; private set; }

        public string? SpecifiedUserId { get; private set; }
        public User? SpecifiedUser { get; private set; }

        public ICollection<Course>? SpecifiedCourses { get; private set; }

        public DateTime? ExpireDate { get; private set; }
        public bool Expired { get; private set; }


        public Discount UpdateExpiration(bool expired)
        {
            this.Expired = expired;

            return this;
        }
    }
}
