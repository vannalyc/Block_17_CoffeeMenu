// import coffee data using required syntax
const coffeeMenu = require("./coffee_data");
module.exports = coffeeMenu

// Print an array of all drinks on the menu
const printName = (item) =>{
return item.name; 
}
console.log(coffeeMenu.map(printName));

// Print an array of drinks that cost 5 and under
const underFive = (item) => {
    return item.price <= 5; 
};
const itemUnderFive = coffeeMenu.filter(underFive);
console.table(itemUnderFive);

//Print an array of drinks that are prices at an even number 
const evenPrice = (item) => {
    return item.price % 2 == 0;
};
const itemsEvenPrice = coffeeMenu.filter(evenPrice);
console.table(itemsEvenPrice);

//Print the total if you were to order one of every drink
function findPrice(item) {
    return item.price;
}
const drinkPrice = coffeeMenu.map(findPrice);
console.log(drinkPrice);
const sumTotalCost = (accumulator, currentValue) => {
    return accumulator + currentValue; 
}
const totalPrice = drinkPrice.reduce(sumTotalCost);
console.log(totalPrice)

//Print an array with all the drinks that are seasonal
const inSeasonal = (item) => {
    return item.seasonal == true;
}; 
const seasonalItems = coffeeMenu.filter(inSeasonal)
console.table (seasonalItems)
const name = (seasonalItems) => {
// return seasonalItems.name + " with imported beans"; 
    return [seasonalItems.name , "with imported beans"].join(" ");
}

