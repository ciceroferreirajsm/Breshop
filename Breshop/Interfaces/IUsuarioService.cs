using Breshop.Models;

namespace Breshop.Interfaces
{
    public interface IUsuarioService
    {
        Usuario ValidaCredenciais(Usuario usuario);
        Usuario AdicionarUsuario(Usuario usuario);

        int SetarUsuarioLogado();

        Usuario ObterPorId(int IdUsuario);
    }
}
