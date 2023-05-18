using Breshop.Models;
using System.Collections.Generic;

namespace Breshop.Interfaces
{
    public interface ICarrinhoProdutoService
    {
        bool AdicionarNoCarrinho(int produto, int usuario, int QtdProduto);

        List<Produto> ListarProdutosCarrinho(int IdCarrinhoProduto, int IdCarrinho);

        bool RemoverProdutoDoCarrinho(int produto, int usuario);
    }
}
