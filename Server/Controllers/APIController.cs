﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class APIController : Controller
    {
        [HttpGet("test")]
        public string Index()
        {
            return "test successful";
        }
    }
}
