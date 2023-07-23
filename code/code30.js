/**
 * 30. Write a script which generates a random hexadecimal number.
 * 
 * 
 * 
 */

//way1
function getRandomHexadecimal() {
    const randomDecimal = Math.random() * 16777215; // Generate a random number between 0 and FFFFFF in decimal
    const hexadecimalNumber = Math.floor(randomDecimal).toString(16); // Convert the decimal to hexadecimal
    return hexadecimalNumber;
  }
  
  const randomHex = getRandomHexadecimal();
  console.log(randomHex);

//way2
const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

console.log(genRanHex(6));
console.log(genRanHex(12));
console.log(genRanHex(3));