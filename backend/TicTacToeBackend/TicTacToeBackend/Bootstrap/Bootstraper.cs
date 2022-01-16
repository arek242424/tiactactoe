using Autofac;
using TicTacToeBackend.Factories;
using TicTacToeBackend.Services;

namespace TicTacToeBackend.Bootstrap
{
    public class Bootstraper : Module
    {

        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<RepositoryUofFactory>().As<IRepositoryUofFactory>();
            builder.RegisterType<UserService>().As<IUserService>();
        }
    }
}
