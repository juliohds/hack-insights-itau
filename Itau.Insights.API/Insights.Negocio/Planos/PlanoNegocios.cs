 using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Insights.Infraestrutura.EDMX;
using Insights.Dados.Planos;

namespace Insights.Negocio.Planos
{
    public class PlanoNegocios : IPlanoNegocios
    {
        #region ATRIBUTOS E CONSTRUTOR
        private PlanoDados planoDAO = null;

        /// <summary>
        /// Metodo contrutor
        /// </summary>
        /// <param name="_planoDAO"></param>
        public PlanoNegocios(PlanoDados _planoDAO)
        {
            this.planoDAO = _planoDAO;
        }
        #endregion

        public IList<Plano> BuscaPlanos()
        {
            return planoDAO.BuscaPlanos().ToList();
        }
    }
}
