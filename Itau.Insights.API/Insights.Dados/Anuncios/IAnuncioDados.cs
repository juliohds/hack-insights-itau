using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Insights.Infraestrutura.EDMX;

namespace Insights.Dados.Anuncios
{
    public interface IAnuncioDados
    {
        IQueryable<Anuncio> BuscaAnuncios();

        Anuncio AlterarAnuncio(Anuncio anuncio);

        Anuncio SalvarAnuncio(Anuncio anuncio);
    }
}
