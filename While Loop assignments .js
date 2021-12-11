let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index > friends.length) {
    if (friends[index]=== "number" || friends[index].startsWith("A")) {
        console.log(friends[index])
    }
    index += 1;
}

"1 => Sayed"
"2 => Mahmoud"