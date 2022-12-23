function isPrime(number) {
  const rootOfNumber = Math.sqrt(number);
  for (let i = 2; i <= rootOfNumber; i++) {
    if (rootOfNumber % i === 0) {
      return "Not Prime";
    }
  }
  return "Prime";
}

// console.log(isPrime(3783838383883483));

function sastaPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return "Not Prime";
    }
  }
  return "Prime";
}

// console.log(sastaPrime(999999999999997));

// For more optimized version: you can save i as variable and divide it further.
function littleMoreOptimizedPrime(number) {
  if (number <= 1) {
    return "Neither Prime nor Composite";
  }
  let c = 2;
  while (c * c <= number) {
    if (number % c === 0) {
      return "Not Prime";
    }
    c += 1;
  }
  return "Prime";
}

console.log(littleMoreOptimizedPrime(999997));
