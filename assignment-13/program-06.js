// 6. Write a js program to find all prime numbers between given interval using functions.

function findPrimesInInterval(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}
