using Breshop.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Breshop.Interfaces
{
    public interface IPedidoService
    {
        List<Pedido> ObterListaPedidos(int idUsuario);
        Task<Pedido> FinalizarPedido(int idUsuario, int idCarrinho);
        int ObterPedidoPorIdCarrinho(int idCarrinho);
    }
}
