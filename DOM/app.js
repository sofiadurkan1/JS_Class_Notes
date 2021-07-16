// document get element by id

// const myDom = document.getElementById("dom");
// console.log(myDom);

// const instructor = document.getElementById("info");
// console.log(instructor);


// const instructor = document.getElementById("instructor");
// console.log(instructor);

//classname

// const withClassName = document.getElementsByClassName("class-info")
// console.log(withClassName[0]);



//TagName

// const cw = document.getElementsByTagName("h3");
// console.log(cw);


//query selector

// const inst = document.querySelector(".class-info");
// console.log(inst);


// console.log(document.querySelector('#instructor'));

// console.log(document.querySelectorAll('h3')[1]);


//h3 tag ine ulastik..
// console.log(document.querySelectorAll('h3')[0]);
// console.log(document.querySelector('.class-info h3'));
// console.log(document.querySelector('#info h3'));


////////////////////////////////////////////////////////////
//Manipulation

// const brands = document.querySelector('#brands');
// console.log(brands);


// brands.innerHTML = brands.innerHTML + `<li>NioyaTech</li>`;
// brands.innerHTML = brands.innerHTML + `<li class="brand" style = "color:red" >NioyaTech</li>`
// const classBrands = document.querySelectorAll('.brand');
// console.log(classBrands[3].innerText);

// const copyRight = document.querySelector('footer p');
// console.log(copyRight);
// copyRight.innerHTML =` <h1>&copy; 2020 clarusway.com</h1>`
// copyRight.innerText = ` 2020 clarusway.com`

//Challange

const lessonList = [
    {id: 1, name: 'HTML'},
    {id: 1, name: 'CSS'},
    {id: 1, name: 'JS'},
    {id: 1, name: 'REACT'},




    
];
//solution 1:

// const lessons = document.getElementById('lessons');
// for (i of lessonList){
//     lessons.innerHTML += i.name +' <br>'

// }

//solution 2:
// let list = document.querySelector('#lessons');
// for(let i = 0; i<lessonList.length; i ++);
// list.innerHTML += lessonList[i].name;

//solution 3 ED
// const lessonElm = document.getElementById('lessons');
// lessonList.forEach((element) =>{
//     lessonElm.innerHTML += `<li ">${element.name}</li>`

// })


//setAttribute getAttribute

// const mdn = document.querySelector('#mdn');
// const mdnHrefAttr = mdn.getAttribute('href');
// console.log(mdnHrefAttr);
// mdn.setAttribute('href',"https://www.youtube.com/watch?v=h6UPzVj1ncI&t=643s")
// mdn.innerHTML = 'W3 School'


const insElm = document.querySelectorAll('#instructors li');
// console.log(insElm);
insElm.forEach((item) => {
    console.log(item.innerText.includes('FrontEnd'));
    if(item.innerText.includes('FrontEnd')){
        item.setAttribute("class","front-end");

    }else if(item.innerText.includes('BackEnd')){
        item.setAttribute("class","back-end")

    }else if(item.innerText.includes('Team Lead')){
        item.setAttribute("class","lead")

    }


    
})
