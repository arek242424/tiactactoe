using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicTacToeBackend.DtoModels;
using TicTacToeBackend.Entities;

namespace TicTacToeBackend.Profiles
{
    public class EntityDtoProfile : Profile
    {
        public EntityDtoProfile()
        {
            CreateMap<UserEntity, UserDto>().ReverseMap();
        }

        
    }
}
