using System.ComponentModel.DataAnnotations;

namespace Limak.Academy.Application.Contract.Dto.Messages
{
    public class MessageUpdateDto
    {
        public int Id { get; set; }

        [Display(Name = "عنوان پیام")]
        public string Title { get; set; }

        [Display(Name = "پیام")]
        public string MessageBody { get; set; }

        public string SenderId { get; set; }
        public bool IsRead { get; set; }
    }
}
