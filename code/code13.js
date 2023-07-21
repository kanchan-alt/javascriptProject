/**
 * 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
 */

let askBase = prompt("Give as base", 0)
let askHeight = prompt("Give as height", 0)

let area = 0.5 * askBase * askHeight;
console.log(`Area of triangle: ${area}`)