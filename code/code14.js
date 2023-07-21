/**
 * 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
 */

function calculateSlope(x1, y1, x2, y2) {

    return (y2 - y1) / (x2 - x1);
  }
  
  const x1 = 2;
  const y1 = 2;
  const x2 = 6;
  const y2 = 10;
  
  const slope = calculateSlope(x1, y1, x2, y2);
  console.log("The slope is: " + slope);

