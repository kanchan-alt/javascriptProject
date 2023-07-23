/**
 * 22. Write a program which tells the number of days in a month.
 * 
 * 
 */



// let day = new Date().getMonth()

// let dayOf31 = [0, 2, 4, 6, 7, 9, 11]
// let dayOf30 = [3, 5, 8, 10 ]
// let dayOf28 = [1]

// if(dayOf31.includes(day)){
//   console.log(`31 days in this month ${day + 1 }`);
// }else if(dayOf30.includes(day)){
//     console.log(`30 days in this month ${ day + 1 }`);
// }else{
//     console.log(`28 days in this month ${ day + 1 }`);
// }


function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1; // 👈️ months are 0-based

// 👇️ Current Month
const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
// console.log(daysInCurrentMonth); 

// 👇️ Other Months
const daysInJanuary = getDaysInMonth(2023, 1);
console.log(daysInJanuary); // 👉️ 31

const daysInSeptember = getDaysInMonth(2024, 2);
console.log(daysInSeptember); //




