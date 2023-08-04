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
