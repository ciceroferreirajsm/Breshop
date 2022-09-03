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
    public class ProdutoController : Controller
    {
        private readonly BreshopContext _context;

        public ProdutoController(BreshopContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            //await _context.Produto.ToListAsync()
            return View();
        }

        public async Task<IActionResult> Calcado(int? id)
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

        public async Task<IActionResult> Feminino(int? id)
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

        public async Task<IActionResult> Infantil(int? id)
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

        public async Task<IActionResult> Ofertas(int? id)
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

        public async Task<IActionResult> Masculino(int? id)
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

        public async Task<IActionResult> Relogio(int? id)
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

        public IActionResult Error(int? id)
        {
            return NotFound();
        }
    }
}
