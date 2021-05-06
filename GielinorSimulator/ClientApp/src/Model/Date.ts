interface DateInterface {
    Number: number
}

//#region Enums
enum Ages {
    First,
    Second,
    Third,
    Fourth,
    Fifth,
    Sixth,
}
enum Months {
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
enum Days {
    Ivanday,
    Caistleday,
    Duneday,
    Gullday,
    Erysail,
    Twiblick,
    Essianday,
}
//#endregion Enums

export class Date {
    public Number: number;

    private static YearLength = 365;

    private static AgeLength =
        [
            4000 * Date.YearLength,
            2000 * Date.YearLength,
            4000 * Date.YearLength,
            2000 * Date.YearLength,
            169 * Date.YearLength,
            4000* Date.YearLength,
        ];

    private static AgeBegin =
        [
            1,
            Date.AgeLength[0] + 1,
            Date.AgeLength[0] + Date.AgeLength[1] + 1,
            Date.AgeLength[0] + Date.AgeLength[1] + + Date.AgeLength[2] + 1,
            Date.AgeLength[0] + Date.AgeLength[1] + + Date.AgeLength[2] + Date.AgeLength[3] + 1,
            Date.AgeLength[0] + Date.AgeLength[1] + + Date.AgeLength[2] + Date.AgeLength[3] + Date.AgeLength[4] + 1,
        ];

    //#region Properties
    public get Age(): Ages
    {
        if (this.Number < Date.AgeBegin[1]) {
            return Ages.First;
        } else if (this.Number < Date.AgeBegin[2]) {
            return Ages.Second;
        } else if (this.Number < Date.AgeBegin[3]) {
            return Ages.Third;
        } else if (this.Number < Date.AgeBegin[4]) {
            return Ages.Fourth;
        } else if (this.Number < Date.AgeBegin[5]) {
            return Ages.Fifth;
        } else {
            return Ages.Sixth;
        }
    }

    public get Year(): number
    {
        return Math.floor((this.Number - Date.AgeBegin[this.Age]+ 1) / Date.YearLength);
    }

    private static MonthArray = [ 40, 78, 110, 144, 182, 213, 251, 291, 330, 366 ];
    public get Month(): Months
    {
        const daysInYear = this.Number % Date.YearLength;
        let month: Months;
        for (month = 0; month < 10; month++) {
            if (daysInYear < Date.MonthArray[month]) {
                break;
            }
        }
        switch (month) {
            case 0:
                return Months.Rintra;
            case 1:
                return Months.Moevyng;
            case 2:
                return Months.Bennath;
            case 3:
                return Months.Raktuber;
            case 4:
                return Months.Pentember;
            case 5:
                return Months.Fentuary;
            case 6:
                return Months.Septober;
            case 7:
                return Months.IreOfPhyrrys;
            case 8:
                return Months.Novtumber;
            case 9:
            default:
                return Months.Wintumber;
        }
    }

    private static MonthDays(month: Months): number
    {
        let monthDays = 0;
        if (month !== Months.Rintra) {
            monthDays = Date.MonthArray[month - 1];
        }
        return monthDays;
    }

    public get Day(): number
    {
        const daysInYear = this.Number % Date.YearLength;
        return daysInYear - Date.MonthDays(this.Month);
    }

    public get DayOfWeek(): Days
    {
        const dayInWeek = this.Number % 7;
        switch (dayInWeek) {
            case 0:
                return Days.Ivanday;
            case 1:
                return Days.Caistleday;
            case 2:
                return Days.Duneday;
            case 3:
                return Days.Gullday;
            case 4:
                return Days.Erysail;
            case 5:
                return Days.Twiblick;
            case 6:
            default:
                return Days.Essianday;
        }
    }
    //#endregion Properties

    constructor(initData: DateInterface) {
        this.Number = initData.Number || 0;
    }

    public toString() {
        return "Date String";
    }

    public DateString() {
        return Days[this.DayOfWeek] + ", " +
            this.Day + " " + Months[this.Month] + ", " + this.YearString();
    }

    public YearString() {
        return "Year " +
            this.Year + " of the " + Ages[this.Age] + " Age";
    }
}