using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Unity;
using Unity.Lifetime;
using Unity.Injection;
using Insights.Infraestrutura.EDMX;
using Insights.Dados.Usuarios;
using Insights.Negocio.Usuarios;
using Insights.Dados.Anuncios;
using Insights.Negocio.Anuncios;

namespace Insights.WebAPI.IOC
{
    /// <summary>
    /// Classe responsavel por configurar a IoC para a API
    /// </summary>
    public class ConfigureIoC
    {
        UnityContainer container = null;

        /// <summary>
        /// Construtor padrao
        /// </summary>
        public ConfigureIoC()
        {
            container = new UnityContainer();
        }

        /// <summary>
        /// Metodo qu realizas as configuracoes principais
        /// </summary>
        /// <returns></returns>
        public UnityContainer register()
        {
            this.regiterDB();
            this.registerDependencies();

            return container;
        }

        /// <summary>
        /// Metodo que regista a classe que representa o banco
        /// </summary>
        private void regiterDB()
        {
            container.RegisterType<Insights.Infraestrutura.EDMX.ItauDBEntities>(new HierarchicalLifetimeManager(),
                                            new InjectionFactory(c =>
                                            {
                                                return new ItauDBEntities();
                                            })
                                        );
        }

        /// <summary>
        /// Metodo que registra todas as dependencias
        /// </summary>
        private void registerDependencies()
        {
            container.RegisterType<IUsuarioNegocios, UsuarioNegocios>(new HierarchicalLifetimeManager());
            container.RegisterType<IUsuarioDados, UsuarioDados>(new HierarchicalLifetimeManager());

            container.RegisterType<IAnuncioNegocios, AnuncioNegocios>(new HierarchicalLifetimeManager());
            container.RegisterType<IAnuncioDados, AnuncioDados>(new HierarchicalLifetimeManager());
        }
    }
}