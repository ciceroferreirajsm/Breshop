using Breshop.Intefaces;
using Breshop.Models;
using Breshop.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Breshop.Services
{
    public class ProdutoService : IProdutoService
    {
        private readonly IProdutoRepository _produtoRepository;

        public ProdutoService(IProdutoRepository produtoRepository)
        {
            _produtoRepository = produtoRepository;
        }

        public bool AdicionarProduto(Produto produto)
        {
            try
            {
                bool produtoAdicionado = _produtoRepository.AdicionarProduto(produto);

                return produtoAdicionado;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool AtualizarProduto(Produto produto)
        {
            try
            {
                bool produtoAdicionado = _produtoRepository.AtualizarProduto(produto);

                return produtoAdicionado;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool DeletarProduto(int Idproduto)
        {
            try
            {
                bool produtoDeletado = _produtoRepository.DeletarProduto(Idproduto);

                return produtoDeletado;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<Produto> ObterListaProdutosPorCategoria(string Categoria)
        {
            try
            {
                List<Produto> produtos = _produtoRepository.ObterListaProdutosPorCategoria(Categoria);

                return produtos;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<Produto> ListarProdutos()
        {
            try
            {
                List<Produto> produtos = _produtoRepository.ListarProdutos();

                return produtos;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
