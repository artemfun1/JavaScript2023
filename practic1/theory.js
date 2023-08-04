// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return console.log('А родители разрешили?');
//   }
// }

// let age = 18;

// function showMovie(age) {
//   if (!checkAge(age)) {
//     console.log('return');
//     return;
//   }

//   console.log('Вам показывается кино');
// }

// showMovie(age);

// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     console.log(i);  // простое
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if ( n % i == 0) return false;
//   }
//   return true;
// }

// showPrimes(10)

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// function checkAgee(age) {
//   return (age >18) ? true : confirm('Родители разрешили?')
// }
// function checkAgeee(age) {

//   return (age > 18) || confirm('Родители разрешили?')
// }

// function min(a, b) {
//    a < b ? console.log(a) : console.log(b);
// }
// min(2,5)
// min(-4,-1)
// min(1,1)

// function min(a,b){
//   if (a<b)  console.log(a)
//   console.log(b)
// }

// let pow = function(x,n){
//    y = x**n
//   console.log(y)
// };

// pow(3, 2)
// pow(3, 3)
// pow(2, 2)
// pow(157454, 59)

// let ask = function(question, yes, no){

// }

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

// () => { alert("Вы согласились."); },
// () => { alert("Вы отменили выполнение."); }

// describe("pow", function(){

//   it("возводит в степень n", function() {
//     assert.equal(pow(2, 3), 8);
//   });

// });

// function pow (x, n){
//   return x**n;
// };

// console.log( pow(2,2) );

// console.log( typeof 'Hello')
// console.log( typeof 10)
// console.log( typeof {})
// console.log( typeof null)
// console.log( typeof undefined)
// console.log( typeof true)
// console.log( typeof [])
// console.log( typeof (() => {}))

// console.log(10 == 10);
// console.log(10 != 10);
// console.log(12 == 'Привет');
// console.log(10 < 11);
// console.log(12 > 20);
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false || true);
// console.log(true || false);
// console.log(true || true);
// console.log(10 <= 10);
// console.log(18 <= 20);
// console.log(50 >= 50);
// console.log(51 >= 50);
// console.log({} === {});
// console.log({} == {});


// const a = {};
// const b = a;
// console.log( a === b);



// const productName = 'Сахарок';
// const productPrice = 10;
// const productQuantity = 2;
// const resultCost = 20;

//   console.log(
//     `Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} ₽. 
//     Всего было потрачено: ${resultCost} ₽`
//   )


// Задание #6

// Создайте переменную a и b, присвойте им любые числа.

// Если a больше b, выведите в консоль true, иначе — false. 

// Примечание. Нельзя использовать if...else и тернарный оператор. 


// const a = 1;
// const b = 2;
//  console.log((a > b) && (1 > 0)) 


// let a = 1000;
// for (i = 0; i <= a; i++){
// if(i % 2 == 0){
//   console.log(` ${i} Число четное`)
// } if (i % 12 == 0) {
//   console.log(` ${i} Число кратно 12`)
// } else {
//   continue;
// }
// }
