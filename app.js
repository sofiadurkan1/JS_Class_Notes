//question: 1

//Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
    return (base*height)/2;
	
}
console.log(triArea(7,4));


//question:2

//Create a function that takes two numbers as arguments and return their sum.

function addition(a, b) {
    return a+b;
}
console.log(addition(3,2));

//question:3

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
	return num+1;
}
console.log(addition(8));

//question:4
//Write a function that converts hours into seconds.

function howManySeconds(hours) {
    return hours*3600;
	
}
console.log(howManySeconds(5));

//question:5

//Create a function that takes an array containing only numbers and return the first element.

function getFirstValue(arr) {
    return arr[0];
	
}
console.log(getFirstValue([1,2,3]));

//question :6
//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
    return num + addUp(num-1);
	
}
console.log(addUp(4));

//question :7
//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 

function leapyear(year){
    return (year %100 ===0)? (year %400 === 0):(year%4===0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));

