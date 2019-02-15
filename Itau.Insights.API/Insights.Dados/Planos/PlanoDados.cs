using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Insights.Infraestrutura.EDMX;
using System.Data.Entity;

namespace Insights.Dados.Planos
{
    public class PlanoDados : IPlanoDados
    {
        #region ATRIBUTOS E CONSTRUTOR
        private ItauDBEntities db = null;

        /// <summary>
        /// Metodo contrutor
        /// </summary>
        /// <param name="db"></param>
        public PlanoDados(ItauDBEntities _db)
        {
            this.db = _db;
        }
        #endregion

        #region PLANO
        /// <summary>
        /// Metodo responsavel por buscar todos os planos
        /// </summary>
        /// <returns></returns> 
        public IQueryable<Plano> BuscaPlanos()
        {
            return db.Planos;
        }

        /// <summary>
        /// Metodo responsavel por alterar o plano 
        /// </summary>
        /// <param name="plano"></param>
        public Plano AlterarPlano(Plano plano)
        {
            db.Entry<Plano>(plano).State = EntityState.Modified;
            db.SaveChanges();

            return plano;
        }

        /// <summary>
        /// Metodo responsavel por salvar o plano
        /// </summary>
        /// <param name="plano"></param>
        public Plano SalvarPlano(Plano plano)
        {
            this.db.Planos.Add(plano);
            db.SaveChanges();

            return plano;
        }
        #endregion
    }
}
