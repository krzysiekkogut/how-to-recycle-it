using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace HowToRecycleIt_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComputerVisionController : ControllerBase
    {
        [HttpPost]
        public async Task<JObject> Post([FromBody] string base64JpegImage)
        {
            // Add your Computer Vision subscription key and endpoint to your environment variables.
            var subscriptionKey = Environment.GetEnvironmentVariable("COMPUTER_VISION_SUBSCRIPTION_KEY");
            var endpoint = Environment.GetEnvironmentVariable("COMPUTER_VISION_ENDPOINT");

            var client = new HttpClient();
            client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", subscriptionKey);
            var uri = $"{endpoint}/analyze?visualFeatures=Objects";

            HttpResponseMessage response;
            using (var content = new ByteArrayContent(Convert.FromBase64String(base64JpegImage)))
            {
                content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
                response = await client.PostAsync(uri, content);
            }

            var contentResponse = await response.Content.ReadAsStringAsync();
            return JObject.Parse(contentResponse);
        }
    }
}
