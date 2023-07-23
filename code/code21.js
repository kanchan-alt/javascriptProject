/**
 * 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
 */



    function season(x){

      if(x === "September".toLowerCase() || x === "October".toLowerCase() ||x === "November".toLowerCase()){
         console.log("Autumn");
   
       }else if(x === "December".toLowerCase()|| x === " January".toLowerCase()|| x === "February".toLowerCase()){
         console.log("Winter");
       }else if(x === "March".toLowerCase()||x === "April".toLowerCase()|| x === " May".toLowerCase()){
         console.log("Spring");
   
       }else if( x === "June".toLowerCase()||x === "August".toLowerCase()||x === "July".toLowerCase()){
         
           console.log("Summer");
       }else{
         console.log("invalid input for season");
       }
      
    }
   
let userInput = prompt("Tell me season")
season(userInput.toLowerCase())

  

// function getSeason(month) {
//    const autumnMonths = ['September', 'October', 'November'];
//    const winterMonths = ['December', 'January', 'February'];
//    const springMonths = ['March', 'April', 'May'];
//    const summerMonths = ['June', 'July', 'August'];
 
//    month = month.trim().toLowerCase();
 
//    if (autumnMonths.includes(month)) {
//      return 'Autumn';
//    } else if (winterMonths.includes(month)) {
//      return 'Winter';
//    } else if (springMonths.includes(month)) {
//      return 'Spring';
//    } else if (summerMonths.includes(month)) {
//      return 'Summer';
//    } else {
//      return 'Invalid input. Please enter a valid month.';
//    }
//  }
 
//  // Input from the user
//  const user_input = prompt('Enter the name of a month:');
 
//  // Get the season based on the user input
//  const season = getSeason(user_input);
 
//  // Display the result
//  alert('The season is: ' + season);