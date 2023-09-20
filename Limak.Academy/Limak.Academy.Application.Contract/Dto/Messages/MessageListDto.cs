namespace Limak.Academy.Application.Contract.Dto.Messages
{
    public class MessageListDto:BaseListDto<int>
    {

        public string Title { get; set; }

        public string MessageBody { get; set; }

        public string SenderId { get; set; }
        public string SenderName { get; set; }

        public bool IsRead { get; set; }
        public string IsReadTitle => IsRead ? "خوانده شده" : "خوانده نشده";
        public string ReaderName { get; set; }
    }
}
