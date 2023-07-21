// Get the current date and time
const currentDate = new Date();

// Function to pad single-digit numbers with a leading zero
const padNumber = (num) => (num < 10 ? `0${num}` : num);

// Format: YYYY-MM-DD HH:mm
const format1 = `${currentDate.getFullYear()}-${padNumber(
  currentDate.getMonth() + 1
)}-${padNumber(currentDate.getDate())} ${padNumber(currentDate.getHours())}:${padNumber(currentDate.getMinutes())}`;

// Format: DD-MM-YYYY HH:mm
const format2 = `${padNumber(currentDate.getDate())}-${padNumber(
  currentDate.getMonth() + 1
)}-${currentDate.getFullYear()} ${padNumber(currentDate.getHours())}:${padNumber(currentDate.getMinutes())}`;

// Format: DD/MM/YYYY HH:mm
const format3 = `${padNumber(currentDate.getDate())}/${padNumber(
  currentDate.getMonth() + 1
)}/${currentDate.getFullYear()} ${padNumber(currentDate.getHours())}:${padNumber(currentDate.getMinutes())}`;

console.log("Format 1 (YYYY-MM-DD HH:mm):", format1);
console.log("Format 2 (DD-MM-YYYY HH:mm):", format2);
console.log("Format 3 (DD/MM/YYYY HH:mm):", format3);