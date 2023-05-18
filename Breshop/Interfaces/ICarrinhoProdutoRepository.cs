using Breshop.Models;
using System.Collections.Generic;

namespace Breshop.Interfaces
{
    public interface ICarrinhoProdutoRepository
    {
        CarrinhoProduto ObterCarrinhoProdutoPorIdCarrinho(int IdCarrinho, int idProduto);
        List<CarrinhoProduto> ObterListaProdutosCarrinho(int idCarrinhoProduto, int idCarrinho);
        void RemoverDoCarrinhoProduto(CarrinhoProduto carrinhoProduto);
        CarrinhoProduto CriarCarrinhoProduto(int IdCarrinho, int IdProduto, int QtdProduto);
        bool AdicionarNoCarrinhoProduto(CarrinhoProduto CarrinhoProduto);

        void AtualizarDoCarrinhoProduto(CarrinhoProduto carrinhoProduto);

    }
}
