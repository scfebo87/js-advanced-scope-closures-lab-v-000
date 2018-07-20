function produceDrivingRange(drivingRange) { 
  return function(start, end) { 
    let distance = Math.abs(start - end); 
    let range = Math.abs(distance - drivingRange);
    if (distance > drivingRange) { 
      return `${range} blocks out of range` }
    else { 
      return `within range by ${range}` }
  };
}