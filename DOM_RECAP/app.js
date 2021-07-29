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

// const element = document.querySelector("#link");
// console.log(element);
// const attr = element.getAttribute("href");
// console.log(attr);
// // // console.log(element.href); // this is also valid but not recomanded.
// element.setAttribute("href", "http://www.clarusway.com");
// element.innerText = "Go to ClarusWay"


//--------------------------------------


// const elementsLI = document.querySelectorAll("li");
// console.log(elementsLI);

// // elementsLI.forEach(item =>console.log(item));
// // elementsLI.forEach(item =>console.log(item.innerHTML));


// elementsLI.forEach(item =>{
    
//     console.log(item.innerHTML);//we checked it item has "error" and changed the color of class


//     if(item.innerHTML.includes("error")){
//         item.setAttribute("class","error")
        
//     }

//     if(item.innerHTML.includes("success")){
//         item.setAttribute("class","success")
        
//     }
// });


//---------------------------------------------------



// const myElement = document.querySelector(".hello");
// // console.log(myElement);

// myElement.style.color = 'red';
// myElement.style.fontWeight = 'red';
// myElement.style.border = '2px solid red';



//--------------------------------------------


// // const myBanner = document.getElementById("myBanner");
// const myBanner = document.querySelector("#myBanner");


// // console.log(myBanner.classList);
// // console.log(typeof myBanner.classList);
// myBanner.classList.add("active")
// console.log(myBanner);


//------------------------------------------------

// const element = document.querySelector("#today");
// console.log(element);

// const elementP  = document.createElement("p");
// console.log(elementP);

// elementP.innerText = "Wednesday";
// console.log(elementP);

// element.appendChild(elementP)


//---------------------------------


const element = document.querySelector("#btn");
// console.log(element);

element.addEventListener("click", clickFunction);//most readebale method..

function clickFunction(){
    console.log("you clicked me!")
    document.querySelector("#para").innerHTML = "change the text.."//we changed the text
}




element.addEventListener("mouseover", function(){
    console.log("mouseover")

});



element.addEventListener("mouseenter", () =>console.log("arrow function"));


document.querySelector("#para").addEventListener("click",function(){
    alert("give me a alert!");
    element.removeEventListener("click",clickFunction);

   

});

