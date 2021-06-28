using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace GielinorSimulator.Model
{
    public static class Database
    {
        public static T GetT<T>(string environment, DbSet<T> db, string name) where T : Entity
        {
            return db.Where(e => e.Environment == environment && e.Name == name).First();
        }

        public static bool CreateT<T>(DBContext context, DbSet<T> db, T entity, EntityType entityType) where T : Entity
        {
            if (ExistsT(entity.Environment, db, entity.Name))
            {
                return false;
            }
            db.Add(entity);

            Description d = new Description()
            {
                Environment = entity.Environment,
                Name = entity.Name,
                Text = "{ summary: { value: '' } }",
            };
            context.Descriptions.Add(d);

            Index i = new Index()
            {
                Name = entity.Name,
                Environment = entity.Environment,
                Type = entityType,
            };
            context.Index.Add(i);

            context.SaveChanges();
            return true;
        }

        public static Response UpdateT<T>(string environment, DbSet<T> db, T value) where T : Entity
        {
            Response response = new Response();

            if (ExistsT(environment, db, value.Name))
            {
                db.Update(value);
                response.Success = true;
            }
            return response;
        }

        private static bool ExistsT<T>(string environment, DbSet<T> db, string name) where T: Entity
        {
            return db.Where(e => e.Name == name && e.Environment == environment).Count() > 0;
        }
    }
}
