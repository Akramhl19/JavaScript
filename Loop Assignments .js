// Assignment Link ==> https://elzero.org/javascript-bootcamp-assignments-lesson-from-048-to-053/

// <---Q1--->
let start_Q_1 = 10;
let end_Q_1 = 100;
let exclude = 40;

for (let i = start_Q_1; i <= end_Q_1; i += start_Q_1) {
    if (i !== exclude) {
        console.log(i);
    }
}
// <---Q1--->

// <---Q2--->
let start_Q_2 = 10;
let end_Q_2 = 0;
let stop_Q_2 = 3;

for (let i = start_Q_2; i >= stop_Q_2; i--) {
    if (i < start_Q_2) {
        console.log(`0${i}`);
    } else {
        console.log(i);
    }
}
// <---Q2--->

// <---Q3--->
let start_Q_3 = 1;
let end_Q_3 = 6;
let breaker = 2;

for (let i = start_Q_3; i <= end_Q_3; i++) {
    console.log(i);
    console.log(`-- ${breaker}`);
    console.log(`-- ${breaker + breaker}`);
}
// <---Q3--->

// <---Q4--->
let index = 10;
let jump = 2;
let end_Q_4 = 0;

for (;;) {
    if (index > jump) {
        console.log(index);
        index -= jump;
    } else break;
}
// <---Q4--->

// <---Q5--->
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let validNames = [];

for (let i = validNames.length; i < friends.length; i++) {
    if (!friends[i].toLowerCase().startsWith(letter)) {
        validNames.push(friends[i]);
    }
}

for (let i = Number(!Array.isArray(friends)); i < validNames.length; i++) {
    console.log(`"${i + letter.length} => ${validNames[i]}"`);
}
// <---Q5--->

// <---Q6--->
let start_Q_6 = 0;
let swappedName = "elZerO";

let str = "";

for (let i = start_Q_6; i < swappedName.length; i++) {
    swappedName[i] === swappedName[i].toLowerCase() ?
        (str += swappedName[i].toUpperCase()) :
        (str += swappedName[i].toLowerCase());
}
console.log(str);
// <---Q6--->

// <---Q7--->
let start_Q_7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start_Q_7; i < mix.length; i++) {
    if (!(mix[i] === mix[start_Q_7] || typeof mix[i] !== "number")) {
        console.log(mix[i]);
    }
}
// <---Q7--->

/*
	- Note:-
    -- There is another way to iterate over an array in javascript:-
				// let arr = [1, 2, 3, 4, 5];
				// for (item of arr) {
				// 	console.log(item);
				// }
    -- The previos code is just the same as:-
				// let arr = [1, 2, 3, 4, 5];
				// for (let i = 0; i < arr.length; i++) {
				// 	console.log(arr[i]);
				// }
	- One Good Resourse Is:-
	  -- https://danielmjung.medium.com/demystifying-the-es6-for-of-loop-9c1a0166d1c6
*/