using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Breshop.Models
{
    public class Carrinho
    {
        [Key]
        [Column("CD_CARRINHO")]
        public int IdCarrinho { get; set; }

        [Column("ID_USUARIO")]
        public int IdUsuario { get; set; }

        [Column("CD_CARRINHO_PRODUTO")]
        public int IdProdutoCarrinho { get; set; }

        [Column("IC_CARRINHO_DISPONIVEL")]
        public bool CarrinhoDisponivel { get; set; }
    }
}
