using System;
using System.Text.Json.Serialization;

namespace Lyoko.Models
{
    public class LyokoTime
    {
        [JsonIgnore]
        protected DateTime DateTime { get; }
        public char Separator { get; set; }
        public int Year => DateTime.Year;
        public int Month => DateTime.Month;
        public int Day => DateTime.Day;
        public int Hour => DateTime.Hour;
        public int Minute => DateTime.Minute;
        public int Second => DateTime.Second;
        [JsonIgnore]
        public string Date => $"{Year}{Separator}{Month}{Separator}{Day}";
        [JsonIgnore]
        public string Time => $"{Hour}:{Minute}:{Second}";
        public LyokoTime()
        {
            DateTime = DateTime.Now; 
        }

        public LyokoTime(DateTime dateTime, char separator = '/')
        {
            DateTime = dateTime;
            Separator = separator;
        }

        public static LyokoTime Now()
        {
            return new LyokoTime(DateTime.Now);
        }

    }


}
