using System;
using Xunit;
using GielinorSimulator.Model;

namespace ServerApp.Tests
{
    public class DateConstructorTests
    {
        [Theory]
        [InlineData(0)]
        [InlineData(40)]
        [InlineData(4000 * 365 - 1)]
        public void Constructor_CreateWithX_FirstAge(int value)
        {
            Date date = new Date(value);

            Assert.Equal(Ages.First, date.Age);
        }
        [Theory]
        [InlineData(4000 * 365)]
        [InlineData(4000 * 365 + 1)]
        [InlineData(6000 * 365 - 1)]
        public void Constructor_CreateWithX_SecondAge(int value)
        {
            Date date = new Date(value);

            Assert.Equal(Ages.Second, date.Age);
        }

        [Theory]
        [InlineData(0)]
        [InlineData(40)]
        [InlineData(364)]
        public void Constructor_CreateWithX_Year1(int value)
        {
            Date date = new Date(value);

            Assert.Equal(1, date.Year);
        }

        [Theory]
        [InlineData(365)]
        [InlineData(366)]
        [InlineData(365 * 2 - 1)]
        public void Constructor_CreateWithX_Year2(int value)
        {
            Date date = new Date(value);

            Assert.Equal(2, date.Year);
        }

        [Theory]
        [InlineData(0)]
        [InlineData(20)]
        [InlineData(39)]
        public void Constructor_CreateWithX_Rintra(int value)
        {
            Date date = new Date(value);

            Assert.Equal(Months.Rintra, date.Month);
        }
        [Theory]
        [InlineData(40)]
        [InlineData(60)]
        [InlineData(77)]
        public void Constructor_CreateWithX_Moevyng(int value)
        {
            Date date = new Date(value);

            Assert.Equal(Months.Moevyng, date.Month);
        }

        [Theory]
        [InlineData(0)]
        [InlineData(40)]
        [InlineData(365)]
        public void Constructor_CreateWithX_Day1(int value)
        {
            Date date = new Date(value);

            Assert.Equal(1, date.Day);
        }

        [Theory]
        [InlineData(1)]
        [InlineData(41)]
        [InlineData(366)]
        public void Constructor_CreateWithX_Day2(int value)
        {
            Date date = new Date(value);

            Assert.Equal(2, date.Day);
        }

        [Theory]
        [InlineData(0)]
        [InlineData(7)]
        [InlineData(14)]
        public void Constructor_CreateWithX_Ivanday(int value)
        {
            Date date = new Date(value);

            Assert.Equal(Days.Ivanday, date.DayOfWeek);
        }

        [Theory]
        [InlineData(1)]
        [InlineData(8)]
        [InlineData(15)]
        public void Constructor_CreateWithX_Caistleday(int value)
        {
            Date date = new Date(value);

            Assert.Equal(Days.Caistleday, date.DayOfWeek);
        }

        [Fact]
        public void Constructor_CreateWithAllValues_FifthAge()
        {
            Date date = new Date(Ages.Fifth, 98, Months.Bennath, 9);

            Assert.Equal(Ages.Fifth, date.Age);
        }

        [Fact]
        public void Constructor_CreateWithAllValues_Year98()
        {
            Date date = new Date(Ages.Fifth, 98, Months.Bennath, 9);

            Assert.Equal(98, date.Year);
        }

        [Fact]
        public void Constructor_CreateWithAllValues_Bennath()
        {
            Date date = new Date(Ages.Fifth, 98, Months.Bennath, 9);

            Assert.Equal(Months.Bennath, date.Month);
        }

        [Fact]
        public void Constructor_CreateWithAllValues_Day9()
        {
            Date date = new Date(Ages.Fifth, 98, Months.Bennath, 9);

            Assert.Equal(9, date.Day);
        }
    }
}
