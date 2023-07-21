/**
 * Calculate the slope, x-intercept and y-intercept of y = 2x -2
 */

// function slope(x1, y1, x2, y2){
//     return (y2 - y1) / (x2 - x1);

// }

// let x1 = 3;
// let y1 = 2*x1-2
// let x2 = 5;
// let y2 = 2*x2-2
// let result = slope(x1, y1, x2, y2 );

// console.log("The slope is: " + result);


function calculateLineProperties() {
    const slope = 2; // The coefficient of 'x' in the equation y = mx + b
    const xIntercept = 2 / slope; // The x-intercept is where y = 0, so solve for x when y = 0 (0 = 2x - 2)
    const yIntercept = -2; // The constant term 'b' in the equation y = mx + b
  
    return {
      slope: slope,
      xIntercept: xIntercept,
      yIntercept: yIntercept,
    };
  }
  
  // Call the function to get the results
  const lineProperties = calculateLineProperties();
  
  // Display the results
  console.log("Slope: " + lineProperties.slope);
  console.log("X-intercept: " + lineProperties.xIntercept);
  console.log("Y-intercept: " + lineProperties.yIntercept);