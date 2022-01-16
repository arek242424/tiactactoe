using TicTacToeBackend.Repository;

namespace TicTacToeBackend.Factories
{
    public interface IRepositoryUofFactory
    {

        IRepositoryUnitOfWork GetRepositoryUnitOfWork();
    }
}
