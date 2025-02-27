// prompt
let userInputString = prompt("Enter a list of comma-separated froyo flavors");

// store the input from the user as an array
const stringArray = userInputString.split(",");

// Create an object to hold the count of each flavor
const froyoFlavorCount = {};

// Loop to iterate through the array and count the number of each flavor
for (const flavor of stringArray) {

    // If the flavor already exists in the object, increment its count
    if (froyoFlavorCount[flavor]) {
        froyoFlavorCount[flavor] += 1;
    } else {
        // If the flavor doesn't exist, add it to the object with a count of 1
        froyoFlavorCount[flavor] = 1;
    }
}

// Display the result using console.table
console.table(froyoFlavorCount);