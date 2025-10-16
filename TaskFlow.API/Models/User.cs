namespace TaskFlow.API.Models
{
    public class User
    {
        public int Id { get; set; } //primary key
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty; //will be hashed later
        public List<TaskItem> ? Tasks { get; set; } 
    }
}
