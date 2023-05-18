using Breshop.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Breshop.Controllers
{
    public class BaseController : Controller
    {
        protected static bool _usuarioAutenticado;
        protected static bool _IsAdmin;
        protected static int _IdUsuario;

        public BaseController()
        {
            
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View();
        }
    }
}
