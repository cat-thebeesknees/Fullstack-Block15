//create an object and name it "customer"
const customer = {
    //list all the keys and then add the value for each one
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone:"",
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: "false",
    };
console.log(customer);
    //Step 2- update the values using bracket notation for:
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