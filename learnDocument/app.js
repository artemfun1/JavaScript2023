'use strict';
const html_leng = document.documentElement;
html_leng.lang = 'ru';

// console.log(document.body.children[5])
// console.log(document.body.children[6])
// console.log(document.body.children[6].children[1])

// console.log(elem.innerHTML)

// elem.outerHTML = "<div> Привет !!</div>"

// console.dir(document.body.dataset)

// console.log(elem.textContent)

// let result = prompt();

// let ul = document.createElement('ul')

// document.body.prepend(ul)

// while (true) {

//   let value = prompt("Введите значение", '');

//   if (!value) break; // (*)
//   let li = document.createElement('li')
//   li.textContent = value
//   ul.append(li)

// }

// let data = {
//   Рыбы: {
//     форель: {},
//     лосось: {},
//   },

  

//   "Деревья": {
//     "Огромные": {
//       "секвойя": {},
//       "дуб": {}
//     },
//     "Цветковые": {
//       "яблоня": {},
//       "магнолия": {}
//     }
//   }
// };

// const div = document.createElement('div');
// div.setAttribute('id', 'container');
// document.body.append(div);
// let container = document.getElementById('container');


// function createTree(container, obj) {
//   container.append(createTreeDom(obj));
// }

// function createTreeDom(obj) {
//   // если нет дочерних элементов, то вызов возвращает undefined
//   // и элемент <ul> не будет создан
//   if (!Object.keys(obj).length) return;

//   let ul = document.createElement('ul');

//   for (let key in obj) {
//     let li = document.createElement('li');
//     li.innerHTML = key;

//     let childrenUl = createTreeDom(obj[key]);
//     if (childrenUl) {
//       li.append(childrenUl);
//     }

//     ul.append(li);
//   }

//   return ul;
// }

// createTree(container, data);

// function createTree(container, obj) {
//   container.innerHTML = createTreeText(obj);
// }

// function createTreeText(obj) { // отдельная рекурсивная функция
//   let li = '';
//   let ul;
//   for (let key in obj) {
//     li += '<li>' + key + createTreeText(obj[key]) + '</li>';
//   }
//   if (li) {
//     ul = '<ul>' + li + '</ul>'
//   }
//   return ul || '';
// }

// createTree(container, data);
// function createTree(elem, data) {

//   console.log(Object.keys(data).length)
 
//   if (!Object.keys(data).length) {
//     let ul = document.createElement('ul');

//     for (let key in data) {
//       let li = document.createElement('li');
//       if (li.parentNode === ul) {
//         li.textContent = key;
//         ul.append(li);
//       } else {
//         elem.append(ul);
//         li.textContent = key;
//         ul.append(li);
//       }
//     }
//   } else {

//     let ul = document.createElement('ul');

//     for (let key in data) {
//       let li = document.createElement('li');
//       if (li.parentNode === ul) {
//         li.textContent = key;
//         ul.append(li);
//       } else {
//         elem.append(ul);
//         li.textContent = key;
//         ul.append(li);
//       }
//     }
    
//     for (let subdep of Object.values(data)) {
      
//       createTree(ul, subdep);
//     }
//   }
// }

// createTree(container, data); // создаёт дерево в контейнере

// // Создать строку, а затем присвоить через container.innerHTML.
// // Создавать узлы через методы DOM.



// function createCalcFunction(n){
//   return function(){
//     console.log(1000*n)
//   }
// }

// const calc = createCalcFunction(3)

// calc()


// function createIncrementor(n){
//   return function(num){
//     return n + num
//   }
// }


// const addOne = createIncrementor(1)
// const addTen
// = createIncrementor(10)
// console.log(addTen(1))

// function urlGenerator(domain){
//   return function(url){
//     return `https://${url}.${domain}`
//   }
// }

// const comUrl = urlGenerator('com')

// console.log(comUrl('Google'))



// function logPerson(){
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}` )
// }


// const person1 = {name: 'Mix', age: 22, job: 'Front'}


//  function bind (context,fn){
//     return function (...args){
//     fn.apply(context, args)
//     }
//   }

// bind(person1, logPerson)()


// function showNotification(options){
//    const div = document.createElement('div')
//   document.body.append(div)
//   div.classList.add(options.className)
//   div.classList.add('notification')

//   div.textContent = options.html
//   div.style.top = `${options.top}px`
//   div.style.right = `${options.right}px`

//   function killDiv(){
//     div.style.display='none'
//   }

// setTimeout(killDiv,1500)
// }

// showNotification({
//   top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//   right: 10, // 10px от правого края окна (по умолчанию 0px)
//   html: "Hello!", // HTML-уведомление
//   className: "welcome" // дополнительный класс для div (необязательно)
// });


// if (elem.scrollHeight === elem.height ||
//   (elem.scrollTop === elem.scrollHeight -elem.clientTop - elem.clientHeight) ){
//     elem.scrollBottom = 0
//   }else{
//     elem.scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight
//   }

// const elemBody = document.body

// console.log(elemBody)

// elemBody.offsetWidth - elemBody.clientLeft  

// let div = document.createElement('div');

// div.style.overflowY = 'scroll';
// div.style.width = '50px';
// div.style.height = '50px';
// div.style.background = 'red'
// div.textContent = 'fjfjf/n mff/n mfmf'
// div.style.overflow = 'auto'

// document.body.append(div);
// let scrollWidth  = div.offsetWidth - div.clientWidth;

// console.log(getComputedStyle(div).width)
// console.log(div.offsetWidth)
// console.log(div.clientWidth)

// console.log(scrollWidth)

// const div = document.querySelector('#field')
// const ball = document.querySelector('#ball')
// console.log(div.clientWidth)
// console.log(ball.clientWidth)

// ball.style.left =`${(div.clientWidth/2-ball.clientWidth/2)}px`
// ball.style.top =`${(div.clientHeight/2-ball.clientHeight/2)}px`

// let x = `${(div.clientWidth/2-ball.clientWidth/2)}px`

// let y = `${(div.clientHeight/2-ball.clientHeight/2)}px`

// function pos(x,y){
//   ball.style.left=x
//   ball.style.top = y
// }

// pos(x,y)


// console.log(
 
//   document.documentElement.
//   scrollHeight,
//   document.documentElement.offsetHeight,
//   document.documentElement.clientHeight)
// console.log(document.documentElement.getBoundingClientRect())

// let bank = 10000

// let call = 10

// let x =100

// for(let i = 0; i < x;i++){
//   let call = 10
// while (call <= bank  )
// {
//   let ran = Math.random()
//   if(ran <= 18 / 37){
//     bank = bank + call
//     // console.log(`win ! ! ! ! ! ${bank}`)
//     break
//   } else {
//     bank = bank - call
//     call = call*2
//     // console.log(`lose ${bank}`)
//   }
//   console.log(bank)
// }
// }



// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length - i - 1; j++) {
//   if (array[j] > array[j + 1]) {
//   [array[j], array[j+1]] = [array[j+1], array[j]];
//   }
//   }
//   }
  
//   return array;
//   }
//   let arr = [64, 34, 25, 12, 22, 11, 90];
//   console.log('Массив до сортировки:', arr);
//   console.log('Массив после сортировки:', bubbleSort(arr));


// let numbers = [16,1,4,2,5,111,26,]

// function bubbleSort(array){
//   let counter = 0
//   for(let j = 0; j<array.length;j++){
//     for(let i = 0; i <numbers.length-j; i++){
//       counter++
//     if(array[i]> array[i+1]){
//       let tmp = array[i]
//       array[i] = array[i+1]
//       array[i+1] = tmp
 
//     }
//   }
//   }
//   console.log(counter)
  
// }

// bubbleSort(numbers)

// console.log(numbers)


//  let arr1 = [1,2,3,4,5,]

//  let arr2 = arr1.concat([[1]])

//  arr2.push(6)


//  console.log(arr1)
//  console.log(arr2)

