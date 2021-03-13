using System;
using Microsoft.EntityFrameworkCore;
using Server.Model;

namespace Server
{
    public class DBContext: DbContext
    {
        public DbSet<Being> Beings { get; set; }

        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {

        }

        public DBContext(): base()
        {

        }


    }
}
