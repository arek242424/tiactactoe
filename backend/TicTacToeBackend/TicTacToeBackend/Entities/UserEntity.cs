using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicTacToeBackend.Entities
{
    public class UserEntity : BaseEntity
    {
        public string Login { get; set; }
        public IList<RoomEntity> Rooms { get; set; } = new List<RoomEntity>();
    }
}
