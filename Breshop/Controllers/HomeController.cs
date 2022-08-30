using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Breshop.Models;

namespace Breshop.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Calcado()
        {

            return View();
        }

        public IActionResult Feminino()
        {
            return View();
        }

        public IActionResult Infantil()
        {

            return View();
        }

        public IActionResult Masculino()
        {

            return View();
        }

        public IActionResult Relogio()
        {

            return View();
        }
    }
}
