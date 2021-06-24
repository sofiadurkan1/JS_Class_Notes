
//METHODS

let tvShow ='catdog';

console.log(tvShow.indexOf('cat')); // ==> 0
console.log(tvShow.indexOf('dog')); // ==>3
// indexOf bize ilk match yaptigi karakterin index numarsini verir.


//SLICE
let msg = 'haha that is so funny!';
console.log(msg.slice(5));
console.log(msg.slice(5,9));
console.log(msg.slice(-6));

//replace

let message = 'Hello brave new world!';
console.log(message.replace('Hello','Ciao'));//first arg search value, second arg replacer


//repeat

let naMe ='Sofia';
console.log(naMe.repeat(5));

//String Literals

let veg = 'eggplant';
let price = 2.25;
let qty = 5;

console.log("You bought " + qty + " " + veg + ". Total is: " + price * qty );
console.log(`You bought ${qty} ${veg} Total is: ${price*qty}`)

console.log(`I bought ${ 2+3} bread`);//shortest way with back ticks



//NULL and Undefined
//Null : intentional absence of value, we should assign it.
//Undefined:there is nothing in here


