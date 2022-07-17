
// Q1. Create two variables that have numbers as their values
let firstName = 7;
let lastName = 7;

// Q3. Create a function that returns the sum of two numbers that are arguments. Then console.log the function with the variables from step two as your two arguments.

function sum(x , y){
    return (firstName + lastName);
}
console.log(sum(firstName ,lastName));

// Q4a. Create two variables that have numbers as their values


let x = 21;
let y = 7;

// 4. Create a function that returns the difference of two numbers that are arguments. Then console.log the function with the variables from step two as your two arguments.

function difference(x , y ){
    return (x - y);
}
console.log(difference(x , y));


// Q5a. Create two variables that have numbers as their values

let male = 28;
let female = 2;

// 5. Create a function that returns divides the first argument by the second argument and returns the new value. Then console.log the function with the variables from step two as your two arguments.

function division( male , female){
    return (male / female);
}
console.log(division(male ,female));

// Q6a. Create two variables that have numbers as their values

let redPen = 7;
let bluePen = 2;


// 6. Create a function that returns two arguments multiplied by each other. Then console.log the function with the variables from step two as your two arguments.

function multiply(redPen ,bluePen){
    return (redPen * bluePen);
}
console.log(multiply(redPen,bluePen));



// 7. Take the four functions that you created above and turn them into Arrow Functions...

// addition 

let sumUp = (x, y) =>(11 + 3);
console.log(sumUp(x,y));

// subtract

let subtract = (profit, loss) =>(17 - 3);
console.log(subtract('profit','loss'));


// multiplication

let fruits = (oranges , mangoes) => (0.8 * 2);
console.log(fruits('oranges' * 'mangoes'));


// division
let list = (firstList, secondList) =>(67 / 2);
console.log(list('firstList','secondList'));

