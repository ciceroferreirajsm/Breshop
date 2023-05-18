using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Breshop.Models
{
    public class Relatorio
    {
        public int IdProduto { get; set; }

        public string Modelo { get; set; }

        public int Quantidade { get; set; }

        public DateTime DataPedido { get; set; }

    }
}
