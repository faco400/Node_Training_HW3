function calculateFactorial (n, accumulator = 1) {
  if (n == 0) {
    return accumulator;
  } else {
    return calculateFactorial( (n - 1), n * accumulator );
  }
}

// -------------------------------
// calculateFactorial debug
// console.log(calculateFactorial(3));
// calc n = 3 acc = 1
// calc n = 2 acc = 3
// calc n = 1 acc = 6
// calc n = 0 acc = 6
// -------------------------------

function power (base, expoent, accumulator = 1) {
  if (expoent == 0) {
    return accumulator
  } else {
    accumulator = base * accumulator;
    return power(base, expoent - 1, accumulator)
  }
}

// ---------------------------------
// power debug
// console.log(power(3,3))
// base = 3, expoent = 3, acc = 1 -> base = 3, expoent = 2, acc = 3
// base = 3, expoent = 2, acc = 3 ->  base = 3, expoent = 1, acc = 9
// base = 3, expoent = 1, acc = 9 -> base = 3, expoent = 0, acc 27
// base = 3, expoent = 0, acc = 27 -> return 27
// ---------------------------------