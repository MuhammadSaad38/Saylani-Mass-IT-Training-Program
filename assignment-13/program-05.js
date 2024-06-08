// Understanding pending

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    const numberOfDigits = String(num).length;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, numberOfDigits);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

// Example usage:
const number = 28;

console.log(`${number} is prime: ${isPrime(number)}`);
console.log(`${number} is Armstrong: ${isArmstrong(number)}`);
console.log(`${number} is perfect: ${isPerfect(number)}`);
