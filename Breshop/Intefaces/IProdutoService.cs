using Breshop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Breshop.Intefaces
{
    public interface IProdutoService
    {
        bool AdicionarProduto(Produto produto);

        bool AtualizarProduto(Produto produto);

        bool DeletarProduto(int Idproduto);

        List<Produto> ObterListaProdutosPorCategoria(string Categoria);
    }
}
