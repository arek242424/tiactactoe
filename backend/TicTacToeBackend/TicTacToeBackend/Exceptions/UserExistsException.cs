using System;

namespace TicTacToeBackend.Exceptions
{
    public class UserExistsException : Exception
    {
        public string UserLogin { get; private set; }

        public UserExistsException(string userLogin, string message) : base(message)
        {
            UserLogin = userLogin;
        }

    }
}
