function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    let months = theAge * 12;
    let weeks = Math.floor(theAge * 52.1429);
    let days = Math.floor(theAge * 365);
    let hours = days * 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;
    console.log(`${months} Monthes`);
    console.log(`${weeks} Weeks`);
    console.log(`${days} Days`);
    console.log(`${hours} Hours`);
    console.log(`${minutes} Minutes`);
    console.log(`${seconds} Seconds`);
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
