// Check if a number is prime
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Check if a number is perfect (sum of divisors = number)
const isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i + (num / i === i ? 0 : num / i);
        }
    }
    return num > 1 && sum === num;
};

// Check if a number is an Armstrong number
const isArmstrong = (num) => {
    const digits = num.toString().split("").map(Number);
    const power = digits.length;
    return digits.reduce((sum, digit) => sum + Math.pow(digit, power), 0) === num;
};

// Compute sum of digits
const digitSum = (num) => num.toString().split("").reduce((sum, digit) => sum + Number(digit), 0);

export { isPrime, isPerfect, isArmstrong, digitSum };
