/**
 * 27. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
        https://stackabuse.com/javascript-get-min-and-max-element-of-array/
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
 */

   //  let arr = [ 1, 2, 15 ];
   //  arr.sort( (a, b) => a - b );
   //  console.log(arr);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 1.sort the array
    ages.sort(function(a, b) { 
      console.log(a);
      console.log(b);
      console.log(a - b);
      return a - b; 
   });

 console.log(`The sorted array ${ages}`);

 //1.2 find the min and max age   

 let maxNumber = Math.max(...ages)
 console.log(`find max using spreed and math.max ${maxNumber}`); 

 let minNumber = Math.min(...ages)
 console.log(`find min using spreed and math.min ${minNumber}`);



 let minElement = ages.reduce((a, b) => {
   return Math.min(a, b)
})
console.log(`find min using reduce ${minElement}`); 

let maxElement = ages.reduce((a, b) => {
   return Math.max(a, b)
})
console.log(`find max using reduce ${maxElement}`); 



// 2.Find the median age(one middle item or two middle items divided by two)


  
 function median(half){
   if (ages.length % 2){
      return ages[half];
     } else{
      return (ages[half - 1] + ages[half]) / 2.0;
     }
 }
 var half = Math.floor(ages.length / 2);
 console.log("the median for array ages: " + median(half));

  
    
  
  

// 3.Find the average age(all items divided by number of items)

let sumofArray = ages.reduce((sum, cur)=> {
   
       sum = sum + cur;

       return sum; 
        
},0)

console.log("sum of array ages is :" + sumofArray);

let average = sumofArray/ages.length;
console.log("average of ages is :" + average);




// 4.Find the range of the ages(max minus min)

let range = maxElement - minElement;

console.log("Range of Ages:", range);


// 5.Compare the value of (min - average) and (max - average), use abs() method

let minDifference = Math.abs(minElement - average);
let maxDifference = Math.abs(maxElement - average);

if (minDifference > maxDifference) {
   console.log("Absolute difference between min and average is larger.");
 } else if (maxDifference > minDifference) {
   console.log("Absolute difference between max and average is larger.");
 } else {
   console.log("Both absolute differences are equal.");
 }



 