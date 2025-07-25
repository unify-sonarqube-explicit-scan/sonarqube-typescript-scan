// 1. Non-strict equality (== vs ===)
function checkEqual(a: any, b: any): string {
  if (a == b) { // Noncompliant: using non-strict equality '=='
    return "Equal";
  } else {
    return "Not equal";
  }
}
console.log(checkEqual(0, false)); // Output: "Equal"

// 2. Lexicographic array sort
const numbers: number[] = [10, 2, 30, 1, 5];
numbers.sort(); // Noncompliant: lexicographic sort
console.log(numbers); // Output: [1, 10, 2, 30, 5]

// 3. Useless 'await'
async function foo(): Promise<void> {
  // Simulate async task
}
async function bar(): Promise<void> {
  return await foo(); // Noncompliant
}

// 4. Use of continue (noncompliant in some linters/style guides)
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;  // Noncompliant
  }
  alert("i = " + i);
}
