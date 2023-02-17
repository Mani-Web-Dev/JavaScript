
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    // Check if num is divisible by any number up to its square root
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Example usage:
console.log(isPrime(107)); // Output: false