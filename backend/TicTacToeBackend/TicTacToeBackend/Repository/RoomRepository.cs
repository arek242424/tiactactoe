using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicTacToeBackend.Db;
using TicTacToeBackend.Entities;

namespace TicTacToeBackend.Repository
{
    public class RoomRepository: BaseRepository<RoomEntity>, IRoomRepository 
    {        
        public RoomRepository(MainDbContext context): base(context)
        {            
        }

    }
}
