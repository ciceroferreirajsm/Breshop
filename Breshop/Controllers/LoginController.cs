using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Breshop.Models;
using Breshop.Interfaces;
using System;

namespace Breshop.Controllers
{
    public class LoginController : BaseController
    {
        private readonly IUsuarioService _usuarioService;

        public LoginController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult AutenticarUsuario(Usuario usuario)
        {
            var retorno = _usuarioService.ValidaCredenciais(usuario);

            if (retorno != null)
            {
                if (retorno.IsAdmin)
                    _IsAdmin = true;

                _usuarioAutenticado = true;
                _IdUsuario = _usuarioService.SetarUsuarioLogado();
                return Json(JsonConvert.SerializeObject(new { autenticado = "true", message = $"Usuario autenticado com sucesso." }));
            }

            return Json(JsonConvert.SerializeObject(new { autenticado = "false", message = $"Credenciais inválidas." }));
        }

        public IActionResult Logout()
        {
            if (_usuarioAutenticado)
            {
                _usuarioAutenticado = false;
                _IdUsuario = 0;
                _IsAdmin = false;
                ViewData["RETORNO"] = false;
                ViewData["ISADMIN"] = false;
                ViewData["IDUSUARIO"] = false;
            }

            return RedirectToAction("Index", "Login");
        }

        public JsonResult ObterUsuarioPorId(int idUsuario)
        {
            var retorno = _usuarioService.ObterPorId(idUsuario);

            if (retorno != null)
            {
                return Json(JsonConvert.SerializeObject(new { usuario = retorno }));
            }

            return Json(JsonConvert.SerializeObject(new { retorno = new Usuario() }));
        }

        public IActionResult CadastreSe()
        {
            return View();
        }

        [HttpPost]
        public IActionResult CadastreSe(Usuario usuario)
        {
            try
            {
                var retorno = _usuarioService.AdicionarUsuario(usuario);

                _usuarioAutenticado = true;
                _IdUsuario = _usuarioService.SetarUsuarioLogado();

                return Json(JsonConvert.SerializeObject(new { autenticado = "true", message = $"Usuario autenticado com sucesso." }));
            }
            catch (Exception ex)
            {
                return Json(JsonConvert.SerializeObject(new { autenticado = "false", message = ex.Message }));
            }
        }
    }
}
