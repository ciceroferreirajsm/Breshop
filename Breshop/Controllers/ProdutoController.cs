using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Breshop.Models;
using Breshop.Intefaces;

namespace Breshop.Controllers
{
    public class ProdutoController : Controller
    {
        private readonly IProdutoService _produtoService;

        public ProdutoController(IProdutoService produtoService)
        {
            _produtoService = produtoService;
        }

        public async Task<IActionResult> Index()
        {
            try
            {
                List<Produto> produtos = new List<Produto>();

                return View(produtos);
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
                List<Produto> produtos = _produtoService.ObterListaProdutosPorCategoria("Calcado");

                return View(produtos);
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
                List<Produto> produtos = _produtoService.ObterListaProdutosPorCategoria("Feminino");

                return View(produtos);
            }
            catch (Exception)
            {
                List<Produto> produtos = new List<Produto>();

                return View(produtos);
            }
        }

        public async Task<IActionResult> Infantil(int? id)
        {
            try
            {
                List<Produto> produtos = _produtoService.ObterListaProdutosPorCategoria("Infantil");

                return View(produtos);
            }
            catch (Exception)
            {
                List<Produto> produtos = new List<Produto>();

                return View(produtos);
            }
        }

        public async Task<IActionResult> Ofertas(int? id)
        {
            try
            {
                List<Produto> produtos = _produtoService.ObterListaProdutosPorCategoria("Ofertas");

                return View(produtos);
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
                List<Produto> produtos = _produtoService.ObterListaProdutosPorCategoria("Masculino");

                return View(produtos);
            }
            catch (Exception)
            {
                List<Produto> produtos = new List<Produto>();

                return View(produtos);
            }
        }

        public async Task<IActionResult> Relogio(int? id)
        {
            try
            {
                List<Produto> produtos = _produtoService.ObterListaProdutosPorCategoria("Relogio");

                return View(produtos);
            }
            catch (Exception)
            {
                List<Produto> produtos = new List<Produto>();

                return View(produtos);
            }
        }

        public IActionResult Error(int? id)
        {
            return NotFound();
        }
    }
}
