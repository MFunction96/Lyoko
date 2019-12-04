using System;
using Lyoko.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Lyoko.Controllers
{
    public class SystemInfoModel
    {
        public bool ShowTime { get; set; }

        public LyokoTime ServerTime => LyokoTime.Now();

        public SystemInfoModel()
        {
            ShowTime = false;
        }
    }

    // api/systeminfo
    [ApiController]
    [Route("[controller]")]
    public class SystemInfoController : ControllerBase
    {

        private readonly ILogger<SystemInfoController> _logger;

        public SystemInfoController(ILogger<SystemInfoController> logger)
        {
            _logger = logger;
        }

        // GET: api/<controller>
        [HttpGet]
        public async Task<SystemInfoModel> Get()
        {
            return await Task.FromResult(new SystemInfoModel());
        }

        // GET api/<controller>/5
        [HttpGet("{key}")]
        public string Get(string key)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
