using Breshop.Interfaces;
using Breshop.Models;
using System;
using System.Linq;

namespace Breshop.Services
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly BreshopContext _context;

        public UsuarioRepository(BreshopContext context)
        {
            _context = context;
        }

        public Usuario ObterCredenciais(string email)
        {
            try
            {
                return _context.Usuario.FirstOrDefault(x => x.Email == email);
            }
            catch(Exception ex)
            {
                return new Usuario();
            }
        }

        public Usuario ObterPorId(int IdUsuario)
        {
            try
            {
                return _context.Usuario.FirstOrDefault(x => x.IdUsuario == IdUsuario);
            }
            catch
            {
                return new Usuario();
            }
        }

        public Usuario AdicionarUsuario(Usuario usuario)
        {
            try
            {
                var retorno = _context.Usuario.Add(usuario);
                _context.SaveChanges();
                return usuario;
            }
            catch (Exception ex)
            {
                return new Usuario();
            }
        }
    }
}
