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
    public class KingdomController : Controller
    {
        private DBContext Context { get; set; }

        private const string Environment = "Foundation";

        public KingdomController(DBContext context)
        {
            Context = context;
        }


        [HttpGet("Load/{kingdomRequest}")]
        public ActionResult<KingdomResponse> GetKingdom(KingdomRequest kingdomRequest)
        {
            return new KingdomResponse(Database.GetT(Environment, Context.Kingdoms, kingdomRequest.Name));
        }

        [HttpGet("Create/{kingdomRequest}")]
        public ActionResult<Response> CreateKingdom(KingdomRequest kingdomRequest)
        {
            Kingdom k = new Kingdom()
            {
                Environment = Environment,
                Name = kingdomRequest.Name,
            };
            Database.CreateT(Context, Context.Kingdoms, k, EntityType.Kingdom);

            return new Response(true);
        }

        [HttpGet("Update/{kingdomRequest}")]
        public ActionResult<Response> UpdateKingdom(KingdomResponse kingdomRequest)
        {
            Response response = Database.UpdateT(Environment, Context.Kingdoms, kingdomRequest.Kingdom);
            Context.SaveChanges();
            return response;
        }
    }
}
