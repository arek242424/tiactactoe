using Microsoft.EntityFrameworkCore;
using TicTacToeBackend.EntitieConfigurations;
using TicTacToeBackend.Entities;

namespace TicTacToeBackend.Db
{
    public class MainDbContext : DbContext
    {
        public MainDbContext(): base()
        {
            Database.EnsureCreated();
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {            
            optionsBuilder.UseSqlite("DataSource=maindb.db;");
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(RoomEntityConfiguration).Assembly);
        }


        public DbSet<RoomEntity> Rooms { get; set; }
        public DbSet<UserEntity> Users { get; set; }

    }
}
