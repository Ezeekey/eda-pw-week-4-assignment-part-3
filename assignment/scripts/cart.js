console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
    if (isFull() === false) {
        basket.push(item);
        return true;
    } return false;
}

function isFull() {
    if (basket.length < maxItems) {
        return false;
    } return true;
}


function listItems() {
    console.log("List of items: ");

    for ( item of basket ) {
        console.log(item);
    }
}

// TODO: Add empty()

// TODO: Add removeItem(item)

// Testing addItem
console.log("Adding items: ");
console.log(addItem("Bread"));
console.log(addItem("Potatoes"));
console.log(addItem("Oats"));
console.log(addItem("Beans"));
console.log(addItem("Rice"));

console.log(basket);

console.log("Should be full: " + isFull());
console.log("Attempting to add sixth item: ");
console.log(addItem("Big giant dumbbell"));

// Testing listItems

listItems();
