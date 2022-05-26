// let cart = [
//     {
//         name: "dress",
//         price: "5"
//     },
//     {
//         name: "jeans",
//         price: "15"
//     },
//     {
//         name: "shirt",
//         price: "10"
//     }
//
// ]
//
// // Assignment 1: сделать так чтоб можно біло узнать общую сумму товаров в cart
//
// let sum = 0;
//
// for (let i = 0; i < cart.length; i++) {
//     sum += Number(cart[i].price);
// }
//
// console.log("Assignment 1: ", "Total sum of all goods in the cart is $" + sum)
//
// // Assignment 2 & 3: сделать цикл в котором в зависимости от дня недели - применить скидку для каждого товара
//
// const todayDate = new Date();
// const indexOfTheDay = todayDate.getDay()
// let dayOfTheWeek;
//
//     switch (indexOfTheDay) {
//         case 1:
//             dayOfTheWeek = "Monday";
//             document.getElementsByTagName('h1')[0].innerHTML =  "Today is " + dayOfTheWeek + " and you get a 5% discount on all goods! Here's the updated price list: "
//             cart = cart.map(item => ({...item, price: Number(item.price) * 0.95}))
//             break;
//         case 2:
//             dayOfTheWeek = "Tuesday";
//             document.getElementsByTagName('h1')[0].innerHTML = "Today is " + dayOfTheWeek + " and you get a 15% discount on all goods! Here's the updated price list: "
//             cart = cart.map(item => ({...item, price: Number(item.price) * 0.75}))
//             break;
//         case 5:
//             dayOfTheWeek = "Friday";
//             document.getElementsByTagName('h1')[0].innerHTML = "Today is " + dayOfTheWeek + " and you get a 25% discount on jeans only!"
//             cart = cart.map(item => item.name == "jeans" ? {...item, price: Number(item.price) * 0.75} : item)
//             break;
//         default:
//             console.log("Assignment 2: ", "Sorry, no discounts today")
//     }
//
//
// // Assignment 3
//
// for (let i = 0; i < cart.length; i++) {
//     // Create element
//     const el = document.createElement('div');
//
//    // Add text content to element
//     el.textContent = cart[i].name + ' ' + cart[i].price;
//
//   // add element to DOM
//     const box = document.getElementById('items');
//     box.appendChild(el);
// }
//
// let user = {
//     name : 'Anna',
//     lastName: 'Smith',
//     years : 20
// }
//
// for (let item in user) {
//     console.log(user[item] + ' - ' + item)
// }

//for of, for in

function test (myThis){
    console.log(myThis.innerHTML)
}

const containerObjects = document.getElementById('objects');  //creating wrapping element containerObjects

let myClass = new Main('Anna', 'Smith')
let myClass2 = new MainSecond('Jennifer', 'Lopez')

//Calling function first from the instance of the Main
myClass.first()
//Calling function first from the instance of the MainSecond (extended from Main)
myClass2.first()


//GETTER
//using with myClass
const elName = document.createElement('div');       //creating new element
containerObjects.appendChild(elName)                         //appending new element into containerObjects
elName.innerHTML = `Practicing Getter ${myClass.nameValue}`; //assigning into innerHTML of the new element result of the get function

//using with myClass2
const elName2 = document.createElement('div');       //creating new element
containerObjects.appendChild(elName2)                         //appending new element into containerObjects
elName2.innerHTML = `Practicing Getter ${myClass2.nameValue}`;//assigning into innerHTML of the new element result of the get function


//SETTER
//using with myClass
myClass.currentAge = 20;                                //creating new property age with the set function
const elAge = document.createElement('div');   //creating new element
containerObjects.appendChild(elAge)                     //appending new element into containerObjects
elAge.innerHTML = `Practicing Setter ${myClass.age}`;   //assigning into innerHTML of the new element result of the get function

//using with myClass2
myClass2.currentAge = 25;                               //creating new property age with the set function
const elAge2 = document.createElement('div');  //creating new element
containerObjects.appendChild(elAge2)                    //appending new element into containerObjects
elAge2.innerHTML = `Practicing Setter ${myClass2.age}`; //assigning into innerHTML of the new element result of the set function