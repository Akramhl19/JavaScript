/ Assignment Link ==> https:/ / elzero.org / javascript - bootcamp - assignments - lesson - from - 057 - to - 063 /

    // <---Q1--->
    function sayHello(theName, theGender) {
        return `Hello${
		theGender === "Male" ? " Mr" : theGender === "Female" ? " Miss" : ""
	} ${theName}`;
    }
    /*
    -- ANOTHER SOLUTION
    function sayHello(theName, theGender) {
    let nikname = theGender === "Male" ? "Mr" : "Miss";
    if (theGender !== undefined) {
        return `Hello ${nikname} ${theName}`;
    } else {
        return `Hello ${theName}`;
    }
}
*/

// Needed Output
console.log(sayHello("Osama", "Male")); // "Hello Mr Osama"
console.log(sayHello("Eman", "Female")); // "Hello Miss Eman"
console.log(sayHello("Sameh")); // "Hello Sameh"
// <---Q1--->

// <---Q2--->
function calculate(
    firstNum,
    secondNum = "Second Number Not Found",
    operation = "add"
) {
    switch (operation) {
        case "add":
            return typeof (firstNum + secondNum) === "string" ?
                "Second Number Not Found" :
                firstNum + secondNum;
        case "subtract":
            return firstNum - secondNum;
        case "multiply":
            return firstNum * secondNum;
    }
}

// Needed Output
console.log(calculate(20)); // Second Number Not Found
console.log(calculate(20, 30)); // 50
console.log(calculate(20, 30, "add")); // 50
console.log(calculate(20, 30, "subtract")); // -10
console.log(calculate(20, 30, "multiply")); // 600
// <---Q2--->

// <---Q3--->
function ageInTime(theAge) {
    if (theAge < 10 || theAge > 100) {
        return "Age Out Of Range";
    }
    let months = theAge * 12,
        weeks = months * 4,
        days = weeks * 7,
        hours = days * 24,
        minutes = hours * 60,
        seconds = minutes * 60;
    return `${months} Months\n${weeks} Weeks\n${hours} Hours\n${minutes} Minutes\n${seconds} Seconds`;
}

// Needed Output
console.log(ageInTime(110)); // Age Out Of Range
console.log(ageInTime(38)); // Months Example => 456 Months
// <---Q3--->

// <---Q4--->
function checkStatus(a, b, c) {
    let str, num, bool;
    typeof a === "string" ?
        (str = a) :
        typeof b === "string" ?
        (str = b) :
        (str = c);
    typeof a === "number" ?
        (num = a) :
        typeof b === "number" ?
        (num = b) :
        (num = c);
    typeof a === "boolean" ?
        (bool = a) :
        typeof b === "boolean" ?
        (bool = b) :
        (bool = c);
    return `Hello ${str}, Your Age Is ${num}, You ${
		bool ? "Are" : "Are Not"
	} Available For Hire`;
}

// Needed Output
console.log(checkStatus("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// <---Q4--->

// <---Q5--->
function createSelectBox(startYear, endYear) {
    document.write("<select>");
    for (let i = startYear; i <= endYear; i++) {
        document.write(`<option value="${i}">${i}</option>`);
    }
    document.write("</select>");
}
createSelectBox(2000, 2021);
// <---Q5--->

// <---Q6--->
function multiply(...args) {
    let answer = 1;
    for (let arg of args) {
        if (typeof arg === "number") {
            answer *= Math.trunc(arg);
        }
    }
    return answer;
}

console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000
// <---Q6--->