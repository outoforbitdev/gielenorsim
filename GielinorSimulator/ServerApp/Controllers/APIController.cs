using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GielinorSimulator.Model;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GielinorSimulator.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class APIController : Controller
    {
        private DBContext Context { get; set; }

        private const string Environment = "Foundation";

        public APIController(DBContext context)
        {
            Context = context;
        }

        [HttpGet("test")]
        public ActionResult<IEnumerable<Being>> Get()
        {
            return Context.Beings.Where(b => b.Gender == Gender.NotApplicable).ToList();
        }

        [HttpGet("Encyclopedia/Search/{name}")]
        public ActionResult<SearchSuggestiongResponse> Search(string name)
        {
            IQueryable<Index> searchResults = SearchSuggestions(name);
            List<SearchResult> listResults = searchResults.Take(5).Select((arg) => ConvertToResult(arg)).ToList();

            //SearchResults results = (SearchResults)listResults;

            return new SearchSuggestiongResponse(listResults);
        }

        private IQueryable<Index> SearchSuggestions(string name)
        {
            return Context.Index.Where(i => i.Environment == Environment && i.Name.ToLower().Contains(name.ToLower()));
        }

        private bool MatchesSearchSuggestion(Index i, string name)
        {
            return i.Environment == Environment && i.Name.Contains(name.ToLower());
        }

        private static SearchResult ConvertToResult<T>(T e) where T: Entity
        {
            return new SearchResult() { Value = e.Name };
        }
    }
}


/*
 * 0 = 1 Rintra, Year 1, First Age
 * 40 = 1 Moevyng, Year 1, First Age
 * 4000*365 = 1 Rintra, Year 1, Second Age
 * 12000*365 = 1 Rintra, Year 1, Fifth Age
 */