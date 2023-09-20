using Limak.Academy.Framework.Core;
using Limak.Academy.Framework.Core.Enum;
using Limak.Academy.Utility.ServiceResponse;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.StaticFiles;

namespace Limak.Academy.Controllers.Base
{
    public class BaseController : Controller
    {
        protected string GetBaseRoot()
          => HttpContext.Request.Scheme + "://" + HttpContext.Request.Host;
        
        protected string GetEnumDisplayValue(Enum enumName)
        {
            var type = enumName.GetType();
            var field = type.GetField(enumName.ToString());
            var display = ((System.ComponentModel.DataAnnotations.DisplayAttribute[])field?.GetCustomAttributes(typeof(System.ComponentModel.DataAnnotations.DisplayAttribute), false))?.FirstOrDefault();
            return display != null
                ? display.GetName()
                : enumName.ToString();
        }

        protected List<SelectListItem> EnumToList(Type enumType, Enum selectedItem, bool orderBy = true, Enum[] ignore = null)
        {
            var items = new List<SelectListItem>();
            if (enumType == null)
                return items;

            var values = Enum.GetValues(enumType);
            items.AddRange(from Enum item in values
                           where ignore == null || !ignore.Contains(item)
                           select new SelectListItem
                           {
                               Value = item.ToString(),
                               Text = GetEnumDisplayValue(item),
                               Selected = selectedItem != null && item.ToString() == selectedItem.ToString()
                           });
            return orderBy
                ? items.OrderBy(item => item.Text)
                    .ToList()
                : items.ToList();
        }

        protected List<SelectListItem> ComboToSelectList(List<ComboModel> model)
        {
            return model.Select(x => new SelectListItem()
            {
                Value = x.Value.ToString(),
                Text = x.Title.ToString(),
            }).ToList();
        }

        protected ServiceResponse<string> SaveFile(IFormFile file,FileFoldersEnum folderName)
        {
            var result = new ServiceResponse<string>();

            if (file is null)
                result.SetException("انتخاب فایل اجباری می باشد");

            var path = Path.Combine(@"wwwroot", "InAppImages", folderName.ToString());

            if (!Directory.Exists(path))
                Directory.CreateDirectory(path);

            var newFileName = Guid.NewGuid() + Path.GetExtension(file.FileName);

            string fileNameWithPath = Path.Combine(path, newFileName);

            using (var stream = new FileStream(fileNameWithPath, FileMode.Create))
            {
                file.CopyTo(stream);
            }
            result.SetData(newFileName);

            return result;
        }

        protected virtual string GetFileUrl(string fileName, FileFoldersEnum folderName)
        {
            var path = Path.Combine(GetBaseRoot(), "InAppImages", folderName.ToString(), fileName);
            if (!Path.HasExtension(path))
                path += ".jpg";

            return path;
        }

        protected string GetErrorMessages()
        {
            return string.Join("<br/>",
                ModelState.Values.Where(state => state.Errors.Count > 0)
                    .Select(state => string.Join("<br/>",
                        state.Errors
                            .Where(error => !string.IsNullOrEmpty(error.ErrorMessage))
                            .Select(error => error.ErrorMessage)
                            .ToList()))
                    .ToList());
        }
    }
}
