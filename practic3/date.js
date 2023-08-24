// 'use strict'
// console.log('ddhhhhd');

// (function foo(){console.log('ddd')})()

// 'use strict'

// function logThis() {
//   console.log(this)
// }

// logThis()
// Выведет undefined

// function isPrime(n){
//   nextMetka:
//   for ( let i = 2; i<=n; i++){
//     for(let a = 2; a<i;a++){
//       if(i%a === 0){
//         continue nextMetka;
//       }
//     }
//   console.log(`${i}`)
//   }
// }

// isPrime(10)

// function isPrimeNumber(num){
//   let a = true
//   metka:
//   for(i=2; i<num; i++){
//     if(num%i ===0){
//       a = false
//       break metka;
//     }
//   }
//   if (a){
//     console.log(true)
//   }else{
//     console.log(false)
//   }
// }
// isPrimeNumber(11)

// function isPerfectNumber(num) {
//   let temp = 0;
//      for(let i=1;i<=num/2;i++) {
//            if(num%i === 0) {
//               temp += i;
//             }
//        }
//        if(temp === num && temp !== 0) {
//          console.log(true);
//           }
//         else {
//          console.log(false);
//           }
//    }

// console.log(isPerfectNumber(6));   // true
// console.log(isPerfectNumber(28));  // true
// console.log(isPerfectNumber(12));  // false
// console.log(isPerfectNumber(16));  // false

// Прежде всего, попроси пользователя ввести целое число, которое будет сохранено в переменной.
// Теперь мы объявим переменную под названием «сумма», где мы будем хранить сумму делителей данного числа.
// Следующая задача — использовать цикл for, в котором мы разделим наше число на число, инициализированное для переменной i, затем мы увеличим значение i и проверим, какие числа дают нам остаток как ноль. Эти числа и будут нашими делителями.
// Теперь мы возьмем каждый из делителей этого числа и сложим его с переменной «сумма». Наконец, мы будем использовать ключевое слово оператора решения ‘if’, чтобы сравнить число, указанное пользователем, со значением суммы. Если значения равны, мы отобразим результат как “true”, иначе мы отобразим “false”

// function isPerfectNumber(num) {
//   let sum = 0
//     for(i = 1;i < num/2; i++){
//       if(num%i === 0){
//         sum +=i
//       }
//     }
//     console.log(sum)
//     if(num === sum){
//       return true
//     }else return false
//    }
// console.log(isPerfectNumber(6));   // true
// console.log(isPerfectNumber(28));  // true
// console.log(isPerfectNumber(12));  // false
// console.log(isPerfectNumber(16));  // false

//    Алгоритм решения довольно простой:

// Перебираем в цикле все возможные целые числа от 1 до числа N.
// Каждый раз пытаемся делить число N на текущее число. Если оно делится без остатка, то текущее число является делителем числа N. Прибавляем его к итоговой сумме.



// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// const user = {};

// user.name = 'John'
// user.surname = 'Smith'
// user.name = 'Pete'
// delete user['name']
// console.log(user)

// let schedule = {};
// function isEmpty(obj) {

//     if(Object.getOwnPropertyNames(obj).length === 0){
//       return true
//     } else {
//       return false
//     }

// }
// console.log(isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule) ); // false

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function getSum(obj) {
//   let sum = 0;
//   if (Object.getOwnPropertyNames(obj).length === 0) {
//     return 0;
//   } else {
//     for (key in obj) {
//       sum = sum + obj[key];
//     }
//     return sum;
//   }
// }
// console.log(getSum(salaries));

// function multiplyNumeric(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] = obj[key] * 2;
//     }
//   }
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// console.log(menu);
// multiplyNumeric(menu);
// console.log(menu);
// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// Напишите функцию getNumberDigit(), которая принимает число (number) и индекс цифры в числе (digitPosition). Возвращает она цифру числа number, находящуюся на позиции digitPosition.

// Если происходит попытка чтения числа на позиции, которой не существует (например, кол-во цифр в числе меньше, чем передано в digitPosition), то верните undefined.

// Примечание. Нельзя использовать приведение числа к строке.

// function getNumberDigit(number, digitPosition) {
//   // Ваш код здесь...
// }

// function getNumberDigit(number, digitPosition) {

//   let result = [];

// do {
//     result.push(number % 10);
//     number = Math.floor(number / 10);
//   } while (number != 0);
//   result.reverse()

//   if(typeof result[digitPosition] === 'number'){
//   return console.log(result[digitPosition])
// }else{
//   return console.log(undefined)
// }
// }

// getNumberDigit(123, 0) // 1
// getNumberDigit(123, 1) // 2
// getNumberDigit(123, 2) // 3
// getNumberDigit(1, 2) // undefined

// const now = new Date();

// const start = new Date(1000 * 60 * 60 * 24 * 365 )

// const date = new Date(2011, 0, 4, 12, 42, 12)

// console.log(now.getFullYear())
// console.log((now.getMonth()+1))
// console.log(now.getDate())
// console.log(now.setHours(20))
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getMilliseconds())

// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleDateString())
// console.log(now.toLocaleTimeString())

// ========

// let mode = 'full'
// const output = document.getElementById('output');
// const fullBtn = document.getElementById("full");
// const dateBtn = document.getElementById("date");
// const timeBtn = document.getElementById("time"); 

// // const now = new Date()
// function bindMode(name) {
//   return function(){
//     mode = name
//     update()
//   }
// }

// fullBtn.onclick = bindMode('full')
// dateBtn.onclick = bindMode("date")
// timeBtn.onclick = bindMode("time")

// setInterval(update, 1000)
// update()

// function update(){
//   output.textContent = format(mode)
// }

// function format(formatMode){
//   const now = new Date()

//   switch(formatMode){
//       case 'time' : return now.toLocaleTimeString() +" "+ now.getMilliseconds()
//       case 'date' : return now.toLocaleDateString()
//       case 'full' : return now.toLocaleDateString() +
//   "   " + now.toLocaleTimeString ()
//       default: return now.toLocaleTimeString()
// }
// }