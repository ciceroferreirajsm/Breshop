using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Breshop.Models;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using System;
using Breshop.Interfaces;
using Newtonsoft.Json;

namespace Breshop.Controllers
{
    public class RelatoriosController : BaseController
    {
        private readonly IPedidoService _PedidoService;
        private readonly ICarrinhoProdutoService _carrinhoProdutoService;
        private readonly IProdutoService _produtoService;
        private readonly ICarrinhoService _carrinhoService;
        private IHostingEnvironment Environment;

        public RelatoriosController(IPedidoService PedidoService, IHostingEnvironment _environment,
            ICarrinhoProdutoService carrinhoProdutoService, ICarrinhoService carrinhoService, IProdutoService produtoService)
        {
            _produtoService = produtoService;
            _PedidoService = PedidoService;
            Environment = _environment;
            _carrinhoService = carrinhoService;
            _carrinhoProdutoService = carrinhoProdutoService;
        }

        public async Task<IActionResult> Index()
        {
            try
            {
                ViewData["RETORNO"] = _usuarioAutenticado;
                ViewData["ISADMIN"] = _IsAdmin;
                ViewData["IDUSUARIO"] = _IdUsuario;

                if (_usuarioAutenticado)
                {
                    var retorno = _PedidoService.ObterListaPedidos(_IdUsuario);
                    var listaRelatorio = new List<Relatorio>();
                    var relatorio = new Relatorio();

                    if (retorno != null)
                    {
                        foreach (var item in retorno)
                        {
                            var carrinho = _carrinhoService.ObterCarrinhoPorIdRelatorio(item.IdCarrinho);

                            if(carrinho == null) carrinho = new Carrinho();

                            relatorio.DataPedido = item.DataPedido;
                            var listaProdutos = _carrinhoProdutoService.ListarProdutosCarrinho(carrinho.IdProdutoCarrinho, carrinho.IdCarrinho);
                            foreach (var prod in listaProdutos)
                            {
                                relatorio = new Relatorio();
                                relatorio.IdProduto = prod.IdProduto;
                                relatorio.Modelo = prod.Categoria;
                                relatorio.Quantidade = prod.Quantidade;
                                listaRelatorio.Add(relatorio);
                            }   
                        }
                    }

                    ViewData["RELATORIO"] = JsonConvert.SerializeObject(listaRelatorio);

                    return View();
                }

                return RedirectToAction("Index", "Login");
            }
            catch (Exception ex)
            {
                ViewBag.Message = ex.Message;
                return View();
            }
        }
    }
}
