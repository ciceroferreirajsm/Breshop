using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Breshop.Models;
using Breshop.Interfaces;
using Newtonsoft.Json;

namespace Breshop.Controllers
{
    public class CarrinhoProdutoController : BaseController
    {
        private readonly IProdutoService _produtoService;
        private readonly IPedidoService _pedidoService;
        private readonly ICarrinhoService _carrinhoService;
        private readonly ICarrinhoProdutoService _carrinhoProdutoService;

        public CarrinhoProdutoController(IProdutoService produtoService, ICarrinhoService carrinhoService, ICarrinhoProdutoService carrinhoProdutoService, IPedidoService pedidoService)
        {
            _produtoService = produtoService;
            _carrinhoService = carrinhoService;
            _carrinhoProdutoService = carrinhoProdutoService;
            _pedidoService = pedidoService;
        }

        public IActionResult Index()
        {
            if (_usuarioAutenticado)
            {
                ViewData["RETORNO"] = _usuarioAutenticado;
                ViewData["ISADMIN"] = _IsAdmin;
                ViewData["IDUSUARIO"] = _IdUsuario;

                return View();
            }

            return RedirectToAction("Index", "Login");
        }

        public IActionResult Checkout()
        {
            if (_usuarioAutenticado)
            {
                var carrinho = _carrinhoService.ObterCarrinhoPorIdUsuario(_IdUsuario);

                if(carrinho == null || carrinho.IdCarrinho == 0)
                    return RedirectToAction("Ofertas", "Produto");

                var produtos = _carrinhoProdutoService.ListarProdutosCarrinho(carrinho.IdProdutoCarrinho, carrinho.IdCarrinho);

                ViewData["RETORNO"] = _usuarioAutenticado;
                ViewData["CARRINHO"] = carrinho.IdCarrinho;
                ViewData["ISADMIN"] = _IsAdmin;
                ViewData["IDUSUARIO"] = _IdUsuario;
                ViewData["PRODUTOS"] = JsonConvert.SerializeObject(produtos);
                ViewData["PRODUTOS"] = JsonConvert.SerializeObject(produtos);

                return View(produtos);
            }

            return RedirectToAction("Index", "Login");
        }

        public void AdicionarProdutoCarrinho([FromQuery] int idUsuario, [FromQuery] int idProduto, [FromQuery] int QtdProduto)
        {
            if (_usuarioAutenticado)
            {
                _carrinhoProdutoService.AdicionarNoCarrinho(idProduto, idUsuario, QtdProduto);

                ViewData["RETORNO"] = _usuarioAutenticado;
                ViewData["ISADMIN"] = _IsAdmin;
                ViewData["IDUSUARIO"] = _IdUsuario;
            }
        }

        public void RemoverProdutoCarrinho([FromQuery] int idUsuario, [FromQuery] int idProduto)
        {
            if (_usuarioAutenticado)
            {
                _carrinhoProdutoService.RemoverProdutoDoCarrinho(idProduto, idUsuario);

                ViewData["RETORNO"] = _usuarioAutenticado;
                ViewData["ISADMIN"] = _IsAdmin;
                ViewData["IDUSUARIO"] = _IdUsuario;
            }
        }

        public async Task<JsonResult> FinalizarPedido(int idUsuario, int idCarrinho)
        {
            var retorno = await _pedidoService.FinalizarPedido(idUsuario, idCarrinho);
            ViewData["IDPEDIDO"] = retorno.IdPedido;
            return Json(JsonConvert.SerializeObject(new { sucess =  true, idPedido = retorno.IdPedido }));
        }
    }
}
