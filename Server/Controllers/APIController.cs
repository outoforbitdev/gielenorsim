using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Server.Model;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class APIController : Controller
    {
        private DBContext Context { get; set; }

        public APIController(DBContext context)
        {
            Context = context;
        }

        [HttpGet("test")]
        public ActionResult<IEnumerable<Being>> Get()
        {
            Being being = new Being();
            being.Kingdom = "Misthalin";
            Context.Beings.Add(being);
            Context.SaveChanges();
            return Context.Beings.Where(b => b.Gender == Gender.NotApplicable).ToList();
        }
    }
}
