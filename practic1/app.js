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

// let a = parseFloat("10#")
// let b = parseInt("10#")

// console.log(+(a + b).toFixed(1))

// console.log( +(a + b).toFixed(1) === 0.3 )

// console.log(a===b)

// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// Запустить демо

// P.S. Есть «подводный камень» при работе с типами.

//  let a = +(prompt("ferst num", 1))
//   let b = +(prompt("second", 1))
//   alert(a+b)
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

// function readNumber(){
//   let a
//   let b = prompt("print num", "")
//   if (b === null || b===''){
//     a = null
//   } else {
//     a = +b
//   }
//   if((Number.isNaN(a)) ){
//   readNumber()
// } else if ( a === null){
//   return null
// } else return console.log(  a)
// }
// readNumber()

// let a = +(prompt("print num", 1))
// console.log(+(null))

// let qwe = prompt("print num", 1)
// console.log(qwe==='')

// let i = 0;
// while (i < 11) {
//   i += 0.2;
//   if (i > 9.8 && i < 10.2) console.log( i );
// }

// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

// Пример работы функции:

// console.log( random(1, 5) ); // 1.2345623452
// console.log( random(1, 5) ); // 3.7894332423
// console.log( random(1, 5) ); // 4.3435234525

// function random(min, max){
// let a = Math.random() *10

// let x = min
// let y = max

// if (a<min){
//   random(min, max)
// } else if (a>= (max)){
//   random(min, max)
// } else return console.log(a)

// }

// random(1,5)

// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

// Пример работы функции:

// function randomInteger(min, max){
//   let a = Math.random() *10

//   let x = min
//   let y = max

//   if (a<min){
//     randomInteger(min, max)
//   } else if (a> (max+1)){
//     randomInteger(min, max)
//   } else return console.log(Math.floor(a))

//   }

//   randomInteger(1,3)

// const sentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolore eius, enim vitae doloremque optio veniam eum magnam voluptatum error eligendi voluptatibus provident accusantium corrupti unde accusamus quo!";

// function countWords(sentence){

//   const a = sentence.split(` `)

//   return console.log(a.length)

// }

// console.log(countWords(sentence)); // 4

// const fullName = "John Doe Array Strin";

// function getInitials(fullName){
// const arrayString = fullName.split(` `)

// let newArray =[]

// for (key of arrayString) {
//   let a = `${key.at(0)}.`
//   newArray.push(a)
// }
//   return newArray.join(' ')
// }

// const initials = getInitials(fullName);
// console.log(initials); // "J. D."

// function generateGoogleString(number){

// let newArray =[]
// if(number>=1){
// for(let i = 0; i<number-2; i++){
//   newArray.push('O')
// }
// let a = newArray.join('')

//   return `goo${a}gle`

// } else return 'Google'
// //
// }

// console.log(generateGoogleString(4));
// // Goooogle

// console.log(generateGoogleString(0));
// // Google

// console.log(generateGoogleString(-2));
// // Google

// const str = "Hello, Привет!";

// function countVowels(str){
//  let counter = 0

//  for (key of str.split('')){
//   if (key === "а"){
//     counter++
//   } else if (key === "А"){
//     counter++
//   } else if ( key === "и"){
//     counter++
//   }else if (key === "И"){
//     counter++
//   } else if ( key === "е"){
//     counter++
//   }else if (key === "Е"){
//     counter++
//   } else if ( key === "ё"){
//     counter++
//   }else if (key === "Ё"){
//     counter++
//   } else if ( key === "о"){
//     counter++
//   }else if (key === "О"){
//     counter++
//   } else if ( key === "у"){
//     counter++
//   }else if (key === "У"){
//     counter++
//   } else if ( key === "ы"){
//     counter++
//   }else if (key === "Ы"){
//     counter++
//   } else if ( key === "э"){
//     counter++
//   }else if (key === "Э"){
//     counter++
//   } else if ( key === "ю"){
//     counter++
//   }else if (key === "Ю"){
//     counter++
//   } else if ( key === "Я"){
//     counter++
//   }else if (key === "Я"){
//     counter++
//   } else if ( key === "a"){
//     counter++
//   }else if (key === "A"){
//     counter++
//   } else if ( key === "e"){
//     counter++
//   }else if (key === "E"){
//     counter++
//   } else if ( key === "i"){
//     counter++
//   }else if (key === "I"){
//     counter++
//   } else if ( key === "o"){
//     counter++
//   }else if (key === "O"){
//     counter++
//   } else if ( key === "u"){
//     counter++
//   }else if (key === "U"){
//     counter++
//   } else if ( key === "y"){
//     counter++
//   }else if (key === "Y"){
//     counter++
//   } else counter = counter
//  }
//  return counter
// }

// console.log(countVowels(str)); // 4

// function sumNumbers(...args){
// let sum = 0
// for (let arg of args){
//   sum += arg
// }
// return sum
// }
// const result1 = sumNumbers(1, 2, 3, 4, 5);
// const result2 = sumNumbers(10, 20, 30);
// console.log(result1); // 15
// console.log(result2); // 60

// function findMaxValue(params) {
//   if (params.length === 0){
//     return undefined
//   } else {
//     let maxNum = 0
//     for (num of params){
//       if (num>maxNum){
//         maxNum = num
//       }
//     }
//     return maxNum
//   }
// }

// const numbers1 = [1, 2, 3, 4, 5];
// const max1 = findMaxValue(numbers1);
// console.log(max1); // 5

// const numbers2 = [10, 20, 5, 30, 15];
// const max2 = findMaxValue(numbers2);
// console.log(max2); // 30

// const emptyArray = [];
// const maxEmpty = findMaxValue(emptyArray);
// console.log(maxEmpty); // undefined

// function calculateAverage(params) {
//     if (params.length === 0){
//     return 0
//   } else {
//     let maxNum = 0
//     for (num of params){
//       maxNum += num
//     }
//     return maxNum/params.length
//   }
// }

// const numbers1 = [1, 2, 3, 4, 5];
// console.log(calculateAverage(numbers1)); // 3

// const numbers2 = [10, 20, 30, 40, 50];
// console.log(calculateAverage(numbers2)); // 30

// const emptyArray = [];
// console.log(calculateAverage(emptyArray)); // 0

// Задание #4

// Напишите функцию isPalindrome(), которая принимает строку и возвращает true, если она является палиндромом, иначе — false.

// Примечание. Палиндром — строка, которая читается одинаково слева направо и справа налево.

// function isPalindrome(string){
//   let array =[]
//   for (let char of string){
//     array.push(char)
//   }
//   let boolean = []
//   for (let i=0; i<array.length; i++){
//     if(array[i] === array.at(-(i+1))){
//       boolean.push(true)
//     } else boolean.push(false)
//   }
// return !(boolean.includes(false))
// }
// console.log(isPalindrome('level')); // true
// console.log(isPalindrome('radar')); // true
// console.log(isPalindrome('hello')); // false

// function removeDuplicates(array) {
// newArray =[]
//   for (let i of array){
//     if(!(array.includes(i) === newArray.includes(i)))
//     {
//     newArray.push(i)
//     }
//   }
//  return newArray
// }

// const numbers1 = [1, 2, 3, 3, 4, 5, 5];
// console.log(removeDuplicates(numbers1));  // [1, 2, 3, 4, 5]

// const numbers2 = [10, 20, 30, 30, 40, 40, 50];
// console.log(removeDuplicates(numbers2));  // [10, 20, 30, 40, 50]

// const emptyArray = [];
// console.log(removeDuplicates(emptyArray));  // []

// Задание #6

// Создайте функцию createCounter(), которая принимает начальное значение и возвращает три функции:

// inc() — увеличивает значение на 1;
// dec() — уменьшает значение на 1;
// get() — возвращает текущее значение.
// Пример использования функции:

// function createCounter(a) {

//    return {

//    inc(){return ++a} ,
//    dec(){return --a} ,
//    get(){return a } ,

//    }

// }

// let { inc, get, dec } = createCounter(5);

// console.log(get()); // 5
// console.log(inc()); // 6
// console.log(inc()); // 7
// console.log(inc()); // 8
// console.log(dec()); // 7
// console.log(get()); // 7

// console.log("j".codePointAt(0) )
// console.log(String.fromCodePoint(77))

// let str = '';

// for (let i = 65; i <= 220; i++) {
//   str += String.fromCodePoint(i);
// }
// console.log(str)

// console.log( 'qwerty'.localeCompare('qwerty'))

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

//

// function ucFirst(str){

//   return (str[0].toUpperCase() + str.slice(1))
// }

// console.log(ucFirst("петя"))

// Напишите функцию , возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// function checkSpam(str){

//   a = str.toLowerCase()

//   if ((a.includes('viagra')) || a.includes('xxx')){
//     return true
//   } else return false

// }

// console.log(checkSpam('buy ViAgRA now') )
// console.log(checkSpam('free xxxxx'))
// console.log(checkSpam("innocent rabbit"))
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

// function truncate(str, maxlength){
//   if(str.length === maxlength || str.length < maxlength ){
//     return str
//   } else if (maxlength < str.length ) {

//     return (str.slice(0,maxlength-1) + '…')
//   } else return str
// }

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
// console.log(truncate("Всем привет!", 20))

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

//

// function extractCurrencyValue(str){

//   if(str.startsWith("$")){
//     return +(str.slice(1))
//   } else return str

// }

// console.log( extractCurrencyValue('$160'))

// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

// Например:
// function getMaxSubSum(arr) {
//   let maxSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let sumFixedStart = 0;
//     for (let j = i; j < arr.length; j++) {
//       sumFixedStart += arr[j];
//       maxSum = Math.max(maxSum, sumFixedStart);
//     }
//   }

//   return maxSum;
// }

// console.log(getMaxSubSum([-1, 2, 3, -9]))
// console.log(getMaxSubSum([2, -1, 2, 3, -9]))
// console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
// console.log(getMaxSubSum([-2, -1, 1, 2]))
// console.log(getMaxSubSum([100, -9, 2, -3, 5]))
// console.log(getMaxSubSum([1, 2, 3]))
// console.log(getMaxSubSum([-1, -2, -3]))

// console.log( 1 - 1 )
// console.log( 1*1)
//  == 5
//  == 6
//  == 11
//  == 3
//  == 100
//  == 6
//  = 0

// function camelize(string) {
//   try {
//     let newArray = string.toLowerCase().split('-');
//     if (newArray[0] === '') {
//       newArray.shift();

//       let finalArray = [];
//       for (let i of newArray) {
//         let a = '';
//         a = i[0].toUpperCase() + i.slice(1);

//         finalArray.push(a);
//       }

//       let finalString = finalArray.join('');

//       return finalString;
//     }
//     let finalArray = [];
//     for (let i of newArray) {
//       let a = '';
//       a = i[0].toUpperCase() + i.slice(1);

//       finalArray.push(a);
//     }

//     let finalString = finalArray.join('');

//     finalString = finalString[0].toLowerCase() + finalString.slice(1);
//     return finalString;
//   } catch (error) {
//     return '';
//   }
// }

// console.log(camelize(''));
// console.log(camelize('list-style-image'));
// console.log(camelize('-webkit-transition'));

/*
 == 'backgroundColor';
 == 'listStyleImage';
 == 'WebkitTransition';
*/

// важность: 4
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// function filterRange(arr, a, b){

//   newArray =[]

//   arr.forEach(el => {

//     if (el>=a && el<=b){
//       newArray.push(el)
//     }

//   });
// return newArray
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (совпадающие значения)

// console.log( arr ); // 5,3,8,1 (без изменений)

// Напишите функцию , которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// function filterRangeInPlace(arr, a, b){
//    newArr = arr.slice()
//    newNewArr = []

//   for (let i=0; i< arr.length; i++){
//   if(newArr[i] <= b && newArr[i] >= a ){

//     newNewArr.push(newArr[i])
//   }
//   }
//   arr.splice(0, arr.length, ...newNewArr)

// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// console.log( arr ); // [3, 1]

// ... ваш код для сортировки по убыванию

// function arSort(a,b){
//  a-b

// // }
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a )
// // arr.reverse()

// console.log( arr ); // 8, 5, 2, 1, -10

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// function copySorted(arr){
//   newAr = arr.slice()
//   newAr.sort()
//  return newAr
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (без изменений)

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// function Calculator(){

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.calculate = function(str) {

//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2]

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   }

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };

// }
// let calc = new Calculator;
// console.log( calc.calculate("3 + 7") ); // 10

// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// console.log( result ); // 8

// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped=[]

//  usersMapped = users.map(function addObj(item){

//   let a ={}
//   a.fullName = item.name + ' ' + item.surname
//  a.id = item.id
//  return a
//  })

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // Вася Пупкин

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let grisha = { name: "Гриша", age: 1 };

// let arr = [ vasya, petya, masha, grisha ];

// function sortByAge(arr){
// arr.sort(function(a, b) { return a.age - b.age; })
// }

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя
// console.log(arr[3].name)

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

// let arr = [1, 2, 3];

// function shuffle(arr){

//   arr.sort(function(a, b) {
//      return (a + (Math.random()*10)) - (b + (Math.random()*10)) })

// }

// shuffle(arr);
// // arr = [3, 2, 1]
// console.log(arr)
// shuffle(arr);
// // arr = [2, 1, 3]

// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// function getAverageAge(arr){

//   let a = 0
//   for (item of arr){
//     a = item.age + a
//   }
// a = a/arr.length
// return a
// }

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

// function unique(arr) {
//   finalArr = []
//   for (let item of arr){

//     if (!(finalArr.includes(item,0))){
//       finalArr.push(item)
//     }
//   }
//   return finalArr
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// console.log( unique(strings) ); // кришна, харе, :-O

// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

// Например:

// function groupById(arr) {
//   newOb = {}

//   for (let i = 0; i<arr.length;i++){
//     let a = arr[i].id
//        newOb[a] = (arr[i])
//   }
//   return  newOb
// }

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById  = groupById(users);
// console.log(usersById)

/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
// Такая функция очень удобна при работе с данными, которые приходят с сервера.

// В этой задаче мы предполагаем, что id уникален. Не может быть двух элементов массива с одинаковым id.

// Используйте метод .reduce в решении.

// reduce/reduceRight(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.

// let value = arr.reduce(function(accumulator, item, index, array) {
//   // ...
// }, [initial]);

// console.log(1)

// let map = new Map()

// const user = {
//   name: 'ivan',
//   age: 20,
// }

// map.set('car', 'tesla')
// .set(2, 100)
// .set(user, 10)

// console.log(map)
// console.log(map.get(user))
// console.log(map.size)

// let map = new Map([
//   [1,20],
//   ['key','stringValue']
// ])

// console.log(map.keys())

// let set = new Set()

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// console.log(set)
// for (let users of set){
//   console.log(users.name)
// }

// const values = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"]

// function unique(arr) {

//   return Array.from(new Set(arr))
// }

// unique(values)

// let arr = ["ear", "era", ];

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr){

// let map = new Map()
// let set = new Set()
// for (a of arr){
//   set.add((a.toLowerCase().split('').sort().join('')))
// }
// for(let i of set){
//   for (let items of arr){
//   if(
//     (i.toLowerCase().split('').sort().join('')
//   ===(items.toLowerCase().split('').sort().join('')))
//   ){
//     map.set(`${i}`,`${items}`)
//   }
// }
// }
// return (Array.from(map.values()))

// }

// aclean(arr)

// "nap,teachers,ear" или "PAN,cheaters,era"

// let set = new Set()
// for (item of arr){
//   set.add((item.toLowerCase().split('').sort().join('')))
// }
// // Set(3) {'anp', 'aceehrst', 'aer'}

// for (i of set){
//     for (item of arr){
//       if((i.toLowerCase().split('').sort().join(''))===(item.toLowerCase().split('').sort().join(''))){
//         //
//         //
//       }
//     }
// }
// console.log(set)

// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// Например:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// function sumSalaries(salaries){
// let sum = 0
// let arr = Object.entries(salaries)
// for (let item of arr){
//  sum = sum + item[1]
//   // item.map(([key, value]) => [key, value * 2])

// }
//  return (sum)
// }

// console.log( sumSalaries(salaries) ); // 650

// Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//   name: 'John',
//   age: 30
// };

// function count(obj){
//   return Object.keys(obj).length
// }

// console.log( count(user) ); // 2
// Постарайтесь сделать код как можно короче.

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

// Напишите функцию calculateAge(), которая принимает день рождения и возвращает количество лет.

// const birthDate = new Date('1989-02-20');
// const age = calculateAge(birthDate);

// function calculateAge(birthDate){

//   const now = new Date()
//   const birthYear = now.getFullYear() - birthDate.getFullYear()
//   const birthMon = (now.getMonth() - birthDate.getMonth())+1

//   //new Date(1000*60*60*24*365)

//   let age = `${birthYear}let + ${birthMon}mes`

//  return  age
// }

// console.log(age);

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// // { sourceProperty: targetVariable }
// let {width = 150, height = 200, title} = options;

// // width -> w
// // height -> h
// // title -> title
// console.log(width)

// let user = {
//   name: "John",
//   years: 30
//   };

// let {name, years: age, isAdmin = false} = user

// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // false

// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250,
// };
// // Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// // Если объект salaries пустой, то нужно вернуть null.
// // Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// // P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

// function topSalary(salaries){
// if(Object.keys(salaries).length === 0){
//   return null
// }
// let map = new Map()
// for (let [key, value] of Object.entries(salaries)) {
//    map.set(key,value)
// }

// let num = 0

// for (let item of map.values()) {
//   for (let i of map.values()) {
//     if (item > num){
//       num = item
//     }
//   }
// }
// let name = ''

// map.forEach((value, key) => {

//   if (value === num){
//     name = key
//   }
// });
// return name
// }

// console.log(topSalary(salaries))

// let born = new Date('1989-02-24')

// let now = new Date()
// now.setHours(0)

// console.log(now)

// let date = new Date(2012, 0, 3);

// function getWeekDay(date){

//   switch(date.getDay()){
//     case 1:
//       return 'ПН'
//       break;
//     case 2:
//       return 'ВТ'
//       break;
//     case 3:
//       return 'СР'
//       break;
//     case 4:
//       return 'ЧТ'
//       break;
//     case 5:
//       return 'ПТ'
//       break;
//     case 6:
//       return 'СБ'
//       break;
//     case 0:
//       return 'ВС'
//       break ;}}

// console.log(getWeekDay(date))

// let date = new Date(2014, 0, 5)

// function getLocalDay(date){
//   switch(date.getDay()){
//     case 1:
//       return 1
//       break;
//     case 2:
//       return 2
//       break;
//     case 3:
//       return 3
//       break;
//     case 4:
//       return 4
//       break;
//     case 5:
//       return 5
//       break;
//     case 6:
//       return 6
//       break;
//     case 0:
//       return 7
//       break ;}}

// console.log(getLocalDay(date))

// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:

// let date = new Date(2015, 0, 2);

// function getDateAgo(date, days) {
//  let num = new Date(date)

//  num.setDate(num.getDate() - days)

//  return num.getDate()

// }
// // console.log(date)

// console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// // // P.S. Функция не должна изменять переданный ей объект date.

// console.log(date)

// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2);
// console.log(date)

// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// Параметры:

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

// function getLastDayOfMonth(year, month){

//    return new Date(year,month+1,0).getDate()

// }

// console.log(getLastDayOfMonth(2012, 1)) //29

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// function getSecondsToday(){
//   return (new Date().getSeconds())+(new Date().getMinutes()*60)+(new Date().getHours()*60*60)
// }

// console.log(getSecondsToday())
// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// function getSecondsToTomorrow(){
//   return (
//     60*60*24
//     )  -
// (
//     (new Date().getSeconds())+(new Date().getMinutes()*60)+(new Date().getHours()*60*60)
//     )

// }

// console.log(getSecondsToTomorrow())

// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

// function formatDate(date) {
//   let milisecNow =
//     new Date().getMilliseconds() +
//     1000 *
//       (new Date().getSeconds() +
//         new Date().getMinutes() * 60 +
//         new Date().getHours() * 60 * 60);

//   let milisecCheckFerst =
//     new Date(date).getMilliseconds() +
//     1000 *
//       (new Date(date).getSeconds() +
//         new Date(date).getMinutes() * 60 +
//         new Date(date).getHours() * 60 * 60);

//   let twoNumYearArr = Array.from(date.getFullYear().toString());
//   let twoNumYear = twoNumYearArr[2] + twoNumYearArr[3];

//   let twoNumDateArr = Array.from(date.getDate().toString());
//   let twoNumDate = [];
//   if (twoNumDateArr.length === 1) {
//     twoNumDate = '0' + twoNumDateArr[0];
//   } else {
//     twoNumDate = twoNumDateArr[0]+twoNumDateArr[1]
//   }

//   let twoNumMonthArr = Array.from((date.getMonth() + 1).toString());
//   let twoNumMonth = [];
//   if (twoNumMonthArr.length === 1) {
//     twoNumMonth = '0' + twoNumMonthArr[0];
//   } else {
//     twoNumMonth = twoNumMonthArr[0];
//   }

//   if (
//     milisecNow - milisecCheckFerst <= 999 &&
//     milisecNow - milisecCheckFerst >= 1
//   ) {
//     return 'прямо сейчас';
//   } else if (
//     milisecNow - milisecCheckFerst <= 59999 &&
//     milisecNow - milisecCheckFerst >= 1000
//   ) {
//     return `${(milisecNow - milisecCheckFerst) / 1000} сек. назад`;
//   } else if (
//     milisecNow - milisecCheckFerst <= 3599999 &&
//     milisecNow - milisecCheckFerst >= 60000
//   ) {
//     return `${(milisecNow - milisecCheckFerst) / 1000 / 60} мин. назад`;
//   } else {
//     return `${twoNumDate}.${twoNumMonth}.${twoNumYear} ${date.getHours()}:${date.getMinutes()}`;
//   }
// }

// console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

// console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

// console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// console.log(formatDate(new Date(new Date - 86400 * 1000)));















