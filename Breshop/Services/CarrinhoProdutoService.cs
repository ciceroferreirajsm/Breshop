using Breshop.Interfaces;
using Breshop.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Breshop.Services
{
    public class CarrinhoProdutoService : ICarrinhoProdutoService
    {
        private readonly ICarrinhoService _carrrinhoService;
        private readonly ICarrinhoProdutoRepository _carrinhoProdutoRepository;
        private readonly IProdutoService _produtoService;
        private readonly IPedidoService _pedidoService;

        public CarrinhoProdutoService(ICarrinhoService carrrinhoService, IProdutoService produtoService, ICarrinhoProdutoRepository carrinhoProdutoRepository, IPedidoService pedidoService)
        {
            _carrrinhoService = carrrinhoService;
            _carrinhoProdutoRepository = carrinhoProdutoRepository;
            _produtoService = produtoService;
            _pedidoService = pedidoService;
        }

        public bool AdicionarNoCarrinho(int idProduto, int IdUsuario, int QtdProduto)
        {
            try
            {
                if (idProduto != 0 && IdUsuario != 0)
                {
                    if (QtdProduto == 0)
                        QtdProduto = 1;

                    var carrinho = _carrrinhoService.ObterCarrinhoPorIdUsuario(IdUsuario);
                    var produto = _produtoService.ObterProdutoPorId(idProduto);
                    var carrinhoProduto = _carrinhoProdutoRepository.ObterCarrinhoProdutoPorIdCarrinho(carrinho.IdCarrinho, produto.IdProduto);
                    
                    if (carrinhoProduto != null)
                    {
                        carrinhoProduto.QtdProduto += QtdProduto;
                        _carrinhoProdutoRepository.AtualizarDoCarrinhoProduto(carrinhoProduto);
                    }
                    else if (carrinho != null && carrinho.IdCarrinho != 0 && produto != null)
                    {
                        return AdicionarProdutoNoCarrinho(produto, carrinho, QtdProduto);
                    }
                    else
                    {
                        carrinho = _carrrinhoService.CriarCarrinho(IdUsuario);
                        var NewCarrinhoProduto = _carrinhoProdutoRepository.CriarCarrinhoProduto(carrinho.IdCarrinho, produto.IdProduto, QtdProduto);
                        _carrrinhoService.AtualizarCarrinho(carrinho.IdCarrinho, NewCarrinhoProduto.IdCarrinhoProduto);
                        return true;
                    }
                }

                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public List<Produto> ListarProdutosCarrinho(int IdCarrinhoProduto, int IdCarrinho)
        {
            try
            {
                if (IdCarrinho == 0)
                    return new List<Produto>();

                var carinhoProdutos = _carrinhoProdutoRepository.ObterListaProdutosCarrinho(IdCarrinhoProduto, IdCarrinho);
                var listaProdutos = new List<Produto>();
                if (carinhoProdutos != null)
                {
                    foreach (var item in carinhoProdutos)
                    {
                        var produto = _produtoService.ObterProdutoPorId(item.IdProduto);
                        produto.Quantidade = _pedidoService.ObterPedidoPorIdCarrinho(item.QtdProduto);
                        produto.Pedido = item.IdCarrinho;
                        listaProdutos.Add(produto);
                    }
                }

                //var result = listaProdutos.GroupBy(p => p.Descricao)
                //    .Select(g => new { IdProduto = g.Key, Quantidade = g.Sum(p => p.Quantidade) });

                //listaProdutos = result.Select(p => new Produto { Quantidade = p.Quantidade,
                //        Categoria
                //}).ToList();

                return listaProdutos;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool RemoverProdutoDoCarrinho(int idProduto, int IdUsuario)
        {
            try
            {
                if (idProduto != 0 && IdUsuario != 0)
                {
                    var carrinho = _carrrinhoService.ObterCarrinhoPorIdUsuario(IdUsuario);
                    var carrinhoProduto = _carrinhoProdutoRepository.ObterCarrinhoProdutoPorIdCarrinho(carrinho.IdCarrinho, idProduto);

                    if (carrinhoProduto != null && carrinhoProduto.QtdProduto > 1)
                        _carrinhoProdutoRepository.AtualizarDoCarrinhoProduto(carrinhoProduto);
                    else
                        _carrinhoProdutoRepository.RemoverDoCarrinhoProduto(carrinhoProduto);

                }

                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        private bool AdicionarProdutoNoCarrinho(Produto produto, Carrinho carrinho, int QtdProduto)
        {
            try
            {
                if (produto != null && carrinho != null)
                {
                    var newCarrinhoProduto = new CarrinhoProduto
                    {
                        IdProduto = produto.IdProduto,
                        IdCarrinho = carrinho.IdCarrinho,
                        QtdProduto = QtdProduto
                    };

                    return _carrinhoProdutoRepository.AdicionarNoCarrinhoProduto(newCarrinhoProduto);
                }

                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

    }
}
