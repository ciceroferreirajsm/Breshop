using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Breshop.Models;
using Breshop.Interfaces;
using Newtonsoft.Json;

namespace Breshop.Controllers
{
    public class ProdutoController : BaseController
    {
        private readonly IProdutoService _produtoService;
        private readonly ICarrinhoService _carrinhoService;
        private readonly ICarrinhoProdutoService _carrinhoProdutoService;


        public ProdutoController(IProdutoService produtoService, ICarrinhoService carrinhoService, ICarrinhoProdutoService carrinhoProdutoService)
        {
            _produtoService = produtoService;
            _carrinhoService = carrinhoService;
            _carrinhoProdutoService = carrinhoProdutoService;
        }

        public async Task<IActionResult> Ofertas()
        {
            try
            {
                if (_usuarioAutenticado)
                {
                    List<Produto> produtos = _produtoService.ObterListaProdutosPorCategoria("Ofertas");
                    var carrinho = _carrinhoService.ObterCarrinhoPorIdUsuario(_IdUsuario);

                    ViewData["QTD-CARRINHO"] = 0;
                    ViewData["RETORNO"] = _usuarioAutenticado;
                    ViewData["ISADMIN"] = _IsAdmin;
                    ViewData["IDUSUARIO"] = _IdUsuario;

                    if (carrinho != null)
                        ViewData["QTD-CARRINHO"] = _carrinhoProdutoService.ListarProdutosCarrinho(carrinho.IdProdutoCarrinho, carrinho.IdCarrinho).Count;

                    return View(produtos);
                }

                return RedirectToAction("Index", "Login");
            }
            catch (Exception)
            {
                List<Produto> produtos = new List<Produto>();

                return View(produtos);
            }
        }

        public async Task<IActionResult> Calcado(int? id)
        {
            try
            {
                if (_usuarioAutenticado)
                {
                    List<Produto> produtos = _produtoService.ObterListaProdutosPorCategoria("Calcado");

                    var carrinho = _carrinhoService.ObterCarrinhoPorIdUsuario(_IdUsuario);

                    ViewData["QTD-CARRINHO"] = 0;
                    ViewData["RETORNO"] = _usuarioAutenticado;
                    ViewData["ISADMIN"] = _IsAdmin;
                    ViewData["IDUSUARIO"] = _IdUsuario;

                    if (carrinho != null)
                        ViewData["QTD-CARRINHO"] = _carrinhoProdutoService.ListarProdutosCarrinho(carrinho.IdProdutoCarrinho, carrinho.IdCarrinho).Count;

                    return View(produtos);
                }

                return RedirectToAction("Index", "Login");
            }
            catch (Exception)
            {
                List<Produto> produtos = new List<Produto>();

                return View(produtos);
            }
        }

        public async Task<IActionResult> Feminino(int? id)
        {
            try
            {
                if (_usuarioAutenticado)
                {
                    List<Produto> produtos = _produtoService.ObterListaProdutosPorCategoria("Feminino");

                    var carrinho = _carrinhoService.ObterCarrinhoPorIdUsuario(_IdUsuario);

                    ViewData["QTD-CARRINHO"] = 0;
                    ViewData["RETORNO"] = _usuarioAutenticado;
                    ViewData["ISADMIN"] = _IsAdmin;
                    ViewData["IDUSUARIO"] = _IdUsuario;

                    if (carrinho != null)
                        ViewData["QTD-CARRINHO"] = _carrinhoProdutoService.ListarProdutosCarrinho(carrinho.IdProdutoCarrinho, carrinho.IdCarrinho).Count;

                    return View(produtos);
                }

                return RedirectToAction("Index", "Login");
            }
            catch (Exception)
            {
                List<Produto> produtos = new List<Produto>();

                return View(produtos);
            }
        }

        public async Task<IActionResult> Masculino(int? id)
        {
            try
            {
                if (_usuarioAutenticado)
                {
                    List<Produto> produtos = _produtoService.ObterListaProdutosPorCategoria("Masculino");

                    var carrinho = _carrinhoService.ObterCarrinhoPorIdUsuario(_IdUsuario);

                    ViewData["QTD-CARRINHO"] = 0;
                    ViewData["RETORNO"] = _usuarioAutenticado;
                    ViewData["ISADMIN"] = _IsAdmin;
                    ViewData["IDUSUARIO"] = _IdUsuario;

                    if (carrinho != null)
                        ViewData["QTD-CARRINHO"] = _carrinhoProdutoService.ListarProdutosCarrinho(carrinho.IdProdutoCarrinho, carrinho.IdCarrinho).Count;

                    return View(produtos);
                }

                return RedirectToAction("Index", "Login");
            }
            catch (Exception)
            {
                List<Produto> produtos = new List<Produto>();

                return View(produtos);
            }
        }

        public async Task<IActionResult> Acessorio(int? id)
        {
            try
            {
                if (_usuarioAutenticado)
                {
                    List<Produto> produtos = _produtoService.ObterListaProdutosPorCategoria("Acessorios");

                    var carrinho = _carrinhoService.ObterCarrinhoPorIdUsuario(_IdUsuario);

                    ViewData["QTD-CARRINHO"] = 0;
                    ViewData["RETORNO"] = _usuarioAutenticado;
                    ViewData["ISADMIN"] = _IsAdmin;
                    ViewData["IDUSUARIO"] = _IdUsuario;

                    if (carrinho != null)
                        ViewData["QTD-CARRINHO"] = _carrinhoProdutoService.ListarProdutosCarrinho(carrinho.IdProdutoCarrinho, carrinho.IdCarrinho).Count;

                    return View(produtos);
                }

                return RedirectToAction("Index", "Login");
            }
            catch (Exception)
            {
                List<Produto> produtos = new List<Produto>();

                return View(produtos);
            }
        }

        public async Task<JsonResult> ObterProdutoPorId(int IdProduto)
        {
            var retorno = _produtoService.ObterProdutoPorId(IdProduto);
            return Json(JsonConvert.SerializeObject(new { Produto = retorno }));
        }
    }
}
