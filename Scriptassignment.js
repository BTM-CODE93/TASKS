//Task 1 Variables & Data Types
var firstName = "Bassem";
let secondName = "Tarek";
let $age = 32;
let isMarried = false;
console.log(isMarried); // I tried to create a boolean , can u check it please !?
console.log(
  `My name is ${firstName} , my age is ${$age} & my father name is ${secondName}`
);

// Task 2 // sum , div , mult , sub
let num1 = 5;
let num2 = 10;
let num3 = 20;
let num4 = 15;
let num6 = 5;
let num7 = 12;
let sum = num1 + num2;
let div = num2 / num1;
let mult = num1 * num2;
let sub = num3 - num4 - num6 - num7;
console.log(`The sum is ${sum} , The div is ${div} , The mult is ${mult}`);
console.log(`The sub is ${sub}`); // sub of 4 numbers
let A = num4 < num2; // 15 < 10
console.log(A);
let B = num3 > num4; // 20 > 15
console.log(B);
let c = num6 === num1; // 5 Equal 5
console.log(c);

// Task 3  Condintion (if stetement & switch case)
// if
let grade = 89;
if (grade >= 90) {
  console.log("Pass");
} else {
  console.log("Fail");
}

//switch
let dayname = "Saturday";
switch (dayname) {
  case "Saturday":
    console.log("First day of the week");
    break; // break to set only Saturday not all the rest of the weekdays
  default:
    console.log("Weekday");
}

// * Task Number 4 Loops
// loop from 1 to 20 with even & odd
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
let number1 = 20;
if (number1 % 2 === 0) {
  console.log("even ");
} else {
  console.log("odd ");
}

// while loop condition from 10 to 1
// if x bigger than 5 print high else print low
let x = 10;
while (x >= 1) {
  // 10 >= 1
  if (x > 5) {
    // 10 > 5
    console.log("high");
  } else {
    // 10 <= 5 low
    console.log("low");
  }
  x--; // to stop the infinite loop
}
