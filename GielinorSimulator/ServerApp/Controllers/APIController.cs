using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GielinorSimulator.Model;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GielinorSimulator.Controllers
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
        [HttpGet("Kingdom/{name}")]
        public ActionResult<IEnumerable<Kingdom>> GetKingdom(string name)
        {
            List<Kingdom> kingdoms = Context.Kingdoms.Where(k => k.Name == name & k.Environment == "Foundation").ToList();
            return kingdoms;
        }
    }
}
