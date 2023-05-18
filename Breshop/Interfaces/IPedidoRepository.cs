using Breshop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Breshop.Interfaces
{
    public interface IPedidoRepository
    {
        List<Pedido> ObterListaPedidos(int idUsuario);

        Task<Pedido> FinalizarPedido(int idUsuario, int idCarrinho);

        Task<Pedido> ObterPedidoPorCarrinho(int idCarrinho);
    }
}
