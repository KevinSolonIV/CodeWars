function bouncingBall(h,  bounce,  window) {
    //checking for any error conditions
    if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h || window <= 0) {
      return -1;
    }
    //first drop, seeing the ball is guaranteed, but the first loop will add two sightings;
    //  starting at -1 will make the first while loop (which is guaranteed to run)
    //  result in a single ball sighting
    let timesSeen = -1;
    //so long as the ball bounces higher than the window...
    while(h > window) {
      //if the ball bounces higher than the window, it will be seen going up and then again
      //  going back down, so we add two sightings
      timesSeen += 2;
      //h is reduced by a factor of bounce (bounce has been verified to be between 0 and 1
      //  exclusive, so this is a safe loop condition)
      h *= bounce;
    }
    return timesSeen;
  }