using Limak.Academy.Framework.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limak.Academy.Domain.Domain.Configs
{
    public class Config : EntityId<int>
    {
        #region Constructor
        public Config(string? email, string? address, string? contactNumber, string? instagramLink, string? telegramLink)
        {
            Email = email;
            Address = address;
            ContactNumber = contactNumber;
            InstagramLink = instagramLink;
            TelegramLink = telegramLink;
        }

        #endregion

        #region Properties
        public string? Email { get; set; }
        public string? Address { get; set; }
        public string? InstagramLink { get; set; }
        public string? TelegramLink { get; set; }
        public string? ContactNumber { get; set; }

        #endregion

        #region Methods

        public Config Update(string? email, string? address, string? contactNumber, string? instagramLink, string? telegramLink)
        {
            Email = email;
            Address = address;
            ContactNumber = contactNumber;
            InstagramLink = instagramLink;
            TelegramLink = telegramLink;

            return this;
        }
        #endregion


    }
}
