using TicTacToeBackend.Entities;

namespace TicTacToeBackend.Repository
{
    public interface IUserRepository : IBaseRepository<UserEntity>
    {
        bool UserExists(string login);

    }
}
