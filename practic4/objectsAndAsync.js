// const person = {
//   name: 'Vladlen',
//   age: 29,
//   isYoutuber: true,
//   languages: ['ru', 'en'],
//   address: {
//     city: 'Saint-Petersburg',
//     street: 'Nevsky',
//   },
//   'complex key': 'complex value',
//   ['key_' + 21 * 2]: 'computed value',
//   greed() {
//     console.log('Greed from person');
//   },
//   arrow: () => {
//     console.log('Person Arrow');
//   },
//   info() {
//     console.log('Person name is', this.name);
//   },
// };
// person.greed()
// person.arrow()
// person.info()
// console.log( person)
// person.age++
// person.languages.push('de')
// console.log(person.languages)
// person.address = undefined
// console.log(person.address)
// delete person.address

// const age = person.age
// const name = person.name
// const languages = person.languages

// const name = 'Petr'

// const {age, name: firstName = 'TEST', languages } = person

// console.log(age, firstName, languages)

// for (let key in person){
//   if(person.hasOwnProperty(key)){
//   // console.log(person[key])
//   }
// }

// Object.keys(person).forEach(key =>{
//   console.log(person[key])
// })


// const logger={
// keys(){
//   console.log('object keys', Object.keys(this))
// },

// keysAndValues(){
// Object.keys(this).forEach(key =>{
//   console.log('Keys is: ', key);
//   console.log('Values is: ', this[key]);
// })
// }
// }

// const bound = logger.keysAndValues.bind(person)()

// logger.keys.apply(person)

// class Human {
//   static isHuman = true

//   humanGreet(){
//     console.log('Greet from Human', this.name)
//   }
// }

// class Person extends Human {
//   constructor(name, age){
//     super()
//     this.name = name ?? 'undefined name'
//     this.age = age ?? 'undefined age'
//   }

// sayHello(){
//   console.log('Hello from', this.name)
// }

// }

// const Person1 = new Person('vladilen', 29)

// const Person2 = new Person('Elena', 21)

// // console.log(Person1.age)

// // Person1.sayHello()
// // Person2.sayHello()

// console.log(Person1.isHuman)
// console.log(Person.isHuman)

// Person1.humanGreet()


  // setTimeout(()=>{
  //   console.log(1)
  // }, 1000)
  // const timeout = setTimeout(()=>{
  //   console.log(2)
  // }, 2000)

  // clearTimeout(timeout)


// let count = 0

//  setInterval(()=>{
//   console.log('tick', ++count)
//  },1000)


// function delay(callback, time = 1000){
// setTimeout(callback, time)
// }


// // delay(()=>{
// //   console.log('qwerty')
// // },2000)

// const delay = (time = 1000) =>{
//   const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve([1,2,3])
//       // reject('error in delay')
//     },time)
//   })
//   return promise
// }

// delay(1000).then((data)=>{
//   console.log('hello',data)
//   return data.map((x)=>x ** 2)
// })
// .then(data =>{
//   console.log(data)
// }).catch((err)=>{
//   console.log(err)
// }).finally(()=>{
//   console.log('finally')
// })

// const getData = () => 
// new Promise((resolve)=>resolve([1,2,3]))

// // getData().then(array => console.log(array))

// async function asyncExample(){
//   try{
//     await delay(3000)
//     const data = await getData()
//     console.log(data)
//   } catch(err) {
//     console.log(err)
//   } finally {
//     console.log('finally')
//   }
// }

// asyncExample()




















