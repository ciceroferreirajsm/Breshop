using Breshop.Models;
using System.Collections.Generic;

namespace Breshop.Interfaces
{
    public interface ICarrinhoService
    {
        Carrinho CriarCarrinho(int IdUsuario);

        void AtualizarCarrinho(int idCarrinho, int idCarrinhoProduto);

        Carrinho ObterCarrinhoPorId(int idCarrinho);

        Carrinho ObterCarrinhoPorIdUsuario(int IdUsuario);

        Carrinho ObterCarrinhoPorIdRelatorio(int idCarrinho);

        void FinalizarCarrinho(Carrinho carrinho);
    }
}
