/**
 *  Given a string of text, write an algorithm that returns the text received in a reversed format. E.g
 *   reverseString('algorithms') // should return 'smhtirogla'
 * 
 * The process here is quite simple and straight forward. Our function will receive only one parameter i.e the string to be reversed
 * 
 * We will now explore four ways to solve this challenge below. They are:
 *   1.Chaining in-built methods
     2.Using a For-loop
     3.Recursion Method
     4.Using .reduce()
 */

     /**
      * 
      * The separator would be an empty string.
      * example:- const str = 'I love free';
      * str.split('')
      * output:- ['I', ' ', 'l','o',v','e',' ','f','r','e','e']
      * 
      * If I wanted to change it so the string is split up into individual words, then the separator would be an empty string with a space.
      * str.split(' ')
      * ['i','love', 'free']
      * 
      * 
      */


     function reverseString(text) {
        // console.log(text);
        console.log([...text]);
        console.log(text.split(""));
        console.log(text.split("").reverse());

        return text.split("").reverse().join("")
    }

  console.log(reverseString("kamya is leo baby"));
    