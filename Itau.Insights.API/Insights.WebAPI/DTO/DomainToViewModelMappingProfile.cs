using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using Insights.ViewModel.DTO;
using Insights.Infraestrutura.EDMX;

namespace Insights.WebAPI.DTO
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            CreateMap<Usuario, UsuarioDTO>();
        }

        public override string ProfileName
        {
            get { return "DomainToViewModelMappings"; }
        }
    }
}