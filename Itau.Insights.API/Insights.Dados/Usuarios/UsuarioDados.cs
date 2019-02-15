using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Insights.Infraestrutura.EDMX;
using System.Data.Entity;

namespace Insights.Dados.Usuarios
{
    public class UsuarioDados : IUsuarioDados
    {
        #region ATRIBUTOS E CONSTRUTOR
        private ItauDBEntities db = null;

        /// <summary>
        /// Metodo contrutor
        /// </summary>
        /// <param name="db"></param>
        public UsuarioDados(ItauDBEntities _db)
        {
            this.db = _db;
        }
        #endregion

        #region USUARIO
        /// <summary>
        /// Metodo responsavel por buscar todos usuarios
        /// </summary>
        public IQueryable<Usuario> BuscaUsuarios()
        {
            return db.Usuarios;
        }

        /// <summary>
        /// Metodo responsavel por alterar o usuario 
        /// </summary>
        /// <param name="usuario"></param>
        public Usuario AlterarUsuario(Usuario usuario)
        {
            db.Entry<Usuario>(usuario).State = EntityState.Modified;
            db.SaveChanges();

            return usuario;
        }

        /// <summary>
        /// Metodo responsavel por salvar o usuario
        /// </summary>
        /// <param name="usuario"></param>
        public Usuario SalvarUsuario(Usuario usuario)
        {
            this.db.Usuarios.Add(usuario);
            db.SaveChanges();

            return usuario;
        }
        #endregion
    }
}
