using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicTacToeBackend.Factories;

namespace TicTacToeBackend.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class RoomController : ControllerBase
    {

        public RoomController(IRepositoryUofFactory repositoryUofFactory)
        {
            string ss = "";
        }

        [HttpGet]
        public void get()
        {
            string ss = "";
        }


    }
}
