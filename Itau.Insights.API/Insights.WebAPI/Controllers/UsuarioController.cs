using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Insights.Negocio.Usuarios;
using Insights.Infraestrutura.EDMX;

namespace Insights.WebAPI.Controllers
{
    public class UsuarioController : ApiController
    {
        IUsuarioNegocios usuarioBO = null;

        public UsuarioController(IUsuarioNegocios _usuarioBO)
        {
            this.usuarioBO = _usuarioBO;
        }

        [HttpGet]
        [ActionName("BuscaUsuario")]
        public HttpResponseMessage GetBuscaUsuario(string email, string senha)
        {
            try
            {
                var autenticaUsuario = usuarioBO.AutenticaUsuario(email, senha);

                return Request.CreateResponse(HttpStatusCode.OK, new { acesso = autenticaUsuario });
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadGateway, new { erro = "Ocorreu um erro ao efetuar sua solicitação. Ex: " + e.ToString() });
            }
        }
    }
}
