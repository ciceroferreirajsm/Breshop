using Breshop.Models;

namespace Breshop.Interfaces
{
    public interface IUsuarioRepository
    {
        Usuario ObterCredenciais(string email);

        Usuario ObterPorId(int IdUsuario);

        Usuario AdicionarUsuario(Usuario usuario);
    }
}
