using AutoMapper;
using Insights.ViewModel.DTO;
using Insights.Infraestrutura.EDMX;

namespace Insights.WebAPI.DTO
{
    public class ViewModelToDomainMappingProfile : Profile
    {
        public ViewModelToDomainMappingProfile()
        {
            CreateMap<UsuarioDTO, Usuario>();
        }

        public override string ProfileName
        {
            get { return "ViewModelToDomainMappings"; }
        }
    }
}