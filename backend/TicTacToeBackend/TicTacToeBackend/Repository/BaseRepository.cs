using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TicTacToeBackend.Db;
using TicTacToeBackend.Entities;

namespace TicTacToeBackend.Repository
{
    public class BaseRepository<Entity> : IBaseRepository<Entity> where Entity: BaseEntity
    {
        protected MainDbContext _context;
        public BaseRepository(MainDbContext context)
        {
            _context = context;
        }

        public void Add(Entity entity)
        {
            _context.Set<Entity>().Add(entity);            
        }

        public void Delete(int id)
        {
            Entity entity = Get(id);
            _context.Set<Entity>().Remove(entity);
        }

        public Entity Get(int id)
        {
            return _context.Set<Entity>().FirstOrDefault(e => e.Id == id);
        }

        public IList<Entity> GetAll()
        {
            return _context.Set<Entity>().ToList();
        }
    }
}
