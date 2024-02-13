

function password(obj) {
    if (!obj.name || !obj.birthYear || !obj.siteName) {
        return "Invalid";
    }
    const birthYear = obj.birthYear.toString();
    if (birthYear.length !== 4 || isNaN(birthYear)) {
        return "Invalid";
    }

    const siteNameFirstChar = obj.siteName.charAt(0).toUpperCase();
    const password = `${siteNameFirstChar}${obj.siteName.slice(1)}#${obj.name}@${birthYear}`;

    return password;
}

// Example usage:
console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })); // Output: Google#kolimuddin@1999
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" })); // Output: Facebook#rahat@2002
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" })); // Output: Invalid
console.log(password({ name: "maisha", birthYear: 2002 })); // Output: Invalid
