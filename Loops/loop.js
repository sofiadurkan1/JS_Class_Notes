// let i = 0;
// let sum = 0;
​
// while (i<6){
//     sum +=i;
//     i++;
// }
​
// console.log("The total is: " + sum)
​
​
​
​
// for(let i =0; i<7;i++){
//     console.log(i)
// }
​
​
// let best = ['Clarusway', 'Google', 'Amazon', 'Tesla']
// let i=0;
// let len=best.length
​
// for(best;i<len;i++){
//     console.log(`${i+1}: ${best[i]}`)
    
// }
​
​
// notice ; in this example
​
​
​
// let text='Clarusway'
// for (let i=0;i<text.length;i++){
//     console.log(text[i])
// }
​
​
// let text= "Clarusway"
// let newText=""
// for (let i = text.length-1; i>=0; i--){
//     newText += text[i]
// }
// console.log("My newText is " + newText)
​
​
​
​
​
// let text = 'Clarusway'
// for (let i=0, j=10; i<j; i++, j--){
//     console.log(text[i])
// }
​
​
​
​
​
// let text = 'Clarusway'
// for (let i=0, j=10; i<j && j>7; i++, j--){
//     console.log(text[i])
// }
​
​
​
​
​
​
// var i=1;
// var mult=1;
// while (i<11) {
//     var mult = mult*i;
//     i++;
//     console.log(mult)
// }
// console.log("The answer is: " + mult);
​
​
​
​
​
​
// for (let i=1; i<=10; i++){
//     // if(i===6) continue
//     for (let j=0; j<=10;j++){
//         // if (j===3) continue
//         // if(j===8) break
//         document.write(`${i} x ${j} = ${i*j}`,"<br/>")
//     }
//     document.write("<br/>")
// }
​
​
// const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum = 0;
// for(i = 0; i <= 10; i++) {
//     sum += number[i]
// }
// console.log(sum)
​
​
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum = 0;
// for(let i = 0; i <= numbers.length; i++) {
//     if(numbers[i] % 2 ===0)
//     sum += numbers[i]
// }
// console.log(sum)
​
​
​
// var i = 1;
// var f = 1;
// do {
//     var f = f * i;
//     i++;
// }
// while(i<7);
// console.log("The factorial is " + f);
​
​
// let number = 5
// let fact = 1
​
// for (let  i = number; i>0; i--){
//     fact *=i
// }
​
// console.log(`the fact of ${number} is ${fact}`)
​
​
​
​
// let number = prompt("Please enter a number")
// let fact = 1
​
// for (let  i = number; i>0; i--){
//     fact *=i
// }
​
// console.log(`the fact of ${number} is ${fact}`)
​
​
​
​
// let number
// let fact = 1
// while(true){
//     number= Number(prompt("Enter a number"))
//     if(Number.isInteger(number)) break
// }
​
// for (let i = number; i>0;i--){
//     fact *=i
// }
​
​
    for(let num=1; num <= 100; num++){
        if(num % 5 === 0 && num % 3 === 0){
          console.log("fizzbuzz number")
        }   
        else if(num % 3 === 0){
          console.log("fizz number")
        }
        else if(num % 5 === 0){
          console.log("buzz number")
        }
        else {
          console.log(num)
        }
    }
​
​
    // const x=5
    // if (x%2===0){
    //     console.log("even")
    // }else{
    //     console.log("odd")
    // }
​
    // console.log(`${x} is an ${x % 2 ===0 && "even" || "odd"} number`)
​
​
​
    // for(let i=1; i <= 100; i++){
    //     console.log(`${i} ${i%3===0 && "Fizz" || "" }${i%5===0 && "Buzz" ||""}`)
    // }
​
​
// let randomNumber = Math.trunc((Math.random()*6)+1)
// while(randomNumber{
//     let randomNumber = Math.trunc((Math.random()*6)+1)
//     console.log(randomNumber)
// }
​
​
// let a = 1;
// while (a !== 6){
// a = Math.trunc((Math.random() * 6) + 1);
// console.log(a)
// }
​
​
// var num = [7, 12, 143, 54, 37] 
// num.sort(function (a,b){ 
// return b - a}); 
// console.log(num);
​