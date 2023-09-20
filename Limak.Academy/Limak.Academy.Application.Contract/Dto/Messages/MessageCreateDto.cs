using System.ComponentModel.DataAnnotations;

namespace Limak.Academy.Application.Contract.Dto.Messages
{
    public class MessageCreateDto
    {
        [Display(Name = "عنوان پیام")]
        [Required(ErrorMessage = "لطفا عنوان پیام را وارد کنید")]
        public string Title { get; set; }

        [Display(Name = "پیام")]
        [Required(ErrorMessage = "لطفا عنوان پیام را وارد کنید")]
        public string MessageBody { get; set; }

        public string? SenderId { get; set; }
    }
}
