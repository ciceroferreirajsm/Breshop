using Microsoft.EntityFrameworkCore;

namespace Breshop.Models
{
    public class BreshopContext : DbContext
    {
        public BreshopContext(DbContextOptions<BreshopContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Produto>().Ignore(t => t.Imagem);
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Breshop.Models.Produto> Produto { get; set; }

        public DbSet<Breshop.Models.Usuario> Usuario { get; set; }
    }
}
