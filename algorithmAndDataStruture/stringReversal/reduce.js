function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}


function reverseString(text) {
    return text.split("").reduce((acc, char) => char + acc, '')
} 

console.log(reverseString('hi bye'));