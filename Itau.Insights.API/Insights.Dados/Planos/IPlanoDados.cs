using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Insights.Infraestrutura.EDMX;

namespace Insights.Dados.Planos
{
    public interface IPlanoDados
    {
        IQueryable<Plano> BuscaPlanos();

        Plano AlterarPlano(Plano plano);

        Plano SalvarPlano(Plano plano);
    }
}
