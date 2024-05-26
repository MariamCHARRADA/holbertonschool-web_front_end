function countPrimeNumbers() {
  let count = 0;
  for (let number = 2; number <= 100; number++) {
    prime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor == 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      count++;
    }
  }
  return count;
}

t1 = performance.now();

setTimeout(() => {
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
}, 0);

t2 = performance.now();

console.log(
  "Execution time of printing countPrimeNumbers 100 times was " +
    (t2 - t1) +
    " milliseconds."
);