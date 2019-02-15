using Insights.WebAPI.IOC;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Insights.WebAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Serviços e configuração da API da Web

            // Rotas da API da Web
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            AutoMapperConfig.RegisterMappings();

            //Configura a IoC
            config.DependencyResolver = new UnityResolver(new ConfigureIoC().register());
        }
    }
}
