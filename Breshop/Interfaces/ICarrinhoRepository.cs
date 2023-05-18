using Breshop.Models;
using System.Collections.Generic;

namespace Breshop.Interfaces
{
    public interface ICarrinhoRepository
    {
        Carrinho CriarCarrinho(int IdUsuario);

        void AtualizarCarrinho(int idCarrinho, int idCarrinhoProduto);

        Carrinho ObterCarrinhoPorId(int idCarrinho);
        Carrinho ObterCarrinhoPorIdRelatorio(int idCarrinho);

        Carrinho ObterCarrinhoPorIdUsuario(int IdUsuario);

        void FinalizarCarrinho(Carrinho carrinho);

    }
}
