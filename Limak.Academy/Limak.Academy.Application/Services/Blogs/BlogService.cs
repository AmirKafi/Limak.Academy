using Limak.Academy.Application.Contract.Dto.Blogs;
using Limak.Academy.Application.Contract.Interfaces.Blogs;
using Limak.Academy.Domain.Domain.Categories;
using Limak.Academy.Domain.Domain.Courses;
using Limak.Academy.Utility.ServiceResponse;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Limak.Academy.Domain.Domain.Blogs;
using Limak.Academy.Application.Contract.Mappers.Blogs;
using Microsoft.EntityFrameworkCore;
using Limak.Academy.Application.Contract.Dto.Course;

namespace Limak.Academy.Application.Services.Blogs
{
    public class BlogService : IBlogService
    {
        #region Constructor
        private readonly IBlogRepository _repository;
        public BlogService(IBlogRepository repository)
        {
            _repository = repository;
        }

        #endregion

        public async Task<ServiceResponse<List<BlogListDto>>> LoadBlogs(BlogDto dto)
        {
            var result = new ServiceResponse<List<BlogListDto>>();
            try
            {
                var data = _repository.GetQuerable().AsNoTracking()
                                      .Include(x => x.Author)
                                      .Skip(dto.limit * dto.offset)
                                      .Take(dto.limit);
                result.SetData(data.ToDto());
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<List<BlogListDto>>> LoadBlogs(string? title)
        {
            var result = new ServiceResponse<List<BlogListDto>>();
            try
            {
                var data = _repository.GetQuerable().AsNoTracking()
                                      .Include(x => x.Author)
                                      .Where(x => (title == null || x.Title.Contains(title)));
                result.SetData(data.ToDto());
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<BlogDetailDto>> GetBlogDetails(int blogId)
        {
            var result = new ServiceResponse<BlogDetailDto>();
            try
            {
                var data = await _repository.Get(blogId);
                result.SetData(data.ToDetailDto());
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<bool>> AddBlog(BlogCreateDto dto)
        {
            var result = new ServiceResponse<bool>();
            try
            {
                await _repository.Add(dto.ToModel());
                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<BlogUpdateDto>> GetBlog(int blogId)
        {
            var result = new ServiceResponse<BlogUpdateDto>();
            try
            {
                var data = await _repository.Get(blogId);
                result.SetData(data.ToDto());
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<bool>> UpdateBlog(BlogUpdateDto dto)
        {
            var result = new ServiceResponse<bool>();
            try
            {
                var blog = await _repository.Get(dto.Id);
                blog.Update(dto.Title,
                            dto.TextBody,
                            dto.Picture);

                await _repository.Update(blog);

                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

        public async Task<ServiceResponse<bool>> Delete(int blogId)
        {
            var result = new ServiceResponse<bool>();
            try
            {
                var blog = await _repository.GetById(blogId);
                await _repository.Delete(blog);

                result.SetData(true);
            }
            catch (Exception ex)
            {
                result.SetException(ex.Message);
            }

            return result;
        }

    }
}
