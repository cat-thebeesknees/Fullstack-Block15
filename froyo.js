//step-2 create an object and name it "customer"
const customer = {
  //list all the keys and then add the value for each one
  firstName: "jake",
  lastName: "smith",
  email: "jaekSmih!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: "false",
};
console.log(customer);
//Step 3- update the values using bracket notation for:
//correct the information for email to "Jak3Smith1992@email.com"
customer["email"] = "Jak3Smith1992@email.com";
console.table(customer);
//correct the information phone to 3195551234
customer["phone"] = "3195551234";
console.log(customer);
//correct the information zipCode to "63132"
customer["zipCode"] = "63132";
console.table(customer);
//correct the information favoriteFlavors to "coffee", "strawberry", and "matcha"
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];
console.log(customer);
//step 4- use the keyword delete to remove keys
//delete zipCode
delete customer["zipCode"];
console.log(customer);
console.table(customer);
//delete favoriteStore
delete customer["favoriteStore"];
console.log(customer);
console.table(customer);
//add new items to the survey using dot notation:
//add a new key "toppings" & assign it a value using an array [ "chocolate sprinkles", "wafer straws", and "gummy bears"]
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
console.log(customer);
console.table(customer);
//add a new key "futureFlavors" & assign it's value to "mango"
customer.futureFlavors = "mango";
console.log(customer);
console.table(customer);
//add a new key "todaysPurchaseCost" & give it a value of "5.32"
customer.todaysPurchaseCost = 5.32;
console.log(customer);
console.table(customer);
//use an array in a console.log to print the keys in the survey 
console.log(Object.keys(customer));