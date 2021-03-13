using System;
namespace Server.Model
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

    public class Being: Entity
    {
        public Race Race { get; set; }
        public Gender Gender { get; set; }
        public BeingStatus Status { get; set; }
        public string Kingdom { get; set; }

        public Being()
        {
            this.Race = Race.Human;
            this.Gender = Gender.NotApplicable;
            this.Status = BeingStatus.Alive;
            this.Kingdom = "";
        }

        public override string ToString()
        {
            return "Being String";
        }
    }
}
