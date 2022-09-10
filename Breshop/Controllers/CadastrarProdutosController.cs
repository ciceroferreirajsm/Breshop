using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Breshop.Models;
using Breshop.Intefaces;

namespace Breshop.Controllers
{
    public class CadastrarProdutosController : Controller
    {
        private readonly IProdutoService _produtoService;

        public CadastrarProdutosController(IProdutoService produtoService)
        {
            _produtoService = produtoService;
        }

        public async Task<IActionResult> Index()
        {
            //await _context.Produto.ToListAsync()
            return View();
        }

        public async Task<IActionResult> Criar(Produto produto)
        {
            if (string.IsNullOrWhiteSpace(produto.Marca))
            {
                return View(produto);
            }

            bool produtoAdicionado = _produtoService.AdicionarProduto(produto);

            if (produtoAdicionado)
            {
                return View(produto);
            }
            else
            {
                produto = new Produto();
            }

            return View(produto);
        }

        public async Task<IActionResult> Deletar(int? id)
        {
            //if (id == null)
            //{
            //    return NotFound();
            //}

            //var produto = await _context.Produto
            //    .FirstOrDefaultAsync(m => m.IdProduto == id);
            //if (produto == null)
            //{
            //    return NotFound();
            //}

            return View();
        }

        public async Task<IActionResult> Editar(int? id)
        {
            //if (id == null)
            //{
            //    return NotFound();
            //}

            //var produto = await _context.Produto
            //    .FirstOrDefaultAsync(m => m.IdProduto == id);
            //if (produto == null)
            //{
            //    return NotFound();
            //}

            return View();
        }
    }
}
