# React Native Asynchronous State Access Bug

This repository demonstrates a common error in React Native applications: accessing a state variable before it's been initialized in an asynchronous operation.  The bug arises when trying to display data fetched from an API before the fetch is complete.

The `bug.js` file shows the problematic code. The `bugSolution.js` file shows how to correctly handle this situation.

## How to reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run the application.
4. Observe the error in the console and the crashing app. 

## Solution

The solution involves using optional chaining and nullish coalescing operators to safely access the state variable only after it has been initialized. Refer to `bugSolution.js` for implementation details.