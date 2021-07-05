// Remove items from an index position

// let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']

// let removedItems = vegetables.splice(1,2);
// console.log(vegetables);
// console.log(removedItems);



//length of array 

//example 1
// let fruits = ['banana','apple','peach']
// fruits[5] = 'mango';
// console.log(fruits.length);
// when we add 5th index of array, it will add 3rd and 4th one too..with ","

//example2
// let msgArray = []
// msgArray[0] = 'Hello'
// msgArray[99] = 'world'

// if (msgArray.length === 100){
//     console.log('The length is 100.');
// }

//set of values 

// values = []
// for (let i = 0; i < 10; i++){
//  values.push([
//   2 ** i,
//   2 * i ** 2
//  ])
// }
// console.table(values)

//Question1:
//get the first element of an array.

function first (array, n=0){
   if(n === 0){
       return array[0];
   }else if (n<0){
       return []

   }else{
       return (array.slice(0,n));
   }

}

console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));