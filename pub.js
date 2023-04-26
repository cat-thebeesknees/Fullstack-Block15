//step-1 name the object "dinner"
const dinner = {
//step-2 keys = purchased food, and values = price of food.
    cheeseburger: 12,
    steak: 20,
    soup: 8,
    macAndCheese: 14,
    soupAndSalad: 16,
}

//test what is returned
console.log(Object.keys(dinner));
console.log(Object.values(dinner));
//create a loop that adds up a total for all meals purchased.
const prices = Object.values(dinner);
let totalCost = 0;
//set the initial value at zero, use values for the price of food to complete the loop
for (let i = 0; i < prices.length; i++) {
    totalCost += prices[i];
}
//return the total cost
console.log(totalCost);