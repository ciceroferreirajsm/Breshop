using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Breshop.Models
{
    public class CarrinhoProduto
    {
        [Key]
        [Column("CD_CARRINHO_PRODUTO")]
        public int IdCarrinhoProduto { get; set; }

        [Column("ID_CARRINHO")]
        public int IdCarrinho { get; set; }

        [Column("ID_PRODUTO")]
        public int IdProduto { get; set; }

        [Column("QT_PRODUTO")]
        public int QtdProduto { get; set; }
    }
}
