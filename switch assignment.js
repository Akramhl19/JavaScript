// Assignment Link ==> https://elzero.org/javascript-bootcamp-assignments-lesson-from-038-to-039/

let day = "   friday  ";
day = day.trim();
day = day[0].toUpperCase() + day.substring(1, day.length);

switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("Its Not A Valid Day");
}