enum Day {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function getDayType(day: Day): string {
  if (day === "Saturday" || day === "Sunday") {
    return "Weekend";
  }
  return "Weekday";
}
