using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Breshop.Models;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using System;
using Breshop.Interfaces;

namespace Breshop.Controllers
{
    public class CadastrarProdutosController : BaseController
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
                if (_usuarioAutenticado)
                {
                    ViewData["RETORNO"] = _usuarioAutenticado;
                    ViewData["ISADMIN"] = _IsAdmin;
                    ViewData["IDUSUARIO"] = _IdUsuario;

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

                return RedirectToAction("Index", "Login");
            }
            catch (Exception ex)
            {
                ViewBag.Message = ex.Message;
                return View();
            }
        }

        public async Task<IActionResult> Criar(Produto produto)
        {
            try
            {
                if (_usuarioAutenticado)
                {
                    ViewData["RETORNO"] = _usuarioAutenticado;
                    ViewData["ISADMIN"] = _IsAdmin;
                    ViewData["IDUSUARIO"] = _IdUsuario;

                    if (string.IsNullOrWhiteSpace(produto.Marca))
                    {
                        return View(produto);
                    }

                    if (SalvarImagem(produto.Imagem) == "")
                    {
                        ViewBag.Message = "Tipo da imagem não suportado! Somente jpg, png e jpeg";
                    }

                    produto.UrlImagem = SalvarImagem(produto.Imagem);

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

                return RedirectToAction("Index", "Login");
            }
            catch (Exception ex)
            {
                ViewBag.Message = ex.Message;
                return View();
            }
        }

        public async Task<IActionResult> Deletar(int id, string Categoria)
        {
            try
            {
                if (_usuarioAutenticado)
                {
                    ViewData["RETORNO"] = _usuarioAutenticado;
                    ViewData["ISADMIN"] = _IsAdmin;
                    ViewData["IDUSUARIO"] = _IdUsuario;
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

                return RedirectToAction("Index", "Login");
            }
            catch (Exception ex)
            {
                ViewBag.Message = ex.Message;
                return View();
            }
        }

        public async Task<IActionResult> Editar(int id, string Categoria, Produto produto)
        {
            try
            {
                if (_usuarioAutenticado)
                {
                    ViewData["RETORNO"] = _usuarioAutenticado;
                    ViewData["ISADMIN"] = _IsAdmin;
                    ViewData["IDUSUARIO"] = _IdUsuario;
                    Produto produtoExistente = _produtoService.ObterProdutoPorId(id);

                    if (produtoExistente == null)
                    {
                        ViewBag.Message = "Nenhum produto encontrado!";
                        return RedirectToAction("Index", new { Categoria });
                    }
                    if (produto.IdProduto != 0)
                    {
                        produto.UrlImagem = produtoExistente.UrlImagem;

                        if (produto.Imagem != null)
                            produto.UrlImagem = SalvarImagem(produto.Imagem);

                        ViewBag.Message = "Produto Atualizado com sucesso!";
                        return View(_produtoService.AtualizarProduto(produto));
                    }

                    return View(produtoExistente);
                }

                return RedirectToAction("Index", "Login");
            }
            catch (Exception ex)
            {
                ViewBag.Message = ex.Message;
                return View();
            }
        }

        private string SalvarImagem(IFormFile arquivo)
        {
            try
            {
                string path = this.Environment.WebRootPath + @"\images\";

                if (arquivo != null && (arquivo.ContentType == "image/jpg" || arquivo.ContentType == "image/png" || arquivo.ContentType == "image/jpeg"))
                {
                    string wwwPath = this.Environment.WebRootPath;
                    string contentPath = this.Environment.ContentRootPath;

                    path = Path.Combine(path, "Produtos");
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }

                    string fileName = Path.GetFileName(arquivo.FileName);
                    using (FileStream stream = new FileStream(Path.Combine(path, fileName), FileMode.Create))
                    {
                        arquivo.CopyTo(stream);
                    }

                    path = @"/images/Produtos/" + fileName;

                    return path;
                }

                return "";
            }
            catch (Exception ex)
            {
                return "";
            }
        }
    }
}
