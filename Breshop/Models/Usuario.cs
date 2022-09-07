using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Breshop.Models
{
    public class Usuario
    {
        [Key]
        public int IdUsuario { get; set; }

        public string Nome { get; set; }

        public string Email { get; set; }

        public double Celular { get; set; }

        public string CEP { get; set; }

        public string Endereco { get; set; }

    }
}
