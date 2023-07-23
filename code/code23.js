/**
 * 23. Write a program which tells the number of days in a month, now consider leap year.
 */

function getDaysInMonth(year, month) {
  if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
    return new Date(year, month, 0).getDate();
  }else{
    return new Date(year, month, 0).getDate();
  }
  }

let year = 2024;// testing
// let Year = prompt("Tell me yaer to check is it Leap year or not?")
const leapFeb = getDaysInMonth(year, 2);
(leapFeb === 29) ? console.log(`this is leap year ${year}  of ${leapFeb} days`) : console.log(`this is not leap year ${year} of ${leapFeb} days`);