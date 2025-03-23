let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
day = day.trim(); // Removes leading and trailing spaces
day = day.slice(0, 1).toUpperCase() + day.slice(1).toLowerCase(); // Capitalizes first letter

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("Appointments Available From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("Appointments Available From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("Appointments Available From 10:00 AM To 7:00 PM");
    break;

  default:
    console.log("Its Not A Valid Day");
    break;
}

// let day = "World";
// Output => "Its Not A Valid Day"
