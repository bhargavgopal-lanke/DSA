// basic example of for loops
for (let i = 0; i < 5; i++) {
  console.log("Hello world", i);
}

// we can change the initialization of i and condition and increment/decrement value
for (let i = 2; i < 5; i = i + 1) {
  console.log("Hello world, i= i+1", i);
}

// we changes the values for all the statements in for loop
for (let i = 2; i < 9; i = i + 2) {
  console.log("Hello world, i+2", i);
}

// using greate than symbol in for loop
for (let i = 5; i > 0; i--) {
  console.log("Decerement example, i-1", i);
}

// passing a function inside a for loop

function greet(i) {
  console.log("Hello Bhargav", i);
}

for (let i = 0; i < 10; i++) {
  greet(i);
}
