using TicTacToeBackend.Db;
using TicTacToeBackend.Repository;

namespace TicTacToeBackend.Factories
{
    public class RepositoryUofFactory : IRepositoryUofFactory
    {
        public IRepositoryUnitOfWork GetRepositoryUnitOfWork()
        {
            return new RepositoryUnitOfWork(new MainDbContext());
        }
    }
}
