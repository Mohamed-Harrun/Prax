// Perfect, Mohamed! Since you’ve completed the **full basics-to-advanced JavaScript syllabus**, the next step is to **apply what you learned through tasks and mini-projects**. I’ll break it down into **tasks by topic**, mixing exercises with real-world scenarios. These are designed to **strengthen your understanding and problem-solving**.

// ---

// # **1. Variables & Data Types**

// **Task 1:** Create a small program that stores:

// * Your name, age, isDeveloper (boolean), favorite numbers (array).
// * Print a summary using template literals.

const name = "Mohamed Harrun";
const age = 22;
let strNum = "22";
const isDeveloper = true;
const nums = [9,30,1,20,10];
console.log(`my name is ${name} and I'm ${age} years old and my profession is ${isDeveloper} developer and my favourite numbers are ${nums}`);


// **Task 2:** Demonstrate **type conversion & coercion**:

// * Convert a string to a number and vice versa.
// * Add a number and string, observe coercion.
strNum = Number(strNum)
console.log(typeof strNum)
// ---

// # **2. Operators**

// **Task 3:** Create a small **calculator**:

// * Take two numbers and an operator (`+`, `-`, `*`, `/`) as input.
// * Use ternary operator to handle invalid operator.

// **Task 4:** Logical operators practice:

// * Check if a number is **positive and even**.
// * Check if a number is **negative or zero**.

// ---

// # **3. Control Flow**

// **Task 5:** Write a **grade checker**:

// * Input: marks (0–100)
// * Output: “A” if 90+, “B” if 75–89, “C” if 50–74, “Fail” if below 50.

// **Task 6:** Use **switch** to print the name of the day for a number (1–7).

// **Task 7:** Loops practice:

for (i=0; i<=50; i++){
    if(i%2===0 || i===0){
        const even=i;
        console.log(even);
    }
}
// * Print all even numbers from 1 to 50 using `for`.
// * Print numbers 1–10 using `while` and `do…while`.

var i =0;
do{
    console.log(i);
    i++
}while(i<=10)

    const fruits = ["apple", "Banana", "Fig"];
    for(let fruit of fruits){
        console.log(fruit);
    }
    const student = {
        mark1:85,
        mark2:99,
        mark3:96
    }

    for(let key in student){
        console.log(key,":",student[key])
    }
// * Use `for…of` to iterate over an array of fruits.
// * Use `for…in` to iterate over an object of student marks.

// ---

// # **4. Functions**

// **Task 8:** Create functions to:

// * Add, subtract, multiply, divide two numbers.
// * A function with default parameters (e.g., greet a person with a default message).
// * An arrow function to check if a number is prime.

// **Task 9:** Scope & hoisting practice:

// * Write a program with global, local, and block-scoped variables and demonstrate access.
// * Call a function before declaration to see **function hoisting**.

// ---

// # **5. Arrays**

// **Task 10:** Array manipulations:

// * Create an array of 10 random numbers.

const arr = [55,65,35,56,77,9,23];
const double = arr.map((num)=>num*2);
console.log(double);

const gThan = arr.filter((num)=>num>50);
console.log(gThan);

const sum = arr.reduce((acc,curr)=>  {
    return acc+curr
},0)
console.log(sum);

const srt = arr.sort((a,b)=>a-b);
console.log(srt);



// * Use `map` to square numbers.
// * Use `filter` to get numbers greater than 5.
// * Use `reduce` to get sum of all numbers.
// * Use `sort` to sort ascending and descending.
// * Use `concat` to merge two arrays.
// * Use `slice` to get a sub-array.
// * Use `splice` to remove and insert elements.

// **Task 11:** Multidimensional arrays:

// * Create a **3x3 matrix**.
// * Print it in **matrix format** using nested loops.
// * Calculate **sum of diagonal elements**.

// ---

// # **6. Strings**

// **Task 12:** String manipulations:

// * Input a string, print **length, uppercase, lowercase**.
// * Check if a substring exists using `includes`.
// * Split a sentence into words.
// * Reverse a string using array methods.
// * Use template literals to combine name and age dynamically.

// ---

// # **7. Objects**

// **Task 13:** Object practice:

// * Create an object for a student with **name, age, marks, hobbies**.
// * Access properties using **dot and bracket notation**.
// * Add and delete properties.
// * Add a method to calculate **average marks**.
// * Use `this` keyword inside a method.

// **Task 14:** Nested objects & destructuring:

// * Create an object with **address inside student**.
// * Use destructuring to extract **city and state**.
// * Use `Object.keys`, `Object.values`, and `Object.entries` to print all properties.

// ---

// # **8. Mini Project Ideas**

// Once you finish tasks, try combining multiple topics into a **small project**:

// 1. **Todo App (Console Version)**

//    * Add, remove, list tasks (array of objects).
//    * Use functions, loops, objects, and arrays.

// 2. **Simple Calculator**

//    * Input two numbers and operator.
//    * Use functions, switch, and template literals for output.

// 3. **Student Management System (Console Version)**

//    * Store multiple students in an array of objects.
//    * Add, update, delete, list students.
//    * Use array methods, object methods, destructuring.

// ---

// If you want, I can **make a ready-to-do list of 20+ small exercises with solutions** so you can **practice day by day** and cover all your syllabus practically.

// Do you want me to prepare that next?


// REversing a String 

const str = "Mohamed";

const reversed = str.split("").reverse().join("");
console.log("Reversed String:",reversed);

// Checking palindrome

const pali = "Hi";
const check = pali.split("").reverse().join("");
if(pali===check){
    console.log("The given string is palindroe")
}
else{
    console.log("Not a palindrome")
}

const large = [1,2,3,77,99,10,100];

let largest = large[0];

for(i=1; i<large.length;i++){
    if(large[i]>largest){
        largest= large[i];
    }
}
console.log(largest);

console.log(large.slice(1));