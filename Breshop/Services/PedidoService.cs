using Breshop.Interfaces;
using Breshop.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Breshop.Services
{
    public class PedidoService : IPedidoService
    {
        private readonly IPedidoRepository _pedidoRepository;
        private readonly ICarrinhoService _carrinhoService;

        public PedidoService(IPedidoRepository pedidoRepository, ICarrinhoService carrinhoService)
        {
            _pedidoRepository = pedidoRepository;
            _carrinhoService = carrinhoService;
        }

        public List<Pedido> ObterListaPedidos(int idUsuario)
        {
            try
            {
                return _pedidoRepository.ObterListaPedidos(idUsuario);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<Pedido> FinalizarPedido(int idUsuario, int idCarrinho)
        {
            try
            {
                var carrinho = _carrinhoService.ObterCarrinhoPorId(idCarrinho);
                carrinho.CarrinhoDisponivel = false;
                _carrinhoService.FinalizarCarrinho(carrinho);
                return await _pedidoRepository.FinalizarPedido(idUsuario, idCarrinho);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int ObterPedidoPorIdCarrinho(int idCarrinho)
        {
            try
            {
                return _pedidoRepository.ObterPedidoPorCarrinho(idCarrinho).Id;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
