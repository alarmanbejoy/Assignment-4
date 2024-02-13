

function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid";
    }
    const lowerCaseName = name.toLowerCase();
    const lastChar = lowerCaseName.charAt(lowerCaseName.length - 1);
    
    if (lastChar === 'a' || lastChar === 'y' || lastChar === 'i' ||
        lastChar === 'e' || lastChar === 'o' || lastChar === 'u' || lastChar === 'w') {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}

// Example usage:
// console.log(checkName("Salman")); // Output: Bad Name
// console.log(checkName("RAFEE")); // Output: Good Name
// console.log(checkName("jhankar")); // Output: Bad Name
// console.log(checkName(199)); // Output: invalid
console.log(checkName(["Rashed"])); // Output: invalid




