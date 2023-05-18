using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Breshop.Models
{
    public class Pedido
    {
        [Key]
        [Column("CD_PEDIDO")]
        public int IdPedido { get; set; }

        [Column("CD_CARRINHO")]
        public int IdCarrinho { get; set; }

        [Column("IC_USUARIO")]
        public int IdUsuario { get; set; }

        [Column("DT_PEDIDO")]
        public DateTime DataPedido { get; set; }
    }
}
