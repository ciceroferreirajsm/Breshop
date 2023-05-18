using Breshop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Breshop.Interfaces
{
    public interface IProdutoService
    {
        bool AdicionarProduto(Produto produto);

        Produto AtualizarProduto(Produto produto);

        bool DeletarProduto(int Idproduto);

        List<Produto> ObterListaProdutosPorCategoria(string Categoria);

        List<Produto> ListarProdutos();

        Produto ObterProdutoPorId(int id);
    }
}
