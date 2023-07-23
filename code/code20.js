/**
 * 20. Write a code which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
 */
//prompt('Tell be Number')
    let x = -1;
    switch (typeof x == 'number') {
      
      case (80 <= x && x<= 100):
         console.log("A");
         
         break;

      case (70 <= x && x< 80):
            console.log("B");
            
           break;  
      case (60 <= x && x <= 69):
            console.log("C");
            
           break;  
         
      case (50 <= x && x <= 59):
            console.log("D");
            
           break;   

      case (0 <= x && x <= 49):
            console.log("F");
            
            break;    
    
      default:
         console.log("not valid number for Grade");
         break;
    }

   