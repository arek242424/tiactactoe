using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TicTacToeBackend.Entities;

namespace TicTacToeBackend.EntitieConfigurations
{
    public class RoomEntityConfiguration : IEntityTypeConfiguration<RoomEntity>
    {
        public void Configure(EntityTypeBuilder<RoomEntity> builder)
        {
            builder.HasKey(k => k.Id);
            builder.ToTable("Rooms");
            builder.Property(p => p.RoomId).HasColumnName("roomId");
            builder.Property(p => p.Id).HasColumnName("id");

            builder.HasMany(p => p.Users).WithMany(p => p.Rooms);
        }
    }
}
