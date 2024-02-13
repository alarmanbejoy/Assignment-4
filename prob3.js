


function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Please pass an array";
    }

    const validArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (typeof element === 'number' && !isNaN(element)) {
            validArray.push(element);
        }
    }

    return validArray;
}

// Example usage:
console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])); // Output: [1, 18, -19]
console.log(deleteInvalids(["1", { num: 2 }, NaN])); // Output: []
console.log(deleteInvalids([1, 2, -3])); // Output: [1, 2, -3]
console.log(deleteInvalids({ num: [1, 2, 3] })); // Output: "Invalid Array"

