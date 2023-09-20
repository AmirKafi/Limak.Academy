using Limak.Academy.Utility.Extentions.DateTime;

namespace Limak.Academy.Application.Contract.Dto.Discounts
{
    public class DiscountListDto : BaseListDto<int>
    {
        public string Code { get; set; }
        public int Precentage { get; set; }
        public string Description { get; set; }

        public string? SpecifiedUserId { get; set; }

        public string? SpecifiedUserFullName { get; set; }
        public string? SpecifiedCourseTitle { get; set; }
        public DateOnly? ExpireDate { get; set; }
        public string ExpireDateFa => ExpireDate.AsDateTime().ToFa();
        public bool Expired { get; set; }
        public bool IsExpired => ExpireDate is null ? (Expired ? true : false)
                                                            :
                                                              (ExpireDate < DateTime.Now.Date.AsDateOnly() ? Expired ? true : false
                                                                                                          : false);
        public string ExpirationTitle => IsExpired ? "غیر فعال" : "فعال";
    }
}
