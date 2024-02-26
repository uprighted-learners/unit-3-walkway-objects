class Location {
    // your code here
  
  }
  
  let home = new Location(/* your code here */);
  let sidewalk = new Location(/* your code here */);
  let store = new Location(/* your code here */);
  
  let locationCurrent = "home";
  
  let locationLookUp = {
    // your code here
  };
  
  let locationStates = {
    // your code here
  };
  
  
  function moveLocation(newLocation) {
    // your code here
  }
  
  moveLocation("sidewalk");
  // Prints 'You are on the sidewalk.'
  moveLocation("store");
  // Prints 'You are in the store.'
  moveLocation("home");
  // Prints 'You are at your house.'
  moveLocation("sidewalk");
  // Prints 'You are on the sidewalk.'
  moveLocation("home");
  // Prints 'You are at your house.'
  moveLocation("park");
  // Prints 'You cannot go from sidewalk to park.'
  