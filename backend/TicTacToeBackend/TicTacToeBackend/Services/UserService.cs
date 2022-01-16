using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using TicTacToeBackend.DtoModels;
using TicTacToeBackend.Entities;
using TicTacToeBackend.Exceptions;
using TicTacToeBackend.Factories;

namespace TicTacToeBackend.Services
{
    public class UserService : IUserService
    {
        private readonly IRepositoryUofFactory _repositoryFactory;
        private readonly IMapper _mapper;

        public UserService(IRepositoryUofFactory repositoryFactory, IMapper mapper)
        {
            _mapper = mapper;
            _repositoryFactory = repositoryFactory;
        }

        public UserDto AddUser(UserDto user)
        {
            UserEntity userEntity = _mapper.Map<UserEntity>(user);

            using (var repo = _repositoryFactory.GetRepositoryUnitOfWork())
            {
                if (repo.UserRepository.Value.UserExists(user.Login))
                {
                    throw new UserExistsException(user.Login, "User cannot be added. User login already exists");
                }

                repo.UserRepository.Value.Add(userEntity);
                repo.SaveChanges();
            }

            return _mapper.Map<UserDto>(userEntity);
        }

        public IList<UserDto> GetUserList()
        {
            IList<UserEntity> userList;

            using(var repo = _repositoryFactory.GetRepositoryUnitOfWork())
            {
                userList = repo.UserRepository.Value.GetAll();
            }

            var userDtoList = _mapper.Map<IList<UserDto>>(userList);
            return userDtoList;
        }
    }
}
