using System;
using Microsoft.EntityFrameworkCore;
using GielinorSimulator.Model;

namespace GielinorSimulator
{
    public class DBContext: DbContext
    {
        public DbSet<Being> Beings { get; set; }
        public DbSet<Kingdom> Kingdoms { get; set; }
        public DbSet<KingdomDescription> KingdomDescriptions { get; set; }


        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Being>().HasKey(b => new { b.Name, b.Environment });
            modelBuilder.Entity<Kingdom>().HasKey(b => new { b.Name, b.Environment });

            modelBuilder.Entity<Description>().HasKey(d => new { d.Name, d.Environment });
        }

        public DBContext(): base()
        {

        }


    }
}
