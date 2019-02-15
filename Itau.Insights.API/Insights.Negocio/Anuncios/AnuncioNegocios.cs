using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Insights.Dados.Anuncios;
using Insights.Infraestrutura.EDMX;

namespace Insights.Negocio.Anuncios
{
    public class AnuncioNegocios : IAnuncioNegocios
    {
        #region ATRIBUTOS E CONSTRUTOR
        private AnuncioDados anuncioDAO = null;

        /// <summary>
        /// Metodo contrutor
        /// </summary>
        /// <param name="anuncioDAO"></param>
        public AnuncioNegocios(AnuncioDados _anuncioDAO)
        {
            this.anuncioDAO = _anuncioDAO;
        }
        #endregion

        public IList<Anuncio> BuscaAnuncios(int codUsuario)
        {
            return anuncioDAO.BuscaAnuncios().Where(x => x.codUsuario == codUsuario).ToList();
        }

        public IList<AnuncioHistorico> BuscaAnuncioHistoricos(int codAnuncio)
        {
            return anuncioDAO.BuscaAnuncios().Where(x => x.codAnuncio == codAnuncio).Select(y => y.AnuncioHistoricos).Cast<AnuncioHistorico>().ToList();
        }
    }
}
