using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace GielinorSimulator.Model
{
    public class Kingdom : Entity
    {
        public string Government { get; set; }
        public string Monarch { get; set; }
        public string Usurper { get; set; }
        public string Capital { get; set; }
        public string Religion { get; set; }
        public string Demonym { get; set; }
        [NotMapped]
        public Date Established { get; set; }
        public int EstablishedNumber
        {
            get
            {
                if (Established != null)
                {
                    return Established.Number;
                }
                return 0;
            }
            set
            {
                if (value == 0)
                {
                    return;
                }
                Established = new Date(value);
            }
        }

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
