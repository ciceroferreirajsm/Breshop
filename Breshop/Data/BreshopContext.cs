using Microsoft.EntityFrameworkCore;

namespace Breshop.Models
{
    public class BreshopContext : DbContext
    {
        public BreshopContext (DbContextOptions<BreshopContext> options)
            : base(options)
        {
        }

        public DbSet<Breshop.Models.Produto> Produto { get; set; }
    }
}
