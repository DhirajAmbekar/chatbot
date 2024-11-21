const paddNumbers = (num, size) => String(num).padStart(size, "0");
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthShortNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayShortNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const dateFormatter = (dateInput, format) => {
  const date = dateInput ? new Date(dateInput) : null;
  if (!date || date == "Invalid Date") {
    return "";
  }

  const hours24 = date.getHours();
  const hours12 = hours24 % 12 || 12;
  const ampm = hours24 >= 12 ? "PM" : "AM";
  const dayName = dayNames[date.getDay()];
  const dayShortName = dayShortNames[date.getDay()];

  const options = {
    YY: date.getFullYear().toString().slice(-2),
    YYYY: date.getFullYear(),
    MM: date.getMonth() + 1,
    MMF: monthNames[date.getMonth()],
    MMS: monthShortNames[date.getMonth()],
    DD: date.getDate(),
    D: date.getDay(),
    HH: hours24,
    hh: hours12,
    mm: date.getMinutes(),
    ss: date.getSeconds(),
    A: ampm,
    dddd: dayName,
    ddd: dayShortName,
  };

  return format.replace(
    /YYYY|YY|MMF|MMS|MM|DD|D|HH|hh|mm|ss|dddd|ddd|A/g,
    (match) => paddNumbers(options[match], 2)
  );
};
