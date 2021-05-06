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
            return Context.Beings.Where(b => b.Gender == Gender.NotApplicable).ToList();
        }

        [HttpGet("Kingdom/{name}")]
        public ActionResult<Kingdom> GetKingdom(string name)
        {
            Kingdom kingdom = Context.Kingdoms.Where(k => k.Name == name && k.Environment == "Foundation").ToList()[0];
            kingdom.Established = new Date(Ages.First, 1, Months.Rintra, 1);
            return kingdom;
        }
    }
}


/*
 * 0 = 1 Rintra, Year 1, First Age
 * 40 = 1 Moevyng, Year 1, First Age
 * 4000*365 = 1 Rintra, Year 1, Second Age
 * 12000*365 = 1 Rintra, Year 1, Fifth Age
 */