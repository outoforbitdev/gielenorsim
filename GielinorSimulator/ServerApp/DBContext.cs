using System;
using Microsoft.EntityFrameworkCore;
using GielinorSimulator.Model;

namespace GielinorSimulator
{
    public class DBContext: DbContext
    {
        public DbSet<Being> Beings { get; set; }
        public DbSet<Kingdom> Kingdoms { get; set; }
        public DbSet<Description> Descriptions { get; set; }
        public DbSet<Index> Index { get; set; }


        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Being>().HasKey(b => new { b.Name, b.Environment });
            modelBuilder.Entity<Kingdom>().HasKey(b => new { b.Name, b.Environment });

            modelBuilder.Entity<Description>().HasKey(d => new { d.Name, d.Environment });
            modelBuilder.Entity<Index>().HasKey(i => new { i.Name, i.Environment });
        }

        public DBContext(): base()
        {

        }


    }

    public class Index: Entity
    {
        public Index(): base()
        {
            Type = EntityType.Being;
        }
    }
}
