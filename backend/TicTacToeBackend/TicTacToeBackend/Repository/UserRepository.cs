using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicTacToeBackend.Db;
using TicTacToeBackend.Entities;

namespace TicTacToeBackend.Repository
{
    public class UserRepository : BaseRepository<UserEntity>, IUserRepository
    {
        public UserRepository(MainDbContext context): base(context)
        {

        }

        public bool UserExists(string login)
        {
            var user = _context.Users.Where(x => x.Login == login).FirstOrDefault();
            return user != null;
        }
    }
}
