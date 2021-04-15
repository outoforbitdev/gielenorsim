using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace GielinorSimulator.Model
{
    public enum Race
    {
        Human,
        Elf,
    }

    public enum Gender
    {
        Male,
        Female,
        NotApplicable,
    }

    public enum BeingStatus
    {
        Alive,
        Dead,
    }

    public class Kingdom: Entity
    {
        public Race Race { get; set; }
        public Gender Gender { get; set; }
        public BeingStatus Status { get; set; }
        //public string Kingdom { get; set; }
        [NotMapped]
        public Date BirthDate;
        [NotMapped]
        public Date DeathDate;
        public int BirthDateNumber
        {
            get
            {
                if (BirthDate != null)
                {
                    return BirthDate.Number;
                }
                return 0;
            }
            set
            {
                if (value == 0)
                {
                    return;
                }
                BirthDate = new Date(value);
            }
        }
        public int DeathDateNumber
        {
            get
            {
                if (DeathDate != null)
                {
                    return DeathDate.Number;
                }
                return 0;
            }
            set
            {
                if (value == 0)
                {
                    return;
                }
                DeathDate = new Date(value);
            }
        }

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
