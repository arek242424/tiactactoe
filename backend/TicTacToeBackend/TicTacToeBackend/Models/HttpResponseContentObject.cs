using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicTacToeBackend.Models
{
    public class HttpResponseContentObject
    {
        public string Message { get; set; }
        public object data { get; set; }

    }
}
