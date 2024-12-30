function foo(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Correctly handles NaN
  } else if (b === 0) {
    if(a===0) return 0; //handles both a and b are 0
    return a > 0 ? Infinity : -Infinity; // Correctly handles division by zero
  } else {
    return a / b;
  }
}

console.log(foo(10, 0)); // Output: Infinity
console.log(foo(10, NaN)); // Output: NaN
console.log(foo(0,0)); //Output: 0
console.log(foo(-10,0)); //Output: -Infinity