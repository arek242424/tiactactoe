using Microsoft.AspNetCore.Mvc;
using System;
using TicTacToeBackend.DtoModels;
using TicTacToeBackend.Exceptions;
using TicTacToeBackend.Models;
using TicTacToeBackend.Services;

namespace TicTacToeBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class UserController
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]        
        public IActionResult AddUser([FromBody] UserDto user)
        {
            HttpResponseContentObject responseObject = new HttpResponseContentObject();

            try
            {
                var userToReturn = _userService.AddUser(user);
                responseObject.data = userToReturn;
                return new OkObjectResult(responseObject);

            }catch(UserExistsException exc)
            {
                responseObject.Message = "User login already exists";
                responseObject.data = user;
                return new BadRequestObjectResult(responseObject);
            }
            catch(Exception exc)
            {
                responseObject.Message = $"Erro while adding user {user.Login}";
                return new ObjectResult(responseObject) { StatusCode = 500};                    
            }
        }

        [HttpGet]
        public IActionResult GetUserList()
        {
            HttpResponseContentObject responseObject = new HttpResponseContentObject();

            try
            {
                var users = _userService.GetUserList();
                responseObject.data = users;
                return new OkObjectResult(responseObject);
            }
            catch(Exception exc)
            {
                responseObject.data = null;
                responseObject.Message = exc.Message;
                return new ObjectResult(responseObject){ StatusCode = 500 };
            }
        }
    }
}
