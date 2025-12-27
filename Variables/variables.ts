// Declaring a variable with type annotation

// Declaring a number variable
var n1:number = 10;
console.log(n1);

// Declaring string variables with different quote styles
var s1: string = "Hello, Typescript! Double quotes";
var s2: string = 'Hello, Typescript! Single quotes';
var s3: string = `Hello, Typescript! Backticks`;

console.log(s1);
console.log(s2);
console.log(s3);

// Declaring boolean variables
var b1: boolean = true;
var b2: boolean = false;

console.log(b1);
console.log(b2);

// Declaring any type variable
var a1: any = 42;
console.log(a1);
a1 = "Now I'm a string";
console.log(a1);
a1 = false;
console.log(a1);
a1 = {name: "Raviprasad", age: 25, city: "Bangalore", isStudent: true, hobbies: ["Reading", "Coding", "Travelling"], address: {street: "Street 123", zipcode: 560001}};
console.log(a1);