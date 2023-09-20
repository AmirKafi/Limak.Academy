namespace Limak.Academy.Application.Contract.Dto.Blogs
{
    public class BlogListDto : BaseListDto<int>
    {
        public string Title { get; set; }
        public string AuthorName { get; set; }
        public string TextBody { get; set; }

        public string Picture { get; set; }
        public string PicturePath { get; set; }
    }
}
