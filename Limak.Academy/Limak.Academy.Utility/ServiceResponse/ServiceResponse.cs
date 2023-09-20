
using Newtonsoft.Json;

namespace Limak.Academy.Utility.ServiceResponse
{
    using System;
    using System.Collections;
    using System.Text.Json.Serialization;

    public class ServiceResponse<T>
    {
        public T Data { get; private set; }

        public string Message { get; private set; }

        [JsonIgnore]
        public Exception Exception { get; private set; }

        public ResultStatus ResultStatus { get; private set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public object ExtraData { get; set; }

        public long Total { get; private set; }

        public int ErrorCode { get; private set; }

        public void SetData(T value, long total = -1)
        {
            Data = value;
            var dictionary = value as IDictionary;
            if (dictionary != null)
            {
                ResultStatus = dictionary.Count == 0
                    ? ResultStatus.DataNotFound
                    : ResultStatus.Successful;
                total = total == -1
                    ? dictionary.Count
                    : total;
            }
            else if (value != null &&
                     value is IList)
            {
                ResultStatus = ((IList)value).Count == 0
                    ? ResultStatus.DataNotFound
                    : ResultStatus.Successful;
                total = total == -1
                    ? ((IList)value).Count
                    : total;
            }
            else
            {
                ResultStatus = value == null
                    ? ResultStatus.DataNotFound
                    : ResultStatus.Successful;
                total = 0;
            }

            Exception = null;
            Message = "";
            Total = total;
        }

        public void SetWarning(string message)
        {
            ResultStatus = ResultStatus.UnSuccessful;
            Exception = null;
            Message = message;
            ErrorCode = 0;
        }

        public void SetException(Exception ex)
        {
            ResultStatus = ResultStatus.Exception;
            Exception = ex;
            Message = ex != null
                ? ex.Message
                : string.Empty;
        }

        public void SetException(string message)
        {

            ResultStatus = ResultStatus.Exception;
            Message = message;
        }

        public void ClearException()
        {
            Exception = null;
        }
    }
}
