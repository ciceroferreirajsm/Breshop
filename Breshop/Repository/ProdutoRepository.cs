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
            Produto produtoExistente = _context.Produto.FirstOrDefault(x => x.IdProduto == novoProduto.IdProduto || x.Descricao == novoProduto.Descricao);
            try
            {
                if (produtoExistente == null)
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

        public Produto AtualizarProduto(Produto novoProduto)
        {
            Produto produtoExistente = _context.Produto.FirstOrDefault(x => x.IdProduto == novoProduto.IdProduto);

            try
            {
                if (produtoExistente != null)
                {
                    produtoExistente.Imagem = novoProduto.Imagem;
                    produtoExistente.Marca = novoProduto.Marca;
                    produtoExistente.Preco = novoProduto.Preco;
                    produtoExistente.Tamanho = novoProduto.Tamanho;
                    produtoExistente.UrlImagem = novoProduto.UrlImagem;
                    produtoExistente.Categoria = novoProduto.Categoria;
                    produtoExistente.Descricao = novoProduto.Descricao;

                    _context.Produto.Update(produtoExistente);
                    _context.SaveChanges();

                    return novoProduto;
                }

                return null;
            }
            catch (Exception ex)
            {
                return null;
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
                produtos = _context.Produto.Where(x => x.Categoria == Categoria).ToList();

                return produtos;
            }
            catch (Exception ex)
            {
                return produtos;
            }
        }
        public List<Produto> ListarProdutos()
        {
            List<Produto> produtos = new List<Produto>();

            try
            {
                produtos = _context.Produto.OrderBy(x => x.Categoria).ToList();

                return produtos;
            }
            catch (Exception ex)
            {
                return produtos;
            }
        }

        public Produto ObterProdutoPorId(int id)
        {
            try
            {
                Produto produto = new Produto();

                produto = _context.Produto.FirstOrDefault(x => x.IdProduto == id);

                return produto;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
