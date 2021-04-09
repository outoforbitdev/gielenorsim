using System;
using System.Diagnostics;

namespace Server.Model
{
    #region Enums
    public enum Ages
    {
        First,
        Second,
        Third,
        Fourth,
        Fifth,
        Sixth,
    }
    public enum Months
    {
        Rintra,
        Moevyng,
        Bennath,
        Raktuber,
        Pentember,
        Fentuary,
        Septober,
        IreOfPhyrrys,
        Novtumber,
        Wintumber,
    }
    public enum Days
    {
        Ivanday,
        Caistleday,
        Duneday,
        Gullday,
        Erysail,
        Twiblick,
        Essianday,
    }
    #endregion Enums
    public class Date
    {
        public int Number;

        private static int DayLength = 60 * 60 * 24;

        private static int YearLength = DayLength * 365;

        private static int[] AgeLength =
        {
            4000 * YearLength,
            2000 * YearLength,
            4000 * YearLength,
            2000 * YearLength,
            169 * YearLength,
        };

        private static int[] AgeBegin =
        {
            1,
            AgeLength[0] + 1,
            AgeLength[0] + AgeLength[1] + 1,
            AgeLength[0] + AgeLength[1] + + AgeLength[2] + 1,
            AgeLength[0] + AgeLength[1] + + AgeLength[2] + AgeLength[3] + 1,
            AgeLength[0] + AgeLength[1] + + AgeLength[2] + AgeLength[3] + AgeLength[4] + 1,
        };

        #region Properties
        public Ages Age { get
            {
                foreach (Ages age in Enum.GetValues<Ages>())
                {
                    if (Number < AgeBegin[(int)age])
                    {
                        return age;
                    }
                }
                return Ages.Sixth;
            }
        }

        public int Year
        {
            get
            {
                return (Number - AgeBegin[(int)Age] + 1) / YearLength;
            }
        }

        private static int[] MonthArray = { 40, 78, 110, 144, 182, 213, 251, 291, 330, 366 };
        public Months Month
        {
            get
            {
                int daysInYear = NumberToDays(Number % YearLength);
                foreach (Months month in Enum.GetValues<Months>())
                {
                    if (daysInYear < MonthArray[(int)month])
                    {
                        return month;
                    }
                }
                return Months.Rintra;
            }
        }

        private static int MonthDays(Months month)
        {
            int monthDays = 0;
            if (month != Months.Rintra)
            {
                monthDays = MonthArray[(int)month - 1];
            }
            return monthDays;
        }

        public int Day
        {
            get
            {
                int daysInYear = NumberToDays(Number % YearLength);
                return daysInYear - MonthDays(Month);
            }
        }

        public Days DayOfWeek
        {
            get
            {
                int daysInWeek = NumberToDays(Number) % Enum.GetValues<Days>().Length;
                foreach (Days day in Enum.GetValues<Days>())
                {
                    if (daysInWeek < (int)day + 1)
                    {
                        return day;
                    }
                }
                return Days.Ivanday;
            }
        }
        #endregion Properties

        #region Constructors
        public Date(): this(AgeBegin[(int)Ages.Sixth])
        {
        }
        public Date(int number)
        {
            Number = number;
        }
        public Date(Ages age, int year, Months month, int day) : this(age, year, month, day, 0, 0, 0)
        {
        }
        public Date(int age, int year, int month, int day): this((Ages)age, year, (Months)month, day)
        {
        }
        public Date(Ages age, int year, Months month, int day, int hour, int minute, int second)
        {
            Number = AgeBegin[(int)age] + (year - 1 + DaysToYears(MonthDays(month) + day) * DayLength) * YearLength;
            Number += second + (minute * 60) + (hour * 60 * 24);
        }
        public Date(int age, int year, int month, int day, int hour, int minute, int second): this((Ages)age, year, (Months)month, day, hour, minute, second)
        {
        }
        #endregion Constructors

        #region Builders
        public Date FromDays(int days)
        {
            return new Date(0, 0, 0, 0);
        }
        public Date FromYears(int years)
        {
            return new Date(0, years, 0, 0);
        }
        public Date FromHours(int hours)
        {
            return new Date(0, 0, 0, 0, hours, 0, 0);
        }
        #endregion Builders

        #region Overrides
        public static Date operator +(Date a, Date b)
        {
            return new Date(a.Number + b.Number);
        }
        public static Date operator -(Date a, Date b)
        {
            return new Date(a.Number - b.Number);
        }
        public override bool Equals(object obj)
        {
            if (obj.GetType() == typeof(Date))
            {
                return Equals(obj as Date);
            }
            return false;
        }
        public bool Equals(Date b)
        {
            if (b is null)
            {
                return false;
            }
            return Number == b.Number;
        }
        public static bool operator ==(Date a, Date b)
        {
            if (a is null)
            {
                return b is null;
            }
            return a.Equals(b);
        }
        public static bool operator !=(Date a, Date b)
        {
            return !(a == b);
        }
        public override int GetHashCode()
        {
            return Number.GetHashCode();
        }
        public override string ToString()
        {
            return DateString();
        }
        public string DateString()
        {
            return DayOfWeek.ToString() + ", " +
                Day.ToString() + " " +
                Month.ToString() + ", " +
                Year.ToString() + " of the " +
                Age.ToString() + " Age";
        }
        #endregion Overrides

        private static int DaysToYears(int days)
        {
            return days / NumberToDays(YearLength) + 1;
        }
        private static int NumberToDays(int number)
        {
            return number / DayLength;
        }
    }
}
