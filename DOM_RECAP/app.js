// //ID

// const myFirstElement = document.getElementById('userName');
// console.log("myFirstElement");

// //CLASS

// const myClass = document.getElementsByClassName('userTag');
// console.log(myClass);

// //TAG

// const myTag = document.getElementsByTagName('p');
// console.log(myTag);


// //ID

// const elementByQuery = document.querySelector('#userName');
// console.log(elementByQuery)

// //query selector class

// const elementByQuery2 = document.querySelector('.userTag');
// console.log(elementByQuery2)

// //query selectorAll class

// const elementByQuery3 = document.querySelectorAll('.userTag');
// console.log(elementByQuery3)


// const elementByQuery4 = document.querySelectorAll('p');
// console.log(elementByQuery4)

//------------------------Second--------------------------
// const langList = document.querySelector("#languages");
// console.log(langList);


// const langsGetElem = document.getElementsByClassName("lang");
// const langsQerySe = document.querySelector(".lang");

// console.log(langsGetElem);
// console.log(langsQerySe);

// langList.innerHTML += `<li class="lang">JavaScript</li>`

// console.log(langsGetElem);
// console.log(langsQerySe);


// const element = document.querySelector("#myElement");
// console.log(element);


// element.innerHTML = "Hello world..";
// element.innerText = "Hello";




//-----------------------------------------


// const car_list = [
//     { brandName: "Mercedes"},
//     { brandName: "BMW"},
//     { brandName: "Toyota"},
//     { brandName: "Opel"},
// ];

// const listElement = document.querySelector('#cars');
// console.log(listElement)

// for(let index = 0 ; index < car_list.length;index ++){
//     listElement.innerHTML += `<li>${car_list[index].brandName}</li>`
// }



//for each

// car_list.forEach(car =>{
//     console.log(car)
//     listElement.innerHTML += `<li>${car.brandName}</li>`

//     // listElement.innerHTML += '<li>' + car_list[i].brandName + '</li>';

// })

//-------------------------------------------

// const car_list = [
//     { id:0, brandName: "Mercedes"},
//     { id:1, brandName: "BMW"},
//     { id:2, brandName: "Toyota"},
//     { id:3, brandName: "Opel"},
// ];


// const comboBox =document.createElement("select");

// car_list.forEach(car =>{
//     comboBox.innerHTML +=`<option value="${car.id}">${car.brandName}</option>`
// })

// document.body.append(comboBox);

//--------------------------------------------------

const element = document.querySelector("#link");
console.log(element);
const attr = element.getAttribute("href");
console.log(attr);
// console.log(element.href); // this is also valid but not recomanded.
element.setAttribute("href", "http://www.clarusway.com");
element.innerText = "Go to ClarusWay"