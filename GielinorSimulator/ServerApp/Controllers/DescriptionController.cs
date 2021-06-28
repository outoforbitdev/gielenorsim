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
    public class DescriptionController : Controller
    {
        private DBContext Context { get; set; }

        private const string Environment = "Foundation";

        public DescriptionController(DBContext context)
        {
            Context = context;
        }


        [HttpGet("Load/{descriptionRequest}")]
        public ActionResult<DescriptionResponse> GetKingdom(KingdomRequest descriptionRequest)
        {
            return new DescriptionResponse(Database.GetT(Environment, Context.Descriptions, descriptionRequest.Name));
        }
    }
}
