class Location {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

let home = new Location("home", "You are at home");
let sidewalk = new Location("sidewalk", "You are out on the sidewalk");
let store = new Location("store", "You are in a Walmart");

let locationCurrent = "home";

let locationLookUp = {
  home: home,
  sidewalk: sidewalk,
  store: store,
};

let locationStates = {
  home: ["sidewalk"],
  sidewalk: ["home", "store"],
  store: ["sidewalk"],
};

console.log(home.description);

function moveLocation(newLocation) {
  if (locationStates[locationCurrent].includes(newLocation)) {
    locationCurrent = newLocation;
    console.log(locationLookUp[locationCurrent].description);
  } else {
    console.log(`Cannot go to ${newLocation} from ${locationCurrent}`);
  }
}

moveLocation("sidewalk");
// Prints 'You are on the sidewalk.'
moveLocation("store");
// Prints 'You are in the store.'
moveLocation("home");
// Prints 'You cannot go from store to home.'
moveLocation("sidewalk");
// Prints 'You are on the sidewalk.'
moveLocation("home");
// Prints 'You are at your house.'
moveLocation("park");
// Prints 'You cannot go from sidewalk to park.'
