/**
 * 31. Sort the webTechs array and mernStack array
// countries Array : https://gist.github.com/incredimike/1469814
 */


const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Angular'];
const mernStack = ['MongoDB', 'Express', 'React', 'Node.js'];

// Sort in ascending order
webTechs.sort();
mernStack.sort();

console.log("Web Techs (sorted):", webTechs);
console.log("MERN Stack (sorted):", mernStack);


// Sort in descending order using a custom sorting function
webTechs.sort((a, b) => b.localeCompare(a));
mernStack.sort((a, b) => b.localeCompare(a));

console.log("Web Techs (sorted in descending order):", webTechs);
console.log("MERN Stack (sorted in descending order):", mernStack);