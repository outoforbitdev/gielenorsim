using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace GielinorSimulator.Model
{
    public class Kingdom: Entity
    {
        public string Capital { get; set; }
        public string Religion { get; set; }
        public string Demonym { get; set; }

        public Kingdom()
        {
            Capital = "";
            Religion = "";
            Demonym = "";
        }

        public override string ToString()
        {
            return "Kingdom String";
        }
    }
}
