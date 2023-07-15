// function reverseString(text) {
//     let result = [] //""

//     for (let i = text.length - 1; i >= 0; i--) {
//         result += text[i]
//         console.log(result);
//     }

//     return result
    
// }

function reverseString(text){
    let result = "";

    for(let char of text){
        console.log(char);
        result = char + result
        console.log(result);
    }

    return result;
}

console.log(reverseString("hello bye tata"));