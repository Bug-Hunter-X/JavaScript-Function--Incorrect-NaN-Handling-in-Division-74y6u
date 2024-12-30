function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect: Should handle the case where a or b is NaN
  } else {
    return a / b;
  }
}

console.log(foo(10, 0)); // Output: 0 (Expected)
console.log(foo(10, NaN)); //Output: NaN. Expected Infinity