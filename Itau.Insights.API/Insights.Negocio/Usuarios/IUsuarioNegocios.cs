using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Insights.Negocio.Usuarios
{
    public interface IUsuarioNegocios
    {
        bool AutenticaUsuario(string email, string senha);
    }
}
