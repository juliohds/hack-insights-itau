using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Insights.Infraestrutura.EDMX;
using System.Data.Entity;

namespace Insights.Dados.Locais
{
    public class LocalDados : ILocalDados
    {
        #region ATRIBUTOS E CONSTRUTOR
        private ItauDBEntities db = null;

        /// <summary>
        /// Metodo contrutor
        /// </summary>
        /// <param name="db"></param>
        public LocalDados(ItauDBEntities _db)
        {
            this.db = _db;
        }
        #endregion

        #region LOCAL
        /// <summary>
        /// Metodo responsavel por buscar todos os locais
        /// </summary>
        /// <returns></returns> 
        public IQueryable<Local> BuscaLocais()
        {
            return db.Locais;
        }

        /// <summary>
        /// Metodo responsavel por alterar o local 
        /// </summary>
        /// <param name="local"></param>
        public Local AlterarLocal(Local local)
        {
            db.Entry<Local>(local).State = EntityState.Modified;
            db.SaveChanges();

            return local;
        }

        /// <summary>
        /// Metodo responsavel por salvar o local
        /// </summary>
        /// <param name="local"></param>
        public Local SalvarLocal(Local local)
        {
            this.db.Locais.Add(local);
            db.SaveChanges();

            return local;
        }
        #endregion
    }
}
