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

// function myFunk(a,b){
//   console.log(a+b)
// }

// function myFunk2(arg,x,y){
//   arg(x,y)
// }

// myFunk2(myFunk,1,2)

// let x = 8

// let obj={
//   a:1,
//   b: x<7? x <5? x: "bolshe 5":'bolshe'
// }

// console.log(obj)

// let x = 4
// let y = 5

// let func = (a,b)=> a+b

// console.log(func(x,y))

// const coords = document.querySelector('#coords')
// const field = document.querySelector('#field')

// document.onclick = function(e) { // показывает координаты точки клика
//   coords.innerHTML = e.clientX + ':' + e.clientY;
// };

// // верхний левый, внешний угол (это просто).
// function upVP1(){
// let cor = field.getBoundingClientRect()
// let pageY1 = cor.y + window.pageYOffset
// let pageX1 = cor.x + window.pageXOffset
// console.log(pageX1, pageY1)
// }
// upVP1()

// // нижний правый, внешний угол (тоже просто).
// function upVP2(){
//   let cor = field.getBoundingClientRect()
//   let pageX2 = cor.right + window.pageXOffset
//   let pageY2 = cor.bottom + window.pageYOffset

//   console.log(pageX2, pageY2)
//   }
//   upVP2()
// // верхний левый, внутренний угол (чуть сложнее).
// function upVP3(){
//   let cor = field.getBoundingClientRect()
//   let pageX3 = cor.x + window.pageXOffset +field.clientTop
//   let pageY3 = cor.y + window.pageYOffset + field.clientLeft

//   console.log(pageX3, pageY3)

//   }
//   upVP3()

// // нижний правый, внутренний угол (есть несколько способов, выберите один).

// function upVP4(){
//   let cor = field.getBoundingClientRect()
//   let pageX4 = cor.right + window.pageXOffset - (field.offsetHeight -(field.clientHeight + field.clientTop))
//   let pageY4 = cor.bottom + window.pageYOffset -(field.offsetWidth - (field.clientWidth + field.clientLeft))

//   console.log(pageX4, pageY4)
//   }
//   upVP4()

//  /**
//      * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
//      *
//      * @param {Node} anchor     элемент, около которого позиционируется другой элемент
//      * @param {string} position одно из: top/right/bottom
//      * @param {Node} elem       элемент, который позиционируется
//      *
//      * Оба элемента elem и anchor должны присутствовать в документе
//      */

//  function positionAt(anchor, position, elem) {

//   let anchorCoords = anchor.getBoundingClientRect();

//   switch (position) {
//     case "top":
//       elem.style.left = anchorCoords.left + "px";
//       elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
//       break;

//     case "right":
//       elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
//       elem.style.top = anchorCoords.top + "px";
//       break;

//     case "bottom":
//       elem.style.left = anchorCoords.left + "px";
//       elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
//       break;
//   }

// }

// /**
//  * Показывает заметку с заданным содержимым на заданной позиции
//  * относительно элемента anchor.
//  */
// function showNote(anchor, position, html) {
//   let note = document.createElement('div');
//   note.className = "note";
//   note.innerHTML = html;
//   document.body.append(note);

//   positionAt(anchor, position, note);
// }

// // test it
// let blockquote = document.querySelector('blockquote');

// showNote(blockquote, "top", "note above");
// showNote(blockquote, "right", "note at the right");
// showNote(blockquote, "bottom", "note below");

// let elem = document.documentElement
// elem.onclick = function(event) {
//   // вывести тип события, элемент и координаты клика
//   console.log(event.type + " на " + event.currentTarget);
//   console.log("Координаты: " + event.clientX + ":" + event.clientY);
//   console.log(event)

// };

// class Menu {
//   handleEvent(event) {
//     switch(event.type) {
//       case 'mousedown':
//         elem.innerHTML = "Нажата кнопка мыши";
//         break;
//       case 'mouseup':
//         elem.innerHTML += "...и отжата.";
//         break;
//     }
//   }
// }

// let menu = new Menu();
// elem.addEventListener('mousedown', menu);
// elem.addEventListener('mouseup', menu);

// class Menu {
//   handleEvent(event) {
//     // mousedown -> onMousedown
//     let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
//     this[method]();
//   }

//   onMousedown() {
//     elem.innerHTML = "Кнопка мыши нажата";
//   }

//   onMouseup() {
//     elem.innerHTML += "...и отжата.";
//   }
// }

// let menu = new Menu();
// elem.addEventListener('mousedown', menu);
// elem.addEventListener('mouseup', menu);

// let field = document.querySelector('#field');
// let ball = document.querySelector('#ball');
// let corStart = ball.getBoundingClientRect();
// ball.style.transition = 'all 1s ease 0s';
// ball.style.top = '0px';
// ball.style.left = '0px';

// field.onclick = function (e) {
//   ball.style.position = 'relative';
//   let mouseClickDocY = e.clientY + window.pageYOffset;
//   let mouseClickDocX = e.clientX + window.pageXOffset;

//   let corTopField = field.offsetTop + field.clientTop;
//   let corDownField = field.offsetTop + field.clientTop + field.clientHeight;
//   let corLeftField = field.offsetLeft + field.clientLeft;
//   let corRigthField = field.offsetLeft + field.offsetLeft + field.clientWidth;
//   let centerBallTop = ball.offsetHeight / 2;
//   let centerBallLeft = ball.offsetWidth / 2;
//   let ballStyleTop = mouseClickDocY - corTopField - centerBallTop;

//   let ballStyleLeft = mouseClickDocX - corLeftField - centerBallLeft;

//   if (ballStyleLeft < 0) {
//     ballStyleLeft = 0;
//   }
//   if (corRigthField < mouseClickDocX + centerBallLeft) {
//     ballStyleLeft = field.clientWidth - ball.offsetWidth;
//   }

//   if (ballStyleTop < 0) {
//     ballStyleTop = 0;
//   }
//   if (corDownField < mouseClickDocY + centerBallTop) {
//     ballStyleTop = field.clientHeight - ball.offsetHeight;
//   }

//   ball.style.top = `${ballStyleTop}px`;
//   ball.style.left = `${ballStyleLeft}px`;
// };

// let spanArrow1 = document.querySelector('.span_arrow1');
// let spanArrow2 = document.querySelector('.span_arrow2');
// let spanButton = document.querySelector('.span_button');
// let menu = document.querySelector('.menu');

// spanArrow1.style.color = 'green';
// spanArrow2.style.color = 'green';

// menu.style.display = 'none';

// let open = false;

// menu.style.marginTop = '0px';

// spanArrow1.style.display = 'inline-block';
// spanArrow2.style.display = 'none';

// spanArrow1.style.boxSizing = 'border-box';
// spanArrow2.style.width = '20px';
// spanArrow1.style.width = '20px';
// spanArrow2.style.heigth = '20px';
// spanArrow1.style.heigth = '20px';

// spanButton.addEventListener('click', () => {
//   if (open === false) {
//     spanArrow2.style.boxSizing = 'border-box';
//     spanArrow2.style.display = 'inline-block';
//     spanArrow1.style.display = 'none';
//     spanArrow1.hidden = true;
//     menu.style.display = '';

//     open = true;
//   } else {
//     spanArrow1.style.boxSizing = 'border-box';
//     spanArrow1.style.display = 'inline-block';
//     spanArrow2.style.display = 'none';
//     menu.style.display = 'none';
//     open = false;
//   }
// });

// let pane = document.querySelectorAll('.pane');
// let button = document.querySelector('.remove-button');
// document.body.firstElementChild.hidden = true;

// for (let i = 0; i < pane.length; i++) {

//   pane[i].childNodes[1].insertAdjacentHTML('afterend', button.outerHTML);
//   pane[i].childNodes[1].style.display ='inline-block'
//   pane[i].childNodes[2].hidden = false;

//   pane[i].childNodes[2].style.paddingRight = '0px'

//   console.log(parseInt(getComputedStyle(pane[i]).paddingRight))

//   pane[i].childNodes[2].style.paddingLeft = `${pane[i].clientWidth-((parseInt(getComputedStyle(pane[i]).paddingLeft))+(parseInt(getComputedStyle(pane[i]).paddingRight))) - (pane[i].childNodes[2].offsetWidth)- (pane[i].childNodes[1].offsetWidth)}px`

//   pane[i].childNodes[2].addEventListener('click', function () {
//     this.parentNode.style.display = 'none';
//   });
// }
const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');
const img = document.querySelectorAll('img');
const arrow1 = document.querySelector('.arrow1');
const arrow2 = document.querySelector('.arrow2');
const ul = document.querySelector('ul');

arrow1.addEventListener('click', () =>
  div2.scrollBy({
    top: 0,
    left: -widthThreeImg,
    behavior: 'smooth',
  })
);
arrow2.addEventListener('click', () =>
  div2.scrollBy({
    top: 0,
    left: widthThreeImg,
    behavior: 'smooth',
  })
);

const widthThreeImg = img[3].offsetWidth * 3;

div1.style.width = `${
  widthThreeImg +
  arrow1.offsetWidth +
  arrow2.offsetWidth +
  parseInt(getComputedStyle(arrow1).marginLeft) +
  parseInt(getComputedStyle(arrow2).marginRight)
}px`;

ul.style.width = `${img.length * img[3].offsetWidth}px`;
div2.style.width = `${widthThreeImg}px`;
