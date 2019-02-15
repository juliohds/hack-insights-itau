using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Insights.Infraestrutura.EDMX;

namespace Insights.Dados.Locais
{
    public interface ILocalDados
    {
        IQueryable<Local> BuscaLocais();

        Local AlterarLocal(Local local);

        Local SalvarLocal(Local local);
    }
}
