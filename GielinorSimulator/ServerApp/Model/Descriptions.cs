using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace GielinorSimulator.Model
{
    public class Description : Entity
    {
        public string Text { get; set; }

        public Description()
        {
            Text = "";
        }

        public override string ToString()
        {
            return "Description String";
        }
    }

    public class KingdomDescription: Description
    {
        public KingdomDescription() { }

        public override string ToString()
        {
            return "Kingdom Description";
        }
    }
}
