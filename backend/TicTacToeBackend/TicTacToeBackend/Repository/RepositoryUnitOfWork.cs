using System;
using TicTacToeBackend.Db;

namespace TicTacToeBackend.Repository
{
    public class RepositoryUnitOfWork : IRepositoryUnitOfWork
    {
        private MainDbContext _context;
        public RepositoryUnitOfWork(MainDbContext context)
        {
            _context = context;
        }

        public Lazy<IRoomRepository> RoomRepository => new Lazy<IRoomRepository>(() => new RoomRepository(_context));
        public Lazy<IUserRepository> UserRepository => new Lazy<IUserRepository>(() => new UserRepository(_context));

        public void Dispose()
        {
            if(_context != null)
            {
                _context.Dispose();
            }
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
