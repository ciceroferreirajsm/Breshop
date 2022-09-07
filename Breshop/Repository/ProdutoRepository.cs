using Breshop.Intefaces;
using Breshop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Breshop.Repository
{
    public class ProdutoRepository : IProdutoRepository
    {
        private readonly BreshopContext _context;

        public ProdutoRepository(BreshopContext context)
        {
            _context = context;
        }

        public bool AdicionarProduto(Produto novoProduto)
        {
            Produto produtoExistente = _context.Produto.FirstOrDefault(x => x.IdProduto == novoProduto.IdProduto);
            try
            {
                if (produtoExistente != null)
                {
                    produtoExistente = novoProduto;
                    _context.Produto.Add(novoProduto);
                    _context.SaveChanges();
                    return true;
                }

                return false;

            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool AtualizarProduto(Produto novoProduto)
        {
            Produto produtoExistente = _context.Produto.FirstOrDefault(x => x.IdProduto == novoProduto.IdProduto);

            try
            {
                if (produtoExistente != null)
                {
                    produtoExistente = novoProduto;
                    _context.Produto.Add(novoProduto);
                    _context.SaveChanges();

                    return true;
                }

                return false;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool DeletarProduto(int idProduto)
        {
            Produto produtoExistente = _context.Produto.FirstOrDefault(x => x.IdProduto == idProduto);

            try
            {
                if (produtoExistente != null)
                {
                    _context.Produto.RemoveRange(produtoExistente);
                    _context.SaveChanges();

                    return true;
                }

                return false;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public List<Produto> ObterListaProdutosPorCategoria(string Categoria)
        {
            List<Produto> produtos = new List<Produto>();

            try
            {
                produtos = _context.Produto.OrderBy(x => x.Categoria == Categoria).ToList();

                return produtos;
            }
            catch (Exception ex)
            {
                return produtos;
            }
        }
    }
}
