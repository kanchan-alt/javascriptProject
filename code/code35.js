/**
 * 35. Write a functions which checks if all items are unique in the array.
 */



function checkUnique(arr){
    if(arr.length === new Set(arr).size){
        console.log("it a unique array");
    }else{
        console.log("it a not unique array");
    }

}
let arr = [2,4,8,6,12,2,4,1,8,6]
let arr2 = [5,7,8,11,22,33]
checkUnique(arr);
checkUnique(arr2)

// var newArray = evenNumbers.filter((value, index, self) => self.indexOf(value) === index)

// console.log(newArray);