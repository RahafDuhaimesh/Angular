namespace _29_9_2024.Server.DTO
{
    public class userRequestDTO
    {
        public string UserName { get; set; } = null!;

        public string PasswordHash { get; set; } = null!;

        public string Email { get; set; } = null!;

        public string? Phone { get; set; }

        public string? Address { get; set; }
    }
}
