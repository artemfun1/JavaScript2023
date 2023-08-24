// "use strict";


// let num = 42
// console.log(num)

// let firstName = 'Aaaa'

// num = 10

// const isProgrammer = true 

// let a = 0;
// console.log( Boolean(a) ); 

// let b = "0";
// console.log( Boolean(b) ); 

// console.log(a)
// console.log(typeof(a))
// console.log(b)
// console.log(typeof(b))

// console.log(` budet ${counter}`);


// const resultElement = document.getElementById('result')
// const input1 = document.getElementById('input1')
// const input2 = document.getElementById('input2')
// const submitBtn = document.getElementById('submit')
// const plusBtn = document.getElementById('plus')
// const minusBtn = document.getElementById('minus')

// let action ='+'


// plusBtn.onclick = function(){
//   action ='+'
// }

// minusBtn.onclick = function(){
//   action = '-'
// }

// function printResult (result){
//   if (result < 0){
//       resultElement.style.color = 'red'
//     } else {
//       resultElement.style.color = 'green'
//     }
//     resultElement.textContent = result
// }

// function computeNumbersWithAction (inp1, inp2, actionSymbol) {
//   const num1 = +(inp1.value) 
//   const num2 = +(inp2.value) 

// const result = actionSymbol == '+' ? num1 + num2 : num1 - num2 
// console.log(result)
// return result
// }


// submitBtn.onclick = function (){

//   const result = computeNumbersWithAction (input1, input2, action)
//   printResult (result)
//   if (action == '+') {
//     const sum = Number(input1.value) + Number(input2.value)
//     printResult(sum)
//   } else if (action == '-') {
//     const sum = Number(input1.value) - Number(input2.value)
//     printResult(sum)
//   }
// }


// let a = {
//   name: 'name',
//   age: 1,
//   obg: {
//     one:1,
//     two:2,
//     obg2:{
//       test:1
//     }
//   }
// }

// let b ={}
// b = _.cloneDeep(a)
// a.obg.obg2.test = 2
// console.log(a.obg.obg2.test)
// console.log(b.obg.obg2.test)

// console.log(location)


// const storageKey = 'snow'
// const snow = document.querySelector('.snow')
// const snowflakes = document.querySelectorAll('.snow__flake')
// const snowToggle = document.querySelector('.snow-toggle')

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min
// }

// function getRndFloat(min, max) {
//   return (Math.random() * (max - min) + min).toFixed(1)
// }

// snowflakes.forEach(snowflake => {
//   snowflake.style.fontSize = getRndFloat(0.7, 1.5) + 'em'
//   snowflake.style.animationDuration = getRndInteger(20, 30) + 's'
//   snowflake.style.animationDelay = getRndInteger(-1, snowflakes.length / 2) + 's'
// })

// function changeSnowAnimation(animationName) {
//   snow.style.setProperty('--animation-name',  animationName)
// }

// snowToggle.addEventListener('change', event => {
//   changeSnowAnimation(event.target.value)
//   localStorage.setItem(storageKey, event.target.value)
// })

// document.addEventListener('DOMContentLoaded', () => {
//   let currentStorage = localStorage.getItem(storageKey)

//   if (currentStorage) {
//     snowToggle.querySelector(`.snow-toggle__control[value='${currentStorage}']`).checked = true
//   }

//   changeSnowAnimation(currentStorage)

//   window.addEventListener('storage', () => {
//     changeSnowAnimation(localStorage.getItem(storageKey))
//   })
// })



// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// const calculator = {
//   read: function(a,b){
//     this.numA = a;
//     this.numB = b;
//   },
//   sum: function(a,b){
//     return this.numA+this.numB;
//   },
//   mul: function (a,b){
//     return this.numA*this.numB;
//   },
// }
// calculator.read(2,3);
// console.log(calculator)
// console.log( calculator.sum() );
// console.log( calculator.mul() );


// let ladder = {
//   step: 0,
//   up() {
//      this.step++;
//      return this
//   },
//   down() {
//      this.step--;
//      return this
    
//   },
//   showStep: function() { // показывает текущую ступеньку
//       console.log( this.step );
//       return this
//   }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0



// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0



// function A() { 
 
//   return window
  
//  }
// function B() {
//   return window
//  }

// let a = new A();
// let b = new B();

// console.log( a == b ); // true



// function User() {
//   console.log(new.target);
// }

// // без "new":
// User(); // undefined

// // с "new":
// new User(); 





// function Accumulator(startingValue,num){
//   this.value = startingValue,
//   this.read = function() {
//     return this.value += num 
//   }


// }



// let accumulator = new Accumulator(1,1); // начальное значение 1

// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// console.log(accumulator.value); // выведет сумму этих значений




// const a = {
//   num: 1
// }

// console.log(Object.getOwnPropertyDescriptors(window))

// function sum(a, b) {
//   return a + b
// }

// let a1 = 2
// let a2 = 3
// let a3 = sum(a1, a2)
// // 5
// console.log(a3)
//  a1 = 22
//  a3 = sum(a1, a2)
//  console.log(a3)



// let user = {
//   name: "Вася"
// };

// let id = Symbol("id");

// user[id] = 1;

// let id = Symbol("id");


// console.log( user[id] )



// function past(){
//   const elem = document.getElementById('submit')

// const car = {
//   name: 'Hendai Solaris',
// 	type: 'sedan',
// 	maxSpeed: '320',
// 	color: 'red',
// }

// return elem.insertAdjacentHTML("afterend", `
// <article>
//     <div>
//         <h2>${car.name}</h2>
//         <span>${car.type}</span>
//     </div>
//     <div>
//         <span>Maximum speed:${car.maxSpeed}</span>
//         <span>320</span>
//     </div>
//     <div>
//         <span>Color: ${car.color}</span>
//         <span>red</span>
//     </div>
// </article>
// `)
// }


// past()

Необходимо написать функцию countWords(), которая принимает предложение и подсчитывает количество слов в нем.

const sentence = "Hello, how are you?";
console.log(countWords(sentence)); // 4