// Assignment Link ==> https://elzero.org/javascript-bootcamp-assignments-lesson-from-040-to-047/

// <---Q1--->
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

myFriends.length = num;

// Method 1
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

myFriends.pop();

// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// <---Q1--->

// <---Q2--->
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]
// <---Q2--->

// <---Q3--->
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrOne, arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
// <---Q3--->

// <---Q4--->
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
    words[website.length][0][website.length].toUpperCase() +
    words[website.length][0]
    .slice(website.length + Array.isArray(words))
    .toUpperCase()
); // ZERO
// <---Q4--->

// <---Q5--->
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

haystack.includes(needle.toUpperCase()) ?
    console.log("Found") :
    console.log(-1);
haystack.indexOf(needle.toUpperCase()) !== -1 ?
    console.log("Found") :
    console.log(-1);
haystack.lastIndexOf(needle.toUpperCase()) !== -1 ?
    console.log("Found") :
    console.log(-1);
// <---Q5--->

// <---Q6--->
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs
    .concat(arr1.slice(arr1.length - true), arr2.slice(arr1.length - true))
    .sort()
    .join("")
    .toLowerCase();

console.log(allArrs); // fxy
// <---Q6--->