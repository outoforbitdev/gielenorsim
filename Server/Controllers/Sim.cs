using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.IO;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("[controller]")]
    public class SimController : Controller
    {
        static string Path = "../client/build/";

        [HttpGet("")]
        public ActionResult Root()
        {
            return GetFileWithExtension("index", "html");
        }

        [HttpGet("{path}")]
        public ActionResult Index(string path = "index")
        {
            return GetFileWithExtension(path, "html");
        }

        //[HttpGet("{path}.{extension}")]
        //public ActionResult GetFile(string? path, string? extension)
        //{
        //    if (path == null || extension == null)
        //    {
        //        path = "index";
        //        extension = "html";
        //    }
        //    return GetFileWithExtension(path, extension);
        //}

        private ActionResult GetFileWithExtension(string path, string extension)
        {
            FileStream file;
            try
            {
                file = System.IO.File.OpenRead(Path + path + "." + extension);
            }
            catch
            {
                return new ContentResult
                {
                    Content = "File not found",
                    StatusCode = 404,
                };
            }
            try
            {
                Console.WriteLine(path);
            }
            catch { }
            return File(file, "text/" + extension);
        }
    }
}
