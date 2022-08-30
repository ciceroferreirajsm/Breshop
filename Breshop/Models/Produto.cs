using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Breshop.Models
{
    public class Produto
    {
        public int Id { get; set; }

        public string Tamanho { get; set; }

        public double Preco { get; set; }

        public string Marca { get; set; }

        public string Sexo { get; set; }
    }
}
