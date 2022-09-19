using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Breshop.Models;
using Breshop.Intefaces;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using System;
using Newtonsoft.Json;

namespace Breshop.Controllers
{
    public class CadastrarProdutosController : Controller
    {
        private readonly IProdutoService _produtoService;
        private IHostingEnvironment Environment;

        public CadastrarProdutosController(IProdutoService produtoService, IHostingEnvironment _environment)
        {
            _produtoService = produtoService;
            Environment = _environment;
        }

        public async Task<IActionResult> Index(string Categoria)
        {
            try
            {
                List<Produto> produtos = new List<Produto>();

                if (string.IsNullOrWhiteSpace(Categoria))
                {
                    produtos = _produtoService.ListarProdutos();
                    return View(produtos);
                }

                produtos = _produtoService.ObterListaProdutosPorCategoria(Categoria);

                ViewBag.CategoriaSelecionada = Categoria;
                ViewBag.Message = produtos == null || produtos.Count == 0 ? "Nenhum produto encontrado!" : null;

                return View(produtos);
            }
            catch (Exception ex)
            {
                ViewBag.Message = ex.Message;
                return View();
            }
        }

        public async Task<IActionResult> Criar(Produto produto)
        {
            if (string.IsNullOrWhiteSpace(produto.Marca))
            {
                return View(produto);
            }

            produto.UrlImagem = SalvarImagem(produto.Imagem, produto.Categoria);

            bool produtoAdicionado = _produtoService.AdicionarProduto(produto);

            if (produtoAdicionado)
            {
                return View(produto);
            }
            else
            {
                produto = new Produto();
                ViewBag.Message = "Houve um erro ao adicionar o produto.";
            }

            return View(produto);
        }

        public async Task<IActionResult> Deletar(int id, string Categoria)
        {
            if (id == 0)
            {
                ViewBag.Message = "Nenhum produto encontrado!";
            }

            bool produtoExcluido = _produtoService.DeletarProduto(id);

            if (!produtoExcluido)
            {
                throw new Exception("Erro ao excluir produto");
            }

            ViewBag.Message = "";

            return RedirectToAction("Index", new { Categoria });
        }

        public async Task<IActionResult> Editar(int id, string Categoria, Produto produto)
        {
            Produto produtoExistente = _produtoService.ObterProdutoPorId(id);

            if (produtoExistente == null)
            {
                ViewBag.Message = "Nenhum produto encontrado!";
                return RedirectToAction("Index", new { Categoria });
            }
            if(produto.IdProduto != 0)
            {
                ViewBag.Message = "Produto Atualizado com sucesso!";
                return View(_produtoService.AtualizarProduto(produto));
            }          

            return View(produtoExistente);
        }

        public string SalvarImagem(IFormFile arquivo, string categoria)
        {
            try
            {
                string wwwPath = this.Environment.WebRootPath;
                string contentPath = this.Environment.ContentRootPath;

                string path = Path.Combine(this.Environment.WebRootPath, @"\images\");
                path = Path.Combine(path, categoria);
                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }

                string fileName = Path.GetFileName(arquivo.FileName);
                using (FileStream stream = new FileStream(Path.Combine(path, fileName), FileMode.Create))
                {
                    arquivo.CopyTo(stream);
                }

                return path + fileName;
            }
            catch (Exception ex)
            {
                return "";
            }
        }

    }
}
