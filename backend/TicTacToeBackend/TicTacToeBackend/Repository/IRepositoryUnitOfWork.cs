using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicTacToeBackend.Repository
{
    public interface IRepositoryUnitOfWork : IDisposable
    {
        Lazy<IRoomRepository> RoomRepository { get; }
        Lazy<IUserRepository> UserRepository { get; }

        void SaveChanges();

    }
}
