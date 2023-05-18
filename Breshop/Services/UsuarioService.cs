using Breshop.Interfaces;
using Breshop.Models;
using System;
using System.Security.Cryptography;
using System.Text;

namespace Breshop.Services
{
    public class UsuarioService: IUsuarioService
    {
        private readonly IUsuarioRepository _usuarioRepository;
        private Usuario retornoUsuario;

        public UsuarioService(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        public Usuario ValidaCredenciais(Usuario usuario)
        {
            try
            {
                var retornoHash = RetornarMD5(usuario.Senha);
                retornoUsuario = _usuarioRepository.ObterCredenciais(usuario.Email);

                if(retornoUsuario != null && retornoUsuario.Senha == retornoHash)
                {
                    return retornoUsuario;
                }

                return null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Usuario AdicionarUsuario(Usuario usuario)
        {
            try
            {
                if(_usuarioRepository.ObterCredenciais(usuario.Email) != null)
                    throw new Exception("e-mail ja cadastrado, faça login");

                usuario.Senha = RetornarMD5(usuario.Senha);
                retornoUsuario = _usuarioRepository.AdicionarUsuario(usuario);
                return retornoUsuario;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Usuario ObterPorId(int IdUsuario)
        {
            try
            {
                return _usuarioRepository.ObterPorId(IdUsuario);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int SetarUsuarioLogado()
        {
            try
            {
                return retornoUsuario.IdUsuario;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }

        private string RetornarMD5(string Senha)
        {
            using (MD5 md5Hash = MD5.Create())
            {
                return RetonarHash(md5Hash, Senha);
            }
        }

        private bool ComparaMD5(string senhabanco, string Senha_MD5)
        {
            using (MD5 md5Hash = MD5.Create())
            {
                var senha = RetornarMD5(senhabanco);
                if (VerificarHash(Senha_MD5, senha))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        private string RetonarHash(MD5 md5Hash, string input)
        {
            byte[] data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes(input));

            StringBuilder sBuilder = new StringBuilder();

            for (int i = 0; i < data.Length; i++)
            {
                sBuilder.Append(data[i].ToString("x2"));
            }

            return sBuilder.ToString();
        }

        private bool VerificarHash(string input, string hash)
        {
            StringComparer compara = StringComparer.OrdinalIgnoreCase;

            if (0 == compara.Compare(input, hash))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
