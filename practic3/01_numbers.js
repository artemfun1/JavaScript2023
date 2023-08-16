// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3
// const big = 1_000_000
// const negative = -10

// const strInt = "42"

// const strFloat = '42.42'

// console.log(+strInt, strFloat)

// console.log(0.1 + 0.2)

// console.log((0.1 + 0.2).toFixed(1))

//BigInt

// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 3455433344555545554n)


// console.log(typeof (Number(-42n)))

// console.log(Math.E)

// console.log(Math.PI)

// console.log(Math.sqrt(5625 ))

// console.log(Math.abs(-42))
// console.log(Math.min(2, 5, 42, 199, 0))

// const myNum = 4.9

// console.log(Math.floor(myNum))
// console.log(Math.ceil(myNum))
// console.log(Math.round(myNum))
// console.log(Math.trunc(myNum))
// console.log(Math.random())

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max-min +1) + min)

// }

// const newNum = getRandomNumber(10, 100);

// console.log(newNum)


//Strings


// const age = 18

// function getAge(){
//   return age
// }

// const output = `Hello my name is ${getAge() >18 ? 'Can drive' : `Can\`T drive` }`

// console.log(output)

// const firstName = "Vladilen"

// console.log(firstName.length)
// console.log(firstName.toUpperCase())
// console.log(firstName.toLowerCase())
// console.log(firstName.charAt(2))
// console.log(firstName.indexOf('a'))
// console.log(firstName.toLowerCase().startsWith("vla"))
// console.log(firstName.endsWith("en"))
// console.log(firstName.toUpperCase().repeat(2))

// const password = '    my super pass    '
// console.log(password.trim())
// console.log(firstName)



// Function Declaration



// function greet(name) {

// console.log('Hello -',name)
// }


// const greet2 = function(name) {
// console.log('2 Hello ', name)
// }
// greet('qwerty')
// greet2('qwerty')
 

// setTimeout(function() {
//   greet('fff')
// }, 2000)
// let counter = 0
// const interval = setInterval(function() {
//      if (counter === 5){
 
//  clearInterval(interval)
//      } else{
//       ++counter
//       console.log(counter)
//      }

  //  }, 1000 )

   

// function greet(name, age) {

//   console.log('Hello -',name, age)
//   }

//   const arrow = (name,age) =>console.log('Hello -',name,age)

// function pow(num, exp){
//   return Math.pow(num, exp)
// }

// const pow2 = (num, exp) =>
//  Math.pow(num, exp)

// arrow('ssd', 12)

// console.log(pow(2,2))
// console.log(pow2(2,2))


// ===== Default Parameters

// const sum = (a = 40,b = a /2) => a+b



// function sumAll(...numbers){
// console.log(numbers.length)
// let res = 0
// for (let num of numbers){
//   res += num
// }
// return numbers.reduce(
//   function (acc, cur)
// {return acc += cur},0)


// }

// console.log(sumAll(1,1,1,1,2))

// const usernamesById = users.reduce(function (result, user) {
//   return {
//     ...result,
//     [user.id]: user.name,
//   }
// }
// , {})

// const users = [
//   { id: '123', name: 'John' },
//   { id: '345', name: 'Anna' },
//   { id: '567', name: 'Kate' },
//   { id: '789', name: 'Jane' }
// ]

// function groupNameById(result, user) {
//   return {
//     ...result,
//     [user.id]: user.name
//   }
// }


// console.log(users.reduce(groupNameById,{}))




// Closures


// function createPersone(name){

//   return function(lastname){
//     console.log(name+ ' h ' +lastname)
//   }
// }

// const addLastName = createPersone('Vladilen')

// addLastName('llll')