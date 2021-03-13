using System;
namespace Server.Model
{
    public class Entity
    {
        public string Name { get; set; }
        public string ID { get; set; }

        public Entity()
        {
            Name = "";
            ID = "";
        }
    }
}
