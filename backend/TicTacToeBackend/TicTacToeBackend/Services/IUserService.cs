using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using TicTacToeBackend.DtoModels;

namespace TicTacToeBackend.Services
{
    public interface IUserService
    {
        UserDto AddUser(UserDto user);
        IList<UserDto> GetUserList();
    }
}
