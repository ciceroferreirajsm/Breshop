using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Breshop.Models
{
    public class Produto
    {
        [Key]
        public int IdProduto { get; set; }

        public string Descricao { get; set; }

        public string Tamanho { get; set; }

        public double Preco { get; set; }

        public string Marca { get; set; }

        public string Sexo { get; set; }

        public string Categoria { get; set; }

        public string UrlImagem { get; set; }
    }
}
