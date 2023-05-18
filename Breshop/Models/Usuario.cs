using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Breshop.Models
{
    public class Usuario
    {
        [Key]
        [Column("CD_USUARIO")]
        public int IdUsuario { get; set; }

        [Column("NM_USUARIO")]
        public string Nome { get; set; }

        [Column("DS_TELEFONE")]
        public string Telefone { get; set; }

        [Column("DS_CEP")]
        public string Cep { get; set; }

        [Column("DS_ENDERECO")]
        public string Endereco { get; set; }

        [Column("DS_EMAIL")]
        public string Email { get; set; }

        [Column("DS_SENHA")]
        public string Senha { get; set; }


        [Column("IC_ADMIN")]
        public bool IsAdmin { get; set; }

    }
}
