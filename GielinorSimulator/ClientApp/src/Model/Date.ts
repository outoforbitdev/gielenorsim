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

    private static DayLength = 60 * 60 * 24;

    private static YearLength = Date.DayLength * 365;

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
    //public get Age(): Ages
    //{
    //    for (const age in Ages)
    //    {
    //        if (!isNaN(Number(age))) {
    //            continue;
    //        }
    //        if (this.Number < Date.AgeBegin[Ages[age]])
    //        {
    //            return age as Ages;
    //        }
    //    }
    //    return Ages.Sixth;
    //}

    //public get Year(): number
    //{
    //    return (this.Number - Date.AgeBegin[this.Age]+ 1) / Date.YearLength;
    //}

    //private static MonthArray = [ 40, 78, 110, 144, 182, 213, 251, 291, 330, 366 ];
    //public get Month(): Months
    //{
    //    daysInYear = this.NumberToDays(this.Number % Date.YearLength);
    //    for (const month in Months)
    //    {
    //        if (isNaN(Number(month))) {
    //            break;
    //        }
    //        if (daysInYear < Date.MonthArray[month])
    //        {
    //            return month;
    //        }
    //    }
    //    return Months.Rintra;
    //}

    //private static MonthDays(month: Months): number
    //{
    //    monthDays = 0;
    //    if (month != Months.Rintra) {
    //        monthDays = Date.MonthArray[month - 1];
    //    }
    //    return monthDays;
    //}

    //public get Day(): number
    //{
    //    daysInYear = this.NumberToDays(this.Number % Date.YearLength);
    //    return daysInYear - Date.MonthDays(this.Month);
    //}

    //public get DayOfWeek(): Days
    //{
    //    daysInWeek = Date.NumberToDays(this.Number) % Object.keys(Day).length;
    //    for (const day in Days)
    //    {
    //        if (isNaN(Number(day))) {
    //            break;
    //        }
    //        if (daysInWeek < day + 1)
    //        {
    //            return day;
    //        }
    //    }
    //    return Days.Ivanday;
    //}
    //#endregion Properties

    constructor(initData: DateInterface) {
        this.Number = initData.Number || 0;
    }

    public toString() {
        return "Date String";
    }

    public DateString() {
        return "Date String";
    }
}