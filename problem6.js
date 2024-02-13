function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== "number") {
        return "invalid input";
    }

    let totalIncome = 0;
    for (let i = 0; i < arr.length; i++) {
        const payment = arr[i];
        totalIncome += payment >= 3000 ? payment * 0.8 : payment;
    }

    const savings = totalIncome - livingCost;
    return savings >= 0 ? savings : '"earn more"';
}

// Test cases
console.log(monthlySavings([1000, 2000, 3000], 5400)); // Output: 0
console.log(monthlySavings([1000, 2000, 2500], 5000)); // Output: 500
console.log(monthlySavings([900, 2700, 3400], 10000)); // Output: "earn more"
console.log(monthlySavings(100, [900, 2700, 3400])); // Output: "invalid input"
