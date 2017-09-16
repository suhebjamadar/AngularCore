using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace AngularCore.Areas.User.Controllers
{
    [Route("api/[controller]")]
    public class UserApiController : Controller
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "user1", "user2" };
        }
    }
}