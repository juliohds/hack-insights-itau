using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Insights.Infraestrutura.EDMX;
using Insights.Dados.Usuarios;

namespace Insights.Negocio.Usuarios
{
    public class UsuarioNegocios : IUsuarioNegocios
    {
        #region ATRIBUTOS E CONSTRUTOR
        private UsuarioDados usuarioDAO = null;

        /// <summary>
        /// Metodo contrutor
        /// </summary>
        /// <param name="_usuarioDAO"></param>
        public UsuarioNegocios(UsuarioDados _usuarioDAO)
        {
            this.usuarioDAO = _usuarioDAO;
        }
        #endregion

        #region USUARIO
        public bool AutenticaUsuario(string email, string senha)
        {
            return usuarioDAO.BuscaUsuarios().Any(x => x.email.Equals(email) && x.senha.Equals(senha) && x.ativo == true);
        }
        #endregion
    }
}
