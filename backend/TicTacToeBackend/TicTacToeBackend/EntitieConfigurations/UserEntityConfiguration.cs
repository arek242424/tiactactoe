using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TicTacToeBackend.Entities;
using System.Linq;

namespace TicTacToeBackend.EntitieConfigurations
{
    public class UserEntityConfiguration : IEntityTypeConfiguration<UserEntity>
    {
        public void Configure(EntityTypeBuilder<UserEntity> builder)
        {
            builder.HasKey(k => k.Id);
            builder.ToTable("Users");
            builder.Property(p => p.Login).HasColumnName("login");

            builder.HasMany(p => p.Rooms).WithMany(p => p.Users);
        }
    }
}
