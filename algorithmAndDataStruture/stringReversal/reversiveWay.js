function reverseString(text) {
    if (text === "") {
        return ""
    } else {
        console.log(text.substr(1));
        console.log(text.substr(1) + text[0]);
        return reverseString(text.substr(1)) + text[0]
    }
}

console.log(reverseString('code'));

/**
 * The recursive function we created continuously breaks down the problem into smaller chunks until it reaches the terminating condition. We continuously remove and return the first character on each call and re-execute the function on what is left. Notice that at the end we have successfully returned every character in the string and joining them together from the last call upwards, gives us the string in reverse i,e “edoc”. Bear in mind that the last string is empty.

Whewww!!! Please take time to properly understand this implementation as recursion is a very important yet quite complicated concept. You will find help for understanding this better at the end of the article.
 */