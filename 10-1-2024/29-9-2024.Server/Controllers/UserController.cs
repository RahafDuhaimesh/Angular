using _29_9_2024.Server.DTO;
using _29_9_2024.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace _29_9_2024.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MyDbContext _db;

        public UserController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        async public Task<IActionResult> getUser()
        {
            var users = _db.Users.ToList();
            return Ok(users);
        }


        [HttpPost]
        public IActionResult addUser([FromForm] userRequestDTO dto)
        {
            var userEmail = _db.Users1s.Where(x => x.Email == dto.Email).FirstOrDefault();

            if (userEmail != null)
            {
                return BadRequest("Email Exist");
            }

            var user1 = new Users1
            {
                UserName = dto.UserName,
                Email = dto.Email,
                PasswordHash = dto.PasswordHash,
                Phone = dto.Phone,
                Address = dto.Address,
            };

            _db.Users1s.Add(user1);
            _db.SaveChanges();
            return Ok();
        }

        [HttpPost("login")]
        public IActionResult Login([FromForm] string Email, [FromForm] string PasswordHash)
        {
            var user = _db.Users1s.FirstOrDefault(x => x.Email == Email);

            if (user == null)
            {
                return BadRequest("User not found.");
            }

            if (user.PasswordHash != PasswordHash)  // Assuming password is stored as plain text
            {
                return BadRequest("Incorrect password.");
            }

            // Step 4: If everything is correct, return Ok
            return Ok("Login successful");
        }

    }
}
