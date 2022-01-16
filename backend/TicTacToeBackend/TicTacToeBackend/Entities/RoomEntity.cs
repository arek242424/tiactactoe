using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicTacToeBackend.Entities
{
    public class RoomEntity : BaseEntity
    {
        public Guid RoomId { get; set; }


        public IList<UserEntity> Users { get; set; } = new List<UserEntity>();
    }
}
