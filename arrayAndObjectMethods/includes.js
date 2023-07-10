/**
 * .includes() method to see if one string is found in another. and return true or false.
 * .includes(search-string, optional-position)
 * default value of optional-position are start from zero
 * .includes() method is case sensitive 
 */

var fruits = [ 'apple', 'orange', 'grapes', 'mangoes' ];

// searching in g in apple = false
// fruits.filter(item => console.log(item.toLowerCase().includes('G'.toLowerCase())))

  //searching g in whole array of fruits
// ans = fruits.includes('g')

// ans = fruits.includes('apple',2) => false

// console.log(ans);


var nums = [2,4,6,8,7,9,1,20,11]

isPresent = nums.includes(20,-3)
 //fromIndex = -3,
// array.length + fromIndex = 9 + (-3) = 6
// Hence, the element 20 will be searched from the 6th index

console.log(isPresent)

var nums1 = [2,4,6,8,7,9,1,20,11]

isPresent1 = nums1.includes(20,-100)
// fromIndex = -100,
// array.length + fromIndex = 9 + (-100) = -91
// since the result is negative(-91),
// the element 20 will be searched in the entire array

console.log(isPresent1)