using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace GielinorSimulator.Model
{
    public class Kingdom: Entity
    {
        public Kingdom()
        {
            this.Race = Race.Human;
            this.Gender = Gender.NotApplicable;
            this.Status = BeingStatus.Alive;
            //this.Kingdom = "";
            this.BirthDate = new Date();
            this.DeathDate = null;
        }

        public override string ToString()
        {
            return "Being String";
        }
    }
}
