# JavaScript Function: Incorrect NaN Handling in Division

This repository demonstrates a common, yet subtle, bug in JavaScript involving the handling of NaN (Not a Number) values in division.

## The Bug

The `foo` function in `bug.js` attempts to divide two numbers. It incorrectly returns 0 when either of the inputs is 0 or NaN, while correctly handling other cases.  Specifically, if `b` is 0 and `a` is not 0, it should return `Infinity`. If either `a` or `b` is `NaN`, it should return `NaN`.

## The Solution

The `bugSolution.js` file provides a corrected version of the `foo` function. The solution explicitly checks for `NaN` and zero values to handle all the cases correctly and provides appropriate outputs accordingly.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Run the code to observe the behavior of the buggy and corrected functions.