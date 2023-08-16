// const names = ['Ноль',  'Один', 'Два','Тры']

// names.push('Алена')
// names.unshift('Алена')
// const firstName = names.shift()
// const firstName = names.pop()
// console.log(firstName)
// console.log('Names: ', names)

// console.log(names.toSorted())

// console.log('Names: ', names)
// console.log(naxmes.reverse())

// console.log(names.toSpliced(0,1))

// const names = ['Ноль',  'Один', 'Два','Тры'];

// console.log('Names: ', names);

// const dva = 'Два';

// index = names.indexOf(dva);

// console.log(index);

// console.log(names[index]);
// names[index] = ' nolnol';
// console.log('Names: ', names);
// const namess = names.with(index, 'olololo')
// console.log(names)
// console.log(namess)

// const capitalName =  names.map( function(name, index){
//   if (index === 2){
//     return 'ololo'
//   }
//   return name
// })

// console.log(names);
// console.log(capitalName);

// console.log(names.includes('Два'))

// console.log(people.indexOf({budget: 300}))
// let finddedPerson
// for (let person of people){
//   if (person.budget === 7520){
//     finddedPerson = person
//   }
// }
// console.log(finddedPerson)

// const finded = people.find(
//   (p) => p.budget  === 7520

// )

// const finded = people.findIndex( function(person){
//     return person.budget === 7520
// })

// console.log(people.copyWithin())

// const filtered = people.filter(function(p){
//   return p.budget > 5000;

// })

// console.log(people)

// console.log(filtered)

// filtered.forEach( function(p){
//   sumBudget += p.budget
// })

// const people = [
//   {name: 'Vladilen', budget: 4200},
//   {name: 'Elena', budget: 15200},
//   {name: 'Igor', budget: 300},
//   {name: 'Ksenia', budget: 7520}
// ]

// let sumBudget = people.filter((p) => p.budget > 5000).map((p) => p.budget).reduce((acc, p ) => acc + p, 0 )

// console.log(sumBudget)

// const string = 'Привет, как дела?'

// const reversed = string
// .split('')
// .toReversed()
// .join('!')
// .split('')
// .filter((c)=> c !== "!")
// .join('')

// console.log(reversed)

// Создайте массив со значениями [1, 10, 15, -100, -23, 19, 15032].
// Получите из него новый массив, в котором каждый элемент будет увеличен на 25%.
//for ech Выведите оба массива в консоль.

// const array = [1, 10, 15, -100, -23, 19, 15032];

// const newArray = array.map((num)=> num+(num*25/100) )

// console.log(array)
// console.log (newArray)

// const myArray = [4, 2, 8, 7, 3, 1, 0];
// console.log(myArray); // [4, 2, 8, 7, 3, 1, 0]
// const myArray2 = myArray.map(item => item * 2);
// console.log(myArray2);// [8, 4, 16, 14, 6, 2, 0]
// const myArray3 = myArray2.sort((a, b) => a - b);
// console.log(myArray3); // [0, 2, 4, 6, 8, 14, 16]

// Создайте функцию, объявленную с помощью ключевого слова function, с именем sayHello(). Она принимает в параметры name и возвращает строку вида: "Hello, {name}!".

// Если функция была вызвана без указания name, то выведите строку "Hello, someone!".

// Закомментируйте функцию и напишите аналогичную, но в виде стрелочной функции.

// function sayHello(name){
//   if (name == undefined){
//     console.log("Hello, someone!")
//   }
//   else {console.log(`Hello ${name}`)}
// }
// let sayHello = (name) => {
//   if (name == undefined){
//     console.log("Hello, someone!")
//   }
//   else {console.log(`Hello ${name}`)}
// }

// sayHello()

// function calc(a, b, operation) {
//   return eval(+`${a}` +  operation  +`${b}`)
// }
// console.log(calc(1, 2, '+')); //3
// console.log(calc(1, 2, '-')); //=1
// console.log(calc(2, 2, '*')); //4
// console.log(calc(4, 2, '/')); //2

// Задание #6

// Создайте переменную age, присвоив ей числовое значение.
// Создайте переменную category, присвоив ей с помощью тернарного оператора значение:
// "Взрослый" — если age больше или равно 18
// "Детский" — если age меньше 18
// // Выведите переменные в консоль.

// let age = 17;
// let category = age >= 18 ? "Взрослый" : "Детский";
// console.log(age);
// console.log(category);

// Задание #7

// Создайте переменные a и b с числовыми значениями.
// Создайте переменную c, в которую с помощью тернарного оператора
//  присвоите наибольшее значение (или a, или b).
// Выведите значение c в консоль.

// const a = 5;
// const b = 10;

// let c = a>b? a : b;
// console.log(c)

// Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем, возрастом и именем питомца соответственно.

// Создайте функцию, которая в параметры принимает объект человека (john или ann), и в качестве результата выводит информацию о нем в консоль:

// “Меня зовут {name}, мне {age}, у меня есть питомец {pet}”

// Создайте функцию incrementAge(), которая в параметры принимает объект человека и увеличивает ему возраст на 1.

// Выведите циклом все названия свойств и их значения, которые есть у объекта john.

// const john = {
//   name: 'john',
//   age: 20,
//   pet: 'sharik'
// }

// const ann = {
//   name: 'ann',
//   age: 21,
//   pet: 'murzik'
// }

// function seeHuman(people){
//   console.log(`Меня зовут ${people.name} , мне ${people.age}, у меня есть питомец ${people.pet}`)
// }
// seeHuman(ann)

// function incrementAge(people){
//   console.log(people.age )
//   people.age = people.age + 1
//   console.log(people.age )
// }

// for (i in john){
//   console.log(i + john[i])
// }

// const empty = []
// const someNums = [1, 2, 3]

// console.log(empty.forEach)
// // Выведет функцию
// console.log(someNums.forEach)
// // И здесь тоже
// console.log(window)

// const arr = [1, 50, 20, 75, 90]
// function sum(array){
//   sumNum = 0
// array.forEach( function (num) {
//   sumNum += num
// })
// console.log(sumNum)
// }
// sum(arr)

// Задание #3

// Создайте пустой массив names.
// Добавьте в него 5 любых имен.
// Выведите массив в консоль.
// Уберите из начала и конца массива по 1 элементу.
// Снова выведите массив в консоль.

// const names =['Vika', 'Vlad', 'Vova', 'Nikita', 'Artem']
// console.log(names)
// names.pop()
// console.log(names)
// names.shift()
// console.log(names)

// Дан массив names. Необходимо сделать функцию, которая на основе этого массива
// генерирует строку c HTML. Она представляет из себя список элементов (<ul>), где каждый
//   элемент списка (<li>) содержит элемент массива.

// const listElement = document.getElementById('list');
// const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];
// for (let name of names) {
//   console.log(name);
//   listElement.insertAdjacentHTML(
//     'beforeend',
//     `
//       <li
//         class="list-group-item d-flex justify-content-between align-items-center"
//         >
//         <span>${name}</span>
//       </li>
//     `
//   );
// }

// const obj = {
// 	age: 22,
// 	favColor: 'red',
// 	height: 188,
// 	pet: 'dog',
// 	money: 12300
// };
// let { age, favColor, height, pet, money} = obj
// console.log(age)
// console.log(favColor)
// console.log(height)
// console.log(pet)
// console.log(money)

// const obj = {
// 	age: 22,
// 	favColor: 'red',
// 	height: 188,
// 	pet: 'dog',
// 	money: 12300
// };

// const updateObj = {
// 	age: 23,
// 	favColor: 'blue',
// 	money: 11450
// };

// const copyObj = {...obj, ...updateObj}
// const obj2 = structuredClone(copyObj)
// console.log(obj2);

/**
 * {
 *	age: 23,
 *	favColor: 'blue',
 *	height: 188,
 *	pet: 'dog',
 *	money: 11450
 * }
 */
// Необходимо создать новый объект obj2, в котором будут все поля объекта obj, но с обновленными значениями полей как у объекта updateObj. 

// Здравствуйте. Прохожу курс основы JavaScript, задание "7. Теоретическая база JS, ч. 3",
// Задание #6:

// Создайте функцию createCounter(), которая принимает начальное значение и возвращает три функции:

// inc() — увеличивает значение на 1;
// dec() — уменьшает значение на 1;
// get() — возвращает текущее значение.

// Не могу разобраться как решить

// function createCounter(i){
//   let inc = (i) => i+1
//   let dec = (i) => i-1
//   let get = (i) => i
//   return console.log(inc(i), dec(i), get(i))
// }
// createCounter(2)
// return console.log(inc(i), dec(i), get(i))
// return inc(i), dec(i), get(i)
// return inc(), dec(), get()

// function createCounter(value) {
//   const inc = (value) => {
//     return value++
//   }
//   const dec = (value) => {
//     return value--
//   }
//   const get = (value) => {
//     return value
//   }
//   console.log(get(value))
//   return inc(value), get(value), dec(value)
// }
// const { inc, dec, get } = createCounter(5)

// function createCounter(value) {
//   return {
//     inc() {return ++value},
//     dec() {return --value},
//     get() {return value},
//   }
// }
// const { inc, get, dec } = createCounter(5)
// console.log(get()) // 5
// console.log(inc())
// console.log(inc())
// console.log(inc())
// console.log(dec())
// console.log(get()) // 7


// const json =
//   '{"name":"Luke Skywalker","height":"172","mass":"77","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"19BBY","gender":"male"}'
// const jedi = JSON.parse(json)

// console.log(jedi.name)
// // Luke Skywalker
// console.log(jedi.gender)
// // male
// console.log(jedi)
// // 19BBY

// const obj = {}
// const key = {}
// obj[key] = 'value for the object key'

// console.log(obj)

// const obj1 = {name : 123};
// const obj2 = {name : 124};
// obj1.name = obj2.name

// console.log(obj2 == obj1)
// console.log(obj1.name)

// console.log(obj2.name == obj1.name)
// let newArray = [ 10 , 20 , 30]

// const cell = newArray[0]

// console.log(cell)

// newArray[0] = 20

// console.log(cell)

// console.log(newArray)

// newArray.push(35, 45)

// console.log(newArray)

// newArray.unshift(55, 40)

// console.log(newArray)

// const array = [...newArray]

// console.log(array)

// const num = 1_000_000;

// console.log(num)

// const keyValueCollection = { key: 'value' }
// console.log(typeof keyValueCollection === 'object')

// const listCollection = [1, 2, 3]
// console.log(typeof listCollection === 'object')

// const exists = {}
// if (typeof(exists) === 'object'){
//   console.log('da')
// } else {console.log('no')}
// setTimeout(function greet() {
//   console.log('Hello!')
// }, 5000)




// setTimeout(function greet() {
//   console.log('Hello!')
// }, 5000)

// console.log("I'm being called before greet function.")



