using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Insights.Infraestrutura.EDMX;

namespace Insights.Negocio.Planos
{
    public interface IPlanoNegocios
    {
        IList<Plano> BuscaPlanos();
    }
}
