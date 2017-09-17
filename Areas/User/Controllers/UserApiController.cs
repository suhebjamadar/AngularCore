using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace AngularCore.Areas.User.Controllers
{
    [Area("User"), Route("api/user")]
    public class UserApiController : Controller
    {
        [HttpGet]
        public IEnumerable<Models.User> Get()
        {
            var users = new List<Models.User>{
                new Models.User{ Id = 1, FirstName="Jeo", LastName="John", Gender="Male" },
                new Models.User{ Id = 2, FirstName="Steven", LastName="Mark", Gender="Male" },
                new Models.User{ Id = 3, FirstName="William", LastName="Henry", Gender="Male" },
                new Models.User{ Id = 4, FirstName="Sherry", LastName="James", Gender="Female" },
                new Models.User{ Id = 5, FirstName="Andy", LastName="Ruce", Gender="Female" }
            };

            return users;
        }
    }
}