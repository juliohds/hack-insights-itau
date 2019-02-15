using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Insights.Infraestrutura.EDMX;

namespace Insights.Dados.Usuarios
{
    public interface IUsuarioDados
    {
        IQueryable<Usuario> BuscaUsuarios();

        Usuario AlterarUsuario(Usuario usuario);

        Usuario SalvarUsuario(Usuario usuario);
    }
}
