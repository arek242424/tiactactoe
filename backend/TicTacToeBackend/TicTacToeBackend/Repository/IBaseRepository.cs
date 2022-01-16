using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicTacToeBackend.Repository
{
    public interface IBaseRepository<Entity>
    {
        Entity Get(int id);
        IList<Entity> GetAll();
        void Add(Entity entity);
        void Delete(int id);
    }
}
