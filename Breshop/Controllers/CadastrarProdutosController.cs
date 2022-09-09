using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Breshop.Models;

namespace Breshop.Controllers
{
    public class CadastrarProdutosController : Controller
    {

        public async Task<IActionResult> Index()
        {
            //await _context.Produto.ToListAsync()
            return View();
        }

        public async Task<IActionResult> Criar(Produto produto)
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
