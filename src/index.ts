import app from './auth';

// Existing code snippets below...

function checkEqual(a: any, b: any): string {
  if (a == b) { // Noncompliant
    return "Equal";
  } else {
    return "Not equal";
  }
}
console.log(checkEqual(0, false));

const numbers: number[] = [10, 2, 30, 1, 5];
numbers.sort(); // Noncompliant
console.log(numbers);

async function foo(): Promise<void> {
  // Simulate async
}
async function bar(): Promise<void> {
  return await foo(); // Noncompliant
}

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue; // Noncompliant
  }
  alert("i = " + i);
}
