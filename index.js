// problem number 1

// function calculateMoney(ticketSale) {
   
//     if (ticketSale < 0) {
//         return "Oh no,please give me a valid number";
//     }

//     const ticketPrice = 120;
//     const darowanCost = 500;
//     const workerLunchCost = 50;


//     const ticketIncome = ticketSale * ticketPrice;

//     const totalExpenses = darowanCost + (8 * workerLunchCost);

//     const remainingMoney = ticketIncome - totalExpenses;

//     return remainingMoney;
// }

// // Example usage:
// // console.log(calculateMoney(10)); // Output: 300
// // console.log(calculateMoney(1055)); // Output: 125700
// // console.log(calculateMoney(93)); // Output: 10260

// console.log(calculateMoney(-130)); // Output: "invalid number"




// // problem number 2

// function checkName(name) {
//     if (typeof name !== 'string') {
//         return "invalid";
//     }
//     const lowerCaseName = name.toLowerCase();
//     const lastChar = lowerCaseName.charAt(lowerCaseName.length - 1);
//     if (lastChar === 'a' || lastChar === 'y' || lastChar === 'i' ||
//         lastChar === 'e' || lastChar === 'o' || lastChar === 'u' || lastChar === 'w') {
//         return "Good Name";
//     } else {
//         return "Bad Name";
//     }
// }

// // Example usage:
// // console.log(checkName("Salman")); // Output: Bad Name
// // console.log(checkName("RAFEE")); // Output: Good Name
// // console.log(checkName("jhankar")); // Output: Bad Name
// // console.log(checkName(199)); // Output: invalid
// console.log(checkName(["Rashed"])); // Output: invalid


// problem 3


// function deleteInvalids(array) {
//     if (!Array.isArray(array)) {
//         return "Please pass an array";
//     }
//     const filteredArray = array.filter((element) => typeof element === 'number' && !isNaN(element));

//     return filteredArray;
// }

// // Example usage:
// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])); // Output: [1, 18, -19]
// console.log(deleteInvalids(["1", { num: 2 }, NaN])); // Output: []
// console.log(deleteInvalids([1, 2, -3])); // Output: [1, 2, -3]
// console.log(deleteInvalids({ num: [1, 2, 3] })); // Output: "Invalid Array"


// // problem 4

function password(obj) {
   if (!obj.name || !obj.birthYear || !obj.siteName) {
        return "Invalid";
    }
    const birthYear = obj.birthYear.toString();
    if (birthYear.length !== 4 || isNaN(birthYear)) {
        return "Invalid";
    }

    const siteNameFirstChar = obj.siteName.charAt(0).toUpperCase();
    const password = ${siteNameFirstChar}${obj.siteName.slice(1)}#${obj.name}@${birthYear};

    return password;
}

// // Example usage:
// const input1 = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
// console.log(password(input1)); // Output: Google#kolimuddin@1999

// const input2 = { name: "rahat", birthYear: 2002, siteName: "Facebook" };
// console.log(password(input2)); // Output: Facebook#rahat@2002

// const input3 = { name: "toky", birthYear: 200, siteName: "Facebook" };
// console.log(password(input3)); // Output: Invalid

// const input4 = { name: "maisha", birthYear: 2002 };
// console.log(password(input4)); // Output: Invalid



// // // problem 5

function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr)) {
        return "invalid input";
    }
    if (typeof livingCost !== "number") {
        return "invalid input";
    }
    const totalIncome = arr.reduce((acc, payment) => {
        if (payment >= 3000) {
            acc += payment * 0.8;
        } else {
            acc += payment;
        }
        return acc;
    }, 0);

    const savings = totalIncome - livingCost;
    if (savings >= 0) {
        return savings;
    } else {
        return '"earn more"';
 
 
    }
}

// Test cases
console.log(monthlySavings([1000, 2000, 3000], 5400)); // Output: 0
console.log(monthlySavings([1000, 2000, 2500], 5000)); // Output: 500
console.log(monthlySavings([900, 2700, 3400], 10000)); // Output: "earn more"
console.log(monthlySavings(100, [900, 2700, 3400])); // Output: "invalid input"
