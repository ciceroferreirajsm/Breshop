using Breshop.Interfaces;
using Breshop.Models;
using System;

namespace Breshop.Services
{
    public class CarrinhoService : ICarrinhoService
    {
        private readonly ICarrinhoRepository _carrinhoRepository;
        private readonly IProdutoRepository _produtoRepository;

        public CarrinhoService(ICarrinhoRepository carrinhoRepository, IProdutoRepository produtoRepository)
        {
            _carrinhoRepository = carrinhoRepository;
            _produtoRepository = produtoRepository;
        }

        public void AtualizarCarrinho(int idCarrinho, int idCarrinhoProduto)
        {
            try
            {
                _carrinhoRepository.AtualizarCarrinho(idCarrinho, idCarrinhoProduto);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Carrinho CriarCarrinho(int IdUsuario)
        {
            try
            {
                return _carrinhoRepository.CriarCarrinho(IdUsuario);
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public Carrinho ObterCarrinhoPorId(int idCarrinho)
        {
            try
            {
                return _carrinhoRepository.ObterCarrinhoPorId(idCarrinho);
            }
            catch (Exception ex)
            {
                return new Carrinho();
            }
        }

        public Carrinho ObterCarrinhoPorIdRelatorio(int idCarrinho)
        {
            try
            {
                return _carrinhoRepository.ObterCarrinhoPorIdRelatorio(idCarrinho);
            }
            catch (Exception ex)
            {
                return new Carrinho();
            }
        }

        public Carrinho ObterCarrinhoPorIdUsuario(int IdUsuario)
        {
            try
            {
                return _carrinhoRepository.ObterCarrinhoPorIdUsuario(IdUsuario);
            }
            catch (Exception ex)
            {
                return new Carrinho();
            }
        }

        public void FinalizarCarrinho(Carrinho carrrinho)
        {
            try
            {
                _carrinhoRepository.FinalizarCarrinho(carrrinho);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
