using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
