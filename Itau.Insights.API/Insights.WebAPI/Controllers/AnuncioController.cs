using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Insights.Negocio.Anuncios;
using Insights.Infraestrutura.EDMX;

namespace Insights.WebAPI.Controllers
{
    public class AnuncioController : ApiController
    {
        IAnuncioNegocios anuncioBO = null;

        public AnuncioController(IAnuncioNegocios _usuarioBO)
        {
            this.anuncioBO = _usuarioBO;
        }

        [HttpGet]
        [ActionName("BuscaAnuncios")]
        public HttpResponseMessage GetBuscaAnuncios(int codUsuario)
        {
            try
            {
                var listaAnuncios = anuncioBO.BuscaAnuncios(codUsuario);

                return Request.CreateResponse(HttpStatusCode.OK, listaAnuncios);
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadGateway, new { erro = "Ocorreu um erro ao efetuar sua solicitação. Ex: " + e.ToString() });
            }
        }

        [HttpGet]
        [ActionName("BuscaAnuncioHistoricos")]
        public HttpResponseMessage GetBuscaAnuncioHistoricos(int codAnuncio)
        {
            try
            {
                var listaAnuncioHistoricos = anuncioBO.BuscaAnuncioHistoricos(codAnuncio);

                return Request.CreateResponse(HttpStatusCode.OK, listaAnuncioHistoricos);
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadGateway, new { erro = "Ocorreu um erro ao efetuar sua solicitação. Ex: " + e.ToString() });
            }
        }
    }
}
