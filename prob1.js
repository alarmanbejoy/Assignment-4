


function calculateMoney(ticketSale) {
   
    if (ticketSale < 0) {
        return "Oh! no,please give me a valid number";
    }

    const ticketPrice = 120;
    const darowanCost = 500;
    const workerLunchCost = 50;


    const ticketIncome = ticketSale * ticketPrice;

    const totalExpenses = darowanCost + (8 * workerLunchCost);

    const remainingMoney = ticketIncome - totalExpenses;

    return remainingMoney;
}

// Example usage:
console.log(calculateMoney(10)); // Output: 300
console.log(calculateMoney(1055)); // Output: 125700
console.log(calculateMoney(93)); // Output: 10260

console.log(calculateMoney(-130)); // Output: "invalid number"




