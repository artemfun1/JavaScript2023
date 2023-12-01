'use strict';
const html_leng = document.documentElement;
html_leng.lang = 'ru';
function cl(value) {
  console.log(value);
}

// console.log(document.body.children[5])
// console.log(document.body.children[6])
// console.log(document.body.children[6].children[1])

// console.log(elem.innerHTML)

// elem.outerHTML = "<div> Привет !!</div>"

// console.dir(document.body.dataset)

// console.log(elem.value)

// let result = prompt();

// let ul = document.createElement('ul')

// document.body.prepend(ul)

// while (true) {

//   let value = prompt("Введите значение", '');

//   if (!value) break; // (*)
//   let li = document.createElement('li')
//   li.value = value
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
//         li.value = key;
//         ul.append(li);
//       } else {
//         elem.append(ul);
//         li.value = key;
//         ul.append(li);
//       }
//     }
//   } else {

//     let ul = document.createElement('ul');

//     for (let key in data) {
//       let li = document.createElement('li');
//       if (li.parentNode === ul) {
//         li.value = key;
//         ul.append(li);
//       } else {
//         elem.append(ul);
//         li.value = key;
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

//   div.value = options.html
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
// div.value = 'fjfjf/n mff/n mfmf'
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
// const div1 = document.querySelector('.div1');
// const div2 = document.querySelector('.div2');
// const img = document.querySelectorAll('img');
// const arrow1 = document.querySelector('.arrow1');
// const arrow2 = document.querySelector('.arrow2');
// const ul = document.querySelector('ul');

// arrow1.addEventListener('click', () =>
//   div2.scrollBy({
//     top: 0,
//     left: -widthThreeImg,
//     behavior: 'smooth',
//   })
// );
// arrow2.addEventListener('click', () =>
//   div2.scrollBy({
//     top: 0,
//     left: widthThreeImg,
//     behavior: 'smooth',
//   })
// );

// const widthThreeImg = img[3].offsetWidth * 3;

// div1.style.width = `${
//   widthThreeImg +
//   arrow1.offsetWidth +
//   arrow2.offsetWidth +
//   parseInt(getComputedStyle(arrow1).marginLeft) +
//   parseInt(getComputedStyle(arrow2).marginRight)
// }px`;

// ul.style.width = `${img.length * img[3].offsetWidth}px`;
// div2.style.width = `${widthThreeImg}px`;

// const container = document.querySelector('#container')
// const button = document.querySelector('.remove-button')
// container.addEventListener('click',foo)
// function foo(event){
//   let elemClick = event.target
//   if (elemClick.outerHTML === button.outerHTML){
//     elemClick.parentNode.hidden = true
//   }
// }

// const tree = document.querySelector('.tree');

// tree.addEventListener('click', foo);
// tree.addEventListener('mouseover',mouseover)
// tree.addEventListener('mouseout',mouseout)

// function foo(event){
//   let targetMouse = event.target
// if((targetMouse.constructor.name === 'HTMLLIElement')&&(targetMouse.firstElementChild )){

//  if( !targetMouse.firstElementChild.hidden){
//   targetMouse.firstElementChild.hidden = true
//  } else if(targetMouse.firstElementChild.hidden ===true){
//   targetMouse.firstElementChild.hidden = false
//  } else if(targetMouse.firstElementChild.hidden ===false)
//  targetMouse.firstElementChild.hidden = true
// }
// }
// function mouseover(event){
// let targetMouse = event.target
// if(targetMouse.constructor.name === 'HTMLLIElement'){
// //  targetMouse.style.fontWeight = 'bold'
//  console.log(targetMouse.firstChild)
// }
// }
// function mouseout(event){
//   let targetMouse = event.target
//   if(targetMouse.style.fontWeight === 'bold'){
//     // targetMouse.style.fontWeight = 'bold'
//    }
// }

// const tbody = document.querySelector('tbody');
// const table = document.querySelector('thead');
// const unMutNodelistRow = tbody.querySelectorAll('tr')
// let elemRow = tbody.getElementsByClassName('tr');
// table.addEventListener('click', foo);

// for(let elem of unMutNodelistRow){
//   elem.setAttribute('class','tr')
// }

// function foo(event) {
// let index = 0
//   switch (event.target.getAttribute('data-type')) {
//     case 'number':
//       index = 0
//       sortAge(index);

//       break;

//     case 'string':
//       index = 1
//       sortName(index);
//       break;
//   }
// }

// function sortAge(index) {

//   for(let j=0;j<elemRow.length+1;j++){
//     for(let i =0; i<elemRow.length-1;i++){
//       if(+elemRow[i].cells[index].value > +elemRow[i+1].cells[0].value){
//         tbody.append(elemRow[i])
//       }
//       }
//     }
// }

// function sortName(index) {
//   for(let j=0;j<elemRow.length+1;j++){
//     for(let i =0; i<elemRow.length-1;i++){
//       if(elemRow[i].cells[index].value > elemRow[i+1].cells[1].value){
//         tbody.append(elemRow[i])
//       }
//       }
//     }
// }

// const doc = document;

// const button = document.querySelectorAll('button');
// doc.addEventListener('mouseover', fooOver);
// doc.addEventListener('mouseout', fooOut);

// const arrayBut = Array.from(button);

// function fooOver(event) {
//   const divEl = document.createElement('div');
//   divEl.classList.add('tooltip');
//   doc.body.prepend(divEl);
//   divEl.hidden = true;

//   if (arrayBut.includes(event.target, 0)) {
//     divEl.hidden = false;
//     divEl.innerHTML = `${event.target.dataset.tooltip}`;

//     divEl.style.top = `${
//       event.target.getBoundingClientRect().top - divEl.offsetHeight - 5
//     }px `;

//     divEl.style.left = `${event.target.getBoundingClientRect().left}px `;

//     if (event.target.getBoundingClientRect().top < divEl.offsetHeight - 5) {
//       divEl.style.top = `${
//         event.target.getBoundingClientRect().top + 5 + event.target.offsetHeight
//       }px `;
//     }
//   }

//   if (arrayBut.includes(event.target, 1)) {
//     const divEl = document.createElement('div');
//     divEl.classList.add('tooltip');
//     doc.body.prepend(divEl);
//     divEl.hidden = true;

//     divEl.hidden = false;
//     divEl.innerHTML = `${event.target.dataset.tooltip}`;

//     divEl.style.top = `${
//       event.target.getBoundingClientRect().top - divEl.offsetHeight - 5
//     }px `;

//     divEl.style.left = `${event.target.getBoundingClientRect().left}px `;

//     if (event.target.getBoundingClientRect().top < divEl.offsetHeight - 5) {
//       divEl.style.top = `${
//         event.target.getBoundingClientRect().top + 5 + event.target.offsetHeight
//       }px `;
//     }
//   }
// }

// function fooOut(event) {
//   if (arrayBut.includes(event.target, 0)) {
//     const divEl = doc.body.querySelectorAll('div');
//     for (let elem of divEl) {
//       elem.remove();
//     }
//   }
//   if (arrayBut.includes(event.target, 1)) {
//     const divEl = doc.body.querySelectorAll('div');
//     for (let elem of divEl) {
//       elem.remove();
//     }
//   }
// }

// const contents = document.querySelector('#contents');

// contents.onclick = function(event) {

//   function handleLink(href) {
//     let isLeaving = confirm(`Leave for ${href}?`);
//     if (!isLeaving) return false;
//   }

//   let target = event.target.closest('a');

//   if (target && contents.contains(target)) {
//     return handleLink(target.getAttribute('href'));
//   }
// };

// contents.addEventListener('click',foo)
// function foo(event){
//   let target = event.target.closest('a')
//  if(target === null)return

//   event.preventDefault();

//   let hreff = target.getAttribute('href')

//   let ask = confirm(`go to ${hreff} ????`)
//   if(ask ===true){
//     window.location.href = `${hreff}`
//   }
// }

// const contImg = document.querySelector('#thumbs')
// const mainCont = document.querySelector('#largeImg')

// contImg.addEventListener('click',function(event){
//   let target = event.target.closest('a')
//   if (target === null) return;
//   event.preventDefault();
//   mainCont.setAttribute('src',target.getAttribute('href'))
// })

// document.addEventListener("hello", function(event) { // (1)
//   console.log("Привет от " + event.target.tagName); // Привет от H1
// });

// // ...запуск события на элементе!
// let event1 = new Event("hello", {bubbles: true}); // (2)
// elem1.dispatchEvent(event1);

// const container = document.querySelector('ul');
// container.addEventListener('click', foo);
// container.onmousedown = function () {
//   return false;
// };

// function foo(event) {
//   let myTarget = event.target.closest('li');
//   if (myTarget === null) return;
//   const liNodes = container.querySelectorAll('li');

//   if (event.metaKey || event.ctrlKey) {
//     myTarget.classList.add('selected');
//   } else {
//     for (let elem of liNodes) {
//       elem.classList.remove('selected');
//     }
//     myTarget.classList.add('selected');
//   }
// }

// let words = ["hello", "world"]

// function smash (words) {
//   let str= words.join(' ')

//    return console.log(str)
// };

// smash(words)

// const house = document.querySelector('#house');

// house.onmouseover = function (event) {
//   const tooltip = document.createElement('div');
//   tooltip.classList.add('tooltip');
//   let mouseTarget = event.target.closest('[data-tooltip]');

//   if (mouseTarget) {
//     document.body.append(tooltip);
//     house.append(tooltip);
//     tooltip.innerHTML = mouseTarget.dataset.tooltip;
//   }

//   if (
//     mouseTarget.offsetTop < tooltip.offsetHeight ||
//     mouseTarget.getBoundingClientRect().top < tooltip.offsetHeight
//   ) {
//     tooltip.style.top = `${
//       mouseTarget.offsetTop +
//       mouseTarget.offsetHeight +
//       5 -
//       document.documentElement.scrollTop
//     }px`;
//   } else if (mouseTarget === house && document.documentElement.scrollTop > 0) {
//     tooltip.style.top = `${
//       mouseTarget.offsetTop +
//       mouseTarget.offsetHeight +
//       5 -
//       document.documentElement.scrollTop
//     }px`;
//   } else {
//     tooltip.style.top = `${
//       mouseTarget.offsetTop -
//       tooltip.offsetHeight -
//       5 -
//       document.documentElement.scrollTop
//     }px`;
//   }

//   tooltip.style.left = `${
//     mouseTarget.offsetLeft +
//     mouseTarget.offsetWidth / 2 -
//     tooltip.offsetWidth / 2
//   }px`;
// };

// house.onmouseout = function (event) {
//   const tooltipList = document.querySelectorAll('.tooltip');
//   for (let elem of tooltipList) {
//     elem.remove();
//   }
// };

// Здесь показан набросок класса
// с возможностями, которые нам понадобятся
// class HoverIntent {

//   constructor({
//     sensitivity = 0.1, // скорость ниже 0.1px/ms значит "курсор на элементе"
//     interval = 100,    // измеряем скорость каждые 100ms
//     elem,
//     over,
//     out
//   }) {
//     this.sensitivity = sensitivity;
//     this.interval = interval;
//     this.elem = elem;
//     this.over = over;
//     this.out = out;

//     // убедитесь, что "this" сохраняет своё значение для обработчиков.
//     this.onMouseMove = this.onMouseMove.bind(this);
//     this.onMouseOver = this.onMouseOver.bind(this);
//     this.onMouseOut = this.onMouseOut.bind(this);

//     // и в функции, измеряющей время (вызываемой из setInterval)
//     this.trackSpeed = this.trackSpeed.bind(this);

//     elem.addEventListener("mouseover", this.onMouseOver);

//     elem.addEventListener("mouseout", this.onMouseOut);

//   }

//   onMouseOver(event) {

//     if (this.isOverElement) {
//       // Игнорируем событие над элементом,
//       // так как мы уже измеряем скорость
//       return;
//     }

//     this.isOverElement = true;

//     // после каждого движения измеряем дистанцию
//     // между предыдущими и текущими координатами курсора
//     // если скорость меньше sensivity, то она считается медленной

//     this.prevX = event.pageX;
//     this.prevY = event.pageY;
//     this.prevTime = Date.now();

//     elem.addEventListener('mousemove', this.onMouseMove);
//     this.checkSpeedInterval = setInterval(this.trackSpeed, this.interval);
//   }

//   onMouseOut(event) {
//     // если ушли с элемента
//     if (!event.relatedTarget || !elem.contains(event.relatedTarget)) {
//       this.isOverElement = false;
//       this.elem.removeEventListener('mousemove', this.onMouseMove);
//       clearInterval(this.checkSpeedInterval);
//       if (this.isHover) {
//         // если была остановка движения на элементе
//         this.out.call(this.elem, event);
//         this.isHover = false;
//       }
//     }
//   }

//   onMouseMove(event) {
//     this.lastX = event.pageX;
//     this.lastY = event.pageY;
//     this.lastTime = Date.now();
//   }

//   trackSpeed() {

//     let speed;

//     if (!this.lastTime || this.lastTime == this.prevTime) {
//       // курсор не двигался
//       speed = 0;
//     } else {
//       speed = Math.sqrt(
//         Math.pow(this.prevX - this.lastX, 2) +
//         Math.pow(this.prevY - this.lastY, 2)
//       ) / (this.lastTime - this.prevTime);
//     }

//     if (speed < this.sensitivity) {
//       clearInterval(this.checkSpeedInterval);
//       this.isHover = true;
//       this.over.call(this.elem);
//     } else {
//       // скорость высокая, запоминаем новые координаты
//       this.prevX = this.lastX;
//       this.prevY = this.lastY;
//       this.prevTime = this.lastTime;
//     }
//   }

//   destroy() {
//     elem.removeEventListener('mousemove', this.onMouseMove);
//     elem.removeEventListener('mouseover', this.onMouseOver);
//     elem.removeEventListener('mouseout', this.onMouseOut);
//   }

// }

// // для демо
// setTimeout(function() {
//   new HoverIntent({
//     elem,
//     over() {
//       tooltip.style.left = elem.getBoundingClientRect().left + 5 + 'px';
//       tooltip.style.top = elem.getBoundingClientRect().bottom + 5 + 'px';
//       tooltip.hidden = false;
//     },
//     out() {
//       tooltip.hidden = true;
//     }
//   });
// }, 2000);

// const slider = document.querySelector('.slider');
// const thumb = document.querySelector('.thumb');

// thumb.addEventListener('mousedown', onMouseDown);

// function onMouseDown(event) {
//   thumb.style.position = 'absolute';
//   slider.style.position = 'relative';
//   thumb.style.zIndex = 1000;
//   slider.append(thumb);

//   function moveAt(pageX) {
//     thumb.style.left = pageX - thumb.offsetWidth / 2 + 'px';

//     thumb.style.top = slider.offsetHeight / 2 - thumb.offsetHeight / 2 + 'px';
//     if (pageX < thumb.offsetWidth / 2) {
//       thumb.style.left = '0px';
//     }
//     if (pageX > slider.offsetWidth - thumb.offsetWidth / 2) {
//       thumb.style.left = slider.offsetWidth - thumb.offsetWidth + 'px';
//     }
//   }

//   moveAt(event.pageX - slider.offsetLeft);

//   document.addEventListener('mousemove', onMouseMove);
//   function onMouseMove(event) {
//     thumb.style.left =
//       event.pageX - slider.offsetLeft - thumb.offsetWidth / 2 + 'px';

//     thumb.style.top = slider.offsetHeight / 2 - thumb.offsetHeight / 2 + 'px';
//     if (event.pageX - slider.offsetLeft < thumb.offsetWidth / 2) {
//       thumb.style.left = '0px';
//     }
//     if (
//       event.pageX - slider.offsetLeft >
//       slider.offsetWidth - thumb.offsetWidth / 2
//     ) {
//       thumb.style.left = slider.offsetWidth - thumb.offsetWidth + 'px';
//     }
//   }

//   document.addEventListener('mouseup', onMouseUp);
//   function onMouseUp(event) {
//     document.removeEventListener('mousemove', onMouseMove);
//   }
// }

// const allDoc = document.querySelector('html');

// const herosDraggable = document.querySelectorAll('.hero');
// const ball = document.querySelector('img');

// allDoc.addEventListener('mousedown', onMouseDown);

// let scrollBottom = allDoc.offsetHeight - allDoc.scrollTop - allDoc.clientHeight;

// function onMouseDown(event) {
//   let heroArr = Array.from(herosDraggable);
//   let target = event.target;
//   if (!(heroArr.includes(target, 0) || target === ball)) return;
//   target.ondragstart = function () {
//     return false;
//   };

//   let shiftX = event.clientX - target.getBoundingClientRect().left;
//   let shiftY = event.clientY - target.getBoundingClientRect().top;

//   moveAt(event.pageX, event.pageY);

//   function moveAt(pageX, pageY) {
//     target.style.position = 'absolute';
//     target.style.left = pageX - shiftX + 'px';
//     target.style.top = pageY - shiftY + 'px';

//     if (target.getBoundingClientRect().left < 0) {
//       target.style.left = allDoc.scrollLeft + 'px';
//     }

//     if (target.getBoundingClientRect().top < 0) {
//       target.style.top = allDoc.scrollTop + 'px';
//     }

//     if (allDoc.clientHeight < target.getBoundingClientRect().bottom) {
//       target.style.top =
//         allDoc.clientHeight - target.offsetHeight + allDoc.scrollTop + 'px';
//     }

//     if (target.getBoundingClientRect().right > allDoc.clientWidth) {
//       target.style.left = allDoc.clientWidth - target.offsetWidth + 'px';
//     }
//   }
//   document.addEventListener('mousemove', onMouseMove);

//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);
//   }

//   target.onmouseup = function () {
//     document.removeEventListener('mousemove', onMouseMove);

//   };
// }

// const rps = (p1, p2) => {

//   switch ((p1)) {
//     case ('rock'):
//       switch(p2){
//         case('scissors'):return 'Player 1 won!';
//         case('paper'):return 'Player 2 won!';
//         case('rock'):return 'Draw!';
//       }
//     break

//     case ('paper'):
//       switch(p2){
//         case('scissors'):return 'Player 2 won!';
//         case('paper'):return 'Draw!';
//         case('rock'):return 'Player 1 won!';
//       }
//     break

//     case ('scissors'):
//       switch(p2){
//         case('scissors'):return 'Draw!';
//         case('paper'):return 'Player 1 won!';
//         case('rock'):return 'Player 2 won!';
//       }
//     break
//   }
// };

// console.log(rps('rock', 'paper'))
// // `Player ${n} won!`

// function runOnKeys(func, ...code) {

//   let arrUserCode = [];

//   document.addEventListener('keydown', function (event) {

//     arrUserCode.push(event.code);
//     let arr = [...code];
//     document.onkeyup = function (event) {
//       arrUserCode.splice(0, arrUserCode.length);
//     };

//     if (arr.length === arrUserCode.length) {
//       let move = 0;
//       for (let i = 0; i < arr.length; i++) {
//         if (arrUserCode.includes(arr[i])) {
//           move++;
//         }
//       }

//       if (move === arrUserCode.length) {
//         if (
//           arr.length === arrUserCode.length ||
//           arrUserCode.length > arr.length
//         ) {
//           arrUserCode.splice(0, arrUserCode.length);
//         }
//         return func();
//       }
//     }

//     if (arr.length === arrUserCode.length || arrUserCode.length > arr.length) {
//       arrUserCode.splice(0, arrUserCode.length);
//     }
//   });
// }

// runOnKeys(() => console.log('Привет!'), 'KeyQ', 'KeyW');

// window.addEventListener('scroll', up)

// function up(){
//     while (document.documentElement.getBoundingClientRect().bottom < document.documentElement.clientHeight+100) {
//     const elem = document.createElement('div')
//     elem.innerHTML = new Date()
//     document.body.append(elem)
//   }
// };

// up()

// const div = document.querySelector('#arrowTop')
// window.addEventListener('scroll',scroll)
// window.addEventListener('click',clickB)
// function scroll(){
// let winHeight = document.documentElement.clientHeight
// let nowScrollTop = document.documentElement.scrollTop
// if(nowScrollTop > winHeight){
//   div.hidden = false
//  } else{
//   div.hidden = true
// }
// }
// function clickB(event){
// if (event.target===div){
//   document.documentElement.scrollTop =0
// }
// }

// /**
//  * Проверка видимости элемента (в видимой части страницы)
//  * Достаточно, чтобы верхний или нижний край элемента был виден
//  */
// function isVisible(elem) {
//   // console.log(elem.getBoundingClientRect().top)
//   // console.log('')
//   // console.log((document.documentElement.getBoundingClientRect().top)*-1)

//   if (
//     document.documentElement.clientHeight +
//       document.documentElement.getBoundingClientRect().top * -1 >
//     elem.getBoundingClientRect().top
//   ) {
//     console.log(1);
//     return true;
//   } else return false;
//   // return true

//   // ...ваш код...
// }

// function showVisible() {
//   for (let img of document.querySelectorAll('img')) {
//     let realSrc = img.dataset.src;
//     if (!realSrc) continue;

//     if (isVisible(img)) {
//       // отключение кеширования
//       // эта строка должна быть удалена в "боевом" коде
//       realSrc += '?nocache=' + Math.random();

//       img.src = realSrc;

//       img.dataset.src = '';
//     }
//   }
// }

// window.addEventListener('scroll', showVisible);
// showVisible();
// const select = document.querySelector('#genres')

//   select.innerHTML += '<option value="classic">Классика</option>'

//     console.log( select.value = 'classic')

// ...ваш код...
// Заметьте: <textarea> должен иметь class="edit"
// my.css содержит стиль, чтобы <textarea> и <div> были одного размера

// const div = document.querySelector('#view');

// div.onclick = function () {
//   let textDiv = div.innerHTML;

//   const tetxarea = document.createElement('textarea');
//   tetxarea.classList.add('edit');
//   tetxarea.innerHTML = textDiv;
//   div.replaceWith(tetxarea);
//   tetxarea.focus();

//   tetxarea.addEventListener('blur', onBlur);
//   tetxarea.addEventListener('keydown', foo);
//   function foo(event) {
//     if (event.code === 'Enter') {
//       onBlur();
//     } else {
//       return;
//     }
//   }

//   function onBlur() {
//     div.innerHTML = tetxarea.value;
//     tetxarea.removeEventListener('keydown', foo);
//     tetxarea.removeEventListener('onblur', onBlur);
//     tetxarea.blur();
//     tetxarea.replaceWith(div);
//     tetxarea.remove();
//   }
// };

// document.querySelector('#bagua-table').addEventListener('dblclick', onDblclick);

// let activeEl = document.activeElement;

// function onDblclick(event) {
//   const target = event.target.closest('td');
//   if (!target) return;
//   if (activeEl.tagName === 'TEXTAREA') {
//     const textarea = document.querySelector('.textarea');
//     const lValue = document.querySelector('.cont');
//       if (event.target.value === 'OK') {
//         target.innerHTML = textarea.value;
//         textarea.remove();
//         lValue.remove();
//         activeEl = '';

//         return;
//       }
//       if (event.target.value === 'ОТМЕНА') {
//         target.innerHTML = lValue.value;
//         textarea.remove();
//         lValue.remove();
//         activeEl = '';

//         return;
//       }

//   }

//   const cont = document.createElement('div');
//   cont.classList.add('cont');
//   cont.hidden = true;
//   document.body.append(cont);
//   cont.value = target.innerHTML;

//   const textarea = document.createElement('textarea');
//   textarea.classList.add('textarea');

//   textarea.innerHTML = target.innerHTML;
//   target.innerHTML = '';
//   target.style.padding = '0px';
//   target.style.border = '0px';
//   target.append(textarea);

//   textarea.style.cssText = `
//     width: ${target.getBoundingClientRect().width}px;
//     height: ${target.getBoundingClientRect().height}px;

//     border: none;
//     margin: 0;
//     padding: 0;
//     display: block;
//     resize: none;
//     outline: none;
//     overflow: auto;
// `;

//   const btnOk = document.createElement('button');
//   const btnCancel = document.createElement('button');

//   btnOk.value = 'OK';
//   btnOk.style.position = 'absolute';
//   target.append(btnOk);
//   btnOk.style.left = `${target.getBoundingClientRect().left}px`;

//   btnCancel.value = 'ОТМЕНА';
//   btnCancel.style.position = 'absolute';
//   target.append(btnCancel);
//   btnCancel.style.left = `${
//     target.getBoundingClientRect().left + btnOk.getBoundingClientRect().width
//   }px`;

//   textarea.addEventListener('focus', onFocus);
//   function onFocus() {
//     activeEl = document.activeElement;
//   }
//   textarea.focus();
// }

// let mouse = document.querySelector('#mouse');
// mouse.setAttribute('tabindex', '1');
// mouse.style.cssText = `

//     cursor: pointer;
//     display: inline-block;
//     position: fixed;
//   `
// mouse.onfocus = function () {
//   mouse.style.cssText += `

//     outline: 1px dashed black;
//   `
//   mouse.onkeydown = function (event) {
//     event.preventDefault();
//     console.log(event.code);
//     if (event.code === 'ArrowUp') {
//       mouse.style.top = `${
//         mouse.getBoundingClientRect().top - mouse.getBoundingClientRect().height
//       }px`;
//     } else if (event.code === 'ArrowDown') {
//       mouse.style.top = `${
//         mouse.getBoundingClientRect().top + mouse.getBoundingClientRect().height
//       }px`;
//     } else if (event.code === 'ArrowLeft') {
//       mouse.style.left = `${
//         mouse.getBoundingClientRect().left - mouse.getBoundingClientRect().width
//       }px`;
//     } else if (event.code === 'ArrowRight') {
//       mouse.style.left = `${
//         mouse.getBoundingClientRect().left + mouse.getBoundingClientRect().width
//       }px`;
//     }
//   };
//   mouse.onblur =function(){
//     mouse.style.cssText = `
//     cursor: pointer;
//     display: inline-block;
//     position: fixed;
//   `
//   }
// };

// const form = document.forms.calculator;

// const money = document.getElementsByName('money')[0]
// const months = document.getElementsByName('months')[0]
// const interest = document.getElementsByName('interest')[0]
// const moneyBefore = document.querySelector('#money-before')
// const moneyAfter = document.querySelector('#money-after')
// const heightAfter = document.querySelector('#height-after')
// const heightBefore = document.querySelector('#height-before')

// money.addEventListener('input', calc)
// months.addEventListener('input', calc)
// interest.addEventListener('input', calc)

// calc()
// function calc(){
//   moneyBefore.value = money.value
//   const result = Math.round(money.value * (1 + (interest.value/100)) ** (months.value/12));

//   moneyAfter.value = result

// heightAfter.style.height = (heightBefore.getBoundingClientRect().height * (moneyAfter.value/moneyBefore.value)) +'px'

// }

// function showConsole(html, callback) {
//   const divCover = document.querySelector('#cover-div');
//   const divForm = document.querySelector('#prompt-form-container');
//   const showButton = document.querySelector('#show-button');
//   const message = document.querySelector('#prompt-message');
//   const inputText = document.getElementsByName('text')[0];
//   const form = document.forms[0];

//   showButton.onclick = function () {
//     divForm.hidden = false;
//     divCover.hidden = false;
//     inputText.focus();
//   };

//   divForm.hidden = false;
//   divCover.hidden = false;
//   inputText.focus();

//   divCover.style.background = 'black';
//   divCover.style.opacity = '0.5';
//   message.innerHTML = html;

//   form.onkeydown = function (event) {
//     if (event.code === 'Escape') {
//       divCover.hidden = true;
//       divForm.hidden = true;
//       callback(null);
//     }
//     if (event.code === 'Tab') {
//       event.preventDefault();
//       for (let i = 0; i < form.elements.length; i++) {
//         if (form.elements[i] === document.activeElement) {
//           form.elements[i].blur();
//           if (i === 2) {
//             form.elements[0].focus();
//             console.log(1);
//           } else {
//             form.elements[i + 1].focus();
//             console.log(2);
//           }
//           break;
//         }
//       }
//     }
//   };

//   form.elements[1].onclick = function () {
//     event.preventDefault();
//     divCover.hidden = true;
//     divForm.hidden = true;
//     callback(inputText.value);
//     inputText.value =''
//   };
//   form.elements[2].onclick = function () {
//     divCover.hidden = true;
//     divForm.hidden = true;
//     callback(null);
//   };
// }

// showConsole('Введите что-нибудь<br>...умное :)', function (value) {
//   console.log(value);
// });

// function preloadImages(sources, callback) {
//   let counter = 0;

//   function onLoad() {
//     counter++;
//     if (counter == sources.length) callback();
//   }

//   for (let source of sources) {
//     let img = document.createElement('img');
//     img.src = source;
//     img.onload = img.onerror = onLoad;
//   }
// }

// // ---------- тест ----------

// let sources = [
//   'https://en.js.cx/images-load/1.jpg',
//   'https://en.js.cx/images-load/2.jpg',
//   'https://en.js.cx/images-load/3.jpg',
// ];

// // добавляем случайные символы к ссылкам, чтобы избежать кеширования
// for (let i = 0; i < sources.length; i++) {
//   sources[i] += '?' + Math.random();
// }

// // для каждого изображения
// // создадим другое изображение с аналогичным src и проверим, есть ли у нас его ширина
// function testLoaded() {
//   let widthSum = 0;
//   for (let i = 0; i < sources.length; i++) {
//     let img = document.createElement('img');
//     img.src = sources[i];
//     widthSum += img.width;
//   }
//   console.log(widthSum);
// }

// // каждое изображение в разрешении 100x100, итоговая сумма их ширин должна быть 300
// preloadImages(sources, testLoaded);

// let a = {a:1}
// function ab(){
//   console.log(this)
// }

// ab.apply(a)

// function loadScript(src) {
//   const script = document.createElement('script');
//   script.src = src;

//   document.head.append(script);
//   script.onload = function(){
//     test()
//   };
// }

// loadScript('test.js')

// function foo(){
//   test()
// }

// let promise = new Promise(function (resolve,reject){
//   const script = document.createElement('script');
//     script.src = 'test.js';

//     script.onload = () => resolve(test())
//     script.onerror = () => reject(new Error('oshibka'))
//    document.head.append(script);

// })

// promise
// .then()
// .catch((e) => console.log(e.message))
// .finally(console.log('vse'))

// function delay(ms) {
//   return new Promise(function(resolve,reject){

//     setTimeout(() => resolve(),ms)

//   })
// }

// delay(1000).then(() => console.log('выполнилось через 3 секунды'));

// new Promise(function(resolve, reject) {

//   setTimeout(() => resolve(1), 1000); // (*)

// }).then(function(result) { // (**)

//   console.log(result); // 1
//   return new Promise((resolve, reject) => { // (*)
//     setTimeout(() => resolve(result * 2), 1000);
//   });

// }).then(function(result) { // (***)

//   console.log(result); // 2
//   return new Promise((resolve, reject) => { // (*)
//     setTimeout(() => resolve(result * 2), 1000);
//   });

// }).then(function(result) {

//   console.log(result); // 4
//   return new Promise((resolve, reject) => { // (*)
//     setTimeout(() => resolve(result * 2), 1000);
//   });

// }).finally(console.log('vse'))

// new Promise(function() {
//   noSuchFunction(); // Ошибка (нет такой функции)
// })
//   .then(() => {
//     // обработчики .then, один или более
//   }); // без .catch в самом конце!

// async function testF(){
//   let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   console.log(response)
// }

// testF()

// async function loadJson(url) {
//        let response = await fetch(url)
//       if (response.status == 200) {
//         let json = await response.json()
//         return console.log(response.json())
//       }
//       throw new Error(response.status);

// }
// // 'https://jsonplaceholder.typicode.com/todos/1'

// loadJson('no-such-user.json').catch(console.log)

//  // Error: 404

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   let response = await fetch(url)
//       if (response.status == 200) {
//         let json = await response.json();
//        return json
//       } else {
//         let err =  new HttpError(response);
//         return err
//       }

// }

// // Запрашивать логин, пока github не вернёт существующего пользователя.
// async function demoGithubUser() {
//   let name = prompt("Введите логин?", "iliakan");

//   let myJson = await loadJson(`https://api.github.com/users/${name}`)

//   if(myJson.login === name){
//     alert(`Полное имя: ${myJson.name}.`);
//   } else {
//     if (myJson instanceof HttpError && myJson.response.status == 404) {
//         alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//   }

// }

// demoGithubUser();

// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10
// }

// function f() {

//   wait().then(console.log)

//   // ...что здесь написать?
//   // чтобы вызвать wait() и дождаться результата "10" от async–функции
//   // не забывайте, здесь нельзя использовать "await"
// }

// f()

// console.log('a');
// new Promise((resolve, reject) => {
// 	console.log('b');
// 	setTimeout(() => {
// 		console.log('c');
// 		resolve();
// 	}, 0);
// })
//   .then(() => console.log('d'));

// console.log('e');
// setTimeout(() => console.log('f'), 0);
// console.log('g');

// Напишите код, который получает список задач по URL https://jsonplaceholder.typicode.com/todos и выводит их в виде списка (<ul>) на страницу.

// Примечание. Сетевые запросы можно выполнять с помощью функции fetch(), работающей на основе Promise API.

// async function render(){
//   let response = await fetch('https://jsonplaceholder.typicode.com/todos')
//   let json = await response.json()

// for (let item of json){
//   let ul = document.createElement('ul')
//   ul.value = item.title
//   document.body.append(ul)
// }

// }

// render()
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((response) => {
// let json = response.json()
// return json
// }).then((json)=>{
//   for (let item of json){
//       let ul = document.createElement('ul')
//       ul.value = item.title
//       document.body.append(ul)
//   }
// })

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((response) => {

// return response.text()

// }).then((jsonText)=>{

//   let json = JSON.parse(jsonText)

//   for (let item of json){
//       let ul = document.createElement('ul')
//       ul.value = item.title
//       document.body.append(ul)
//   }
// })

// Напишите функцию sumWithDelay(), которая принимает delay, a, b и возвращает a + b через delay миллисекунд. Функция должна работать на основе Promise API.

// function sumWithDelay(delay, a, b) {

// return new Promise((resolve,reject) => {
//    setTimeout(resolve(a+b), delay)
// });

// }

// async function start() {
//   const result = await sumWithDelay(1000, 5, 5);
//   console.log(result);
// }

// start();

// Напишите функцию, имитирующую запрос к серверу за получением пользователя. Она принимает id и с задержкой 2500 миллисекунд возвращает пользователя из массива USERS с соответствующим id. В случае отсутствия пользователя сгенерировать обработать исключение.

// const USERS = [
//   { id: '001', name: 'Алексей', age: 25 },
//   { id: '002', name: 'Иван', age: 28 },
//   { id: '003', name: 'Егор', age: 30 },
// ];

// function fetchUser(id) {
//   // Ваш код здесь...
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       for (let i = 0; i < USERS.length; i++) {
//         if (USERS[i].id === id) {
//           return resolve(USERS[i]);
//         }
//         if (i === USERS.length - 1) {
//           return resolve(`пользователя с id: ${id} нет`)
//         }
//       }
//     }, 2500);
//   });
// }

// async function start() {
//   // ...
//     const result = await fetchUser('003');
// console.log(result);

//    // { id: '001', name: "Алексей", age: 25 }
//   // ...
// }

// start();

// function* generateSequence() {
//   console.log('one')

//   yield 1;
//   console.log('two')
//   yield 2;
//   console.log('three')
//   return 3;
// }

// let generator = generateSequence();
// console.log(generator.next());
// console.log(generator.next())
// console.log(generator.next())

// function* gen() {
//   // Передаём вопрос во внешний код и ожидаем ответа
//   let result = yield ; // (*)

//   console.log(result);
// }

// let generator = gen();

// let question = generator.next().value
// generator.next(4);

// console.log(question)

// function* pseudoRandom(previous){

//   while (true) {
//     let next = previous * 16807 % 2147483647;
//     previous = next;
//     yield next;
//   }

// }

// let generator = pseudoRandom(1);

// console.log(generator.next().value); // 16807
// console.log(generator.next().value); // 282475249
// console.log(generator.next().value); // 1622650073

// import test from './test.js';

// test()

// async function load() {
//   let test = await import('./test.js');
//   test.test(); // test

// }
// load()

// import './test.js'

// import {test} from './test.js'

// test()

// let numbers = [];
// numbers = new Proxy(numbers, {
//   set(target, prop, val) {
//     if (typeof val == 'number') {
//       console.log(target);
//       console.log(prop);
//       console.log(val);

//       target[prop] = val;

//       return true;
//     } else {
//       return false;
//     }
//   },
// });

// numbers.push(1000);
// numbers.push(2000);

// console.log(numbers[0])

// let user = {
//   name: "John",

// };

// function wrap(target) {
//   return new Proxy(target, {
//     get(target, prop, receiver) {
//       let value = Reflect.get(...arguments);
//       if (value){
//         return value}
//         else{ return new Error('Ошибка: такого свойства не существует')}
//     }
//   });
// }

// user = wrap(user);

// console.log(user.name); // John
// console.log(user.age); // Ошибка: такого свойства не существует

// let array = [1, 2, 3];

// array = new Proxy(array, {
//   get(target, prop) {
//     let value = target[+prop + target.length];
//     if (value) {
//       return value;
//     } else {
//       throw new Error('Ошибка: такого свойства не существует');
//     }
//   },
// });
// // array.length - N
// console.log(array[-1]); // 3
// console.log(array[-2]); // 2

// function makeObservable(target) {

// target.observe = function(key, value) {
//   console.log(`SET ${key}=${value}`);
// }
//   return new Proxy(target, {
//     set(target, prop, val) {
//       // для перехвата записи свойства
//       if (val) {
//         target.observe(prop, val);
//         target[prop] = val;
//         return true;
//       } else {
//         return false;
//       }
//     },
//   });
// }

// let user = {
// };

// user = makeObservable(user);

// user.name = 'John'; // выводит: SET name=John

// let obj = {
//   name:'Masha'
// }

// console.log('name' in obj)

// const withDefaultValue = (target, defaultValue = 0) => {
// return new Proxy(target, {
//   get: (obj,prop) =>
//     (prop in obj? obj[prop]:
//     defaultValue)
// })
// }

// const position = withDefaultValue({
//   x:24,
//   y:42
// },0)

// const withHiddenProps = (target,prefix = '_')=>{
//   return new Proxy(target,{
//     has: (obj,prop)=>(prop in obj)&&(!prop.startsWith(prefix)),
//     ownKeys: obj => Reflect.ownKeys(obj).filter(p=>!p.startsWith(prefix)),
//     get: (obj,prop,receiver)=>(prop in receiver? obj[prop]:void 0)
//   })
// }

// const data = withHiddenProps({
//   name:'Maxim',
//   age:25,
//   _uid: '1222'
// })

// const IndexArray = new Proxy(Array, {
//   construct(target,[args]){
//     const index={}
//     args.forEach(element => {
//       index[element.id] = element
//     });
//     return new Proxy(new target(...args),{
//       get(arr,prop){
// switch(prop){
//   case 'push':
//   return item=>{
//     index[item.id]=item
//     arr[prop].call(arr,item)
//   }
//   case 'findById':
//     return id =>index[id]

//   default: return arr[prop]
// }
//       }
//     })

//   }
// })

// const users = new IndexArray( [{id:11, name: 'Maxim', job: 'Front', age:24},
// {id:22, name: 'Victor', job: 'Back', age:28},
// {id:33, name: 'Elena', job: 'Student', age:22}])

// let user = {
//   name: "John",
//   hi() { alert(this.name); }
// };

// // разделим получение метода объекта и его вызов в разных строках
// let hi = user.hi
// hi.call(user)

// let user = {
//   name: "John",
//   go: function() { console.log(this.name) }
// }

// (user.go)() // ошибка!

// let obj, method;

// obj = {
//   go: function() {console.log(this); }
// };

// obj.go();               // (1) [object Object]

// (obj.go)();             // (2) [object Object]

// (method = obj.go)();    // (3) undefined

// (obj.go || obj.stop)();
// console.log( 'S\u0307' )

// window.open('https://javascript.info/')

// function isIsogram(str) {
//   for (let elem of [...str.toLowerCase()]) {
//     if ([...str.toLowerCase()].filter((item) => item === elem).length > 1) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isIsogram('Dermatoglyphics'));

// window.onclick = () => {
//   window.open('https://javascript.info');
// };

// let buffer = new ArrayBuffer(166); // создаётся буфер длиной 16 байт
// alert(buffer.byteLength); // 16

// function makeWorker() {
//   name = "Pete";

//   return function() {
//     console.log(name);
//   };
// }

// let name = "John";

// // создаём функцию
// let work = makeWorker();

// // вызываем её
// work(); // что будет показано?

// function sum(a){

//   return function(b){
//      console.log(a+b)
//   }
// }

// sum(1)(2) //3
// sum(5)(-1) // 4

// let x = 1;

// function func() {
//   console.log(x); // ReferenceError: Cannot access 'x' before initialization
//   let x = 2;
// }

// func();

// function calc (a){

// return function(b){
//   console.log(a+b)
// }
// }

// let func = calc(10)

// func(1)

// function logPerson() {
//   console.log(`Person: ${this.name}`);
// }

// const person1 = { name: 'Maxim' };
// const person2 = { name: 'Masha' };

// // function concat()

// function bind(person, log) {
//   log.apply(person)
// }

// bind(person1, logPerson);
// bind(person2, logPerson);

// const response =  fetch('https://jsonplaceholder.typicode.com/users')
// .then(response=>response.body)
// .then(data=>console.log(data))

// async function getUsers(names) {
//   let users = [];

//   for (let people of names) {
//     let response = await fetch(`https://api.github.com/users/${people}`);

//     if (!(response.status === 200)) {
//       users.push(null);
//       continue;
//     }

//     let user = await response.json();
//     users.push(user);
//   }

//   console.log(users);
// }

// getUsers(['iliakan', 'remy', 'no.such.users']);

// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')

// // xhr.responseType = 'json';

// xhr.send()

// xhr.onload = function() {
//   console.log(xhr.response);
// };

// xhr.onerror = function() { // происходит, только когда запрос совсем не получилось выполнить
//   console.log(`Ошибка соединения`);
// };

// xhr.onprogress = function(event) { //
//   console.log(event);
// };

// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', false);

// try {
//   xhr.send();
//   console.log(xhr.upload)
//   if (xhr.status != 200) {
//     console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
//   } else {
//     console.log(xhr.response);
//   }
// } catch(err) { // для отлова ошибок используем конструкцию try...catch вместо onerror
//   console.log("Запрос не удался");
// }

// console.log(xhr.)

// localStorage.setItem('lengttth', {name:'d'});
// // localStorage.clear()

// console.log(localStorage.getItem('lengttth') )

// // for (let key of Object.keys(localStorage)){
// //   console.log(key)
// // }

// cl(JSON.stringify(localStorage))
// localStorage.clear()

// const area = document.querySelector('#area')

// area.value = localStorage.getItem('area');

// area.oninput =()=> {
//   localStorage.setItem('area', area.value)

// }

// localStorage.clear()

// let openRequest = indexedDB.open('store', 1);

// openRequest.onupgradeneeded = (event) => {
//   cl('onupgradeneeded');
//   let db = openRequest.result;
// //  db.createObjectStore('books', { keyPath: 'idBook' });
// //   db.createObjectStore('animals', { keyPath: 'idAnimal' });

//   let books = db.createObjectStore('books', {keyPath: 'id'});
//   let index = books.createIndex('price_idx', 'price');
//   console.log(index)
// };

// openRequest.onsuccess = function () {
//   cl('onsuccess');
//   let db = openRequest.result;

//   cl(db);

//   db.onversionchange = function () {
//     // db.close();
//     console.log('База данных устарела, пожалуйста, перезагрузите страницу.');
//   };

// //   let transaction = db.transaction("books"); // readonly
// // let books = transaction.objectStore("books");
// // let priceIndex = books.index("price_idx");

// // let request = priceIndex.getAll(10);

// // request.onsuccess = function() {
// //   if (request.result !== undefined) {
// //     console.log("Книги", request.result); // массив книг с ценой 10
// //   } else {
// //     console.log("Нет таких книг");
// //   }
// // };

//   let transaction = db.transaction('books', 'readwrite');
//   let books = transaction.objectStore('books');

//   let book = {
//     idBook: 'js',
//     price: 10,
//     created: new Date(),
//   };

//   let request = books.add(book);
//   request.onsuccess = function () {
//     // (4)
//     console.log('Книга добавлена в хранилище', request.result);
//   };

//   request.onerror = function () {
//     console.log('Ошибка', request.error);
//   };

//   cl();
// };

// openRequest.onerror = (event) => {
//   cl(`oneerror: ` + openRequest.error);
// };

// indexedDB.deleteDatabase('store')

// window.onmousemove =(event)=>{
//   console.log(event.clientY , event.clientX)
// }

// function showCircle(cx, cy, radius, callbackk) {
//   document.querySelector(
//     '.show'
//   ).textContent = `showCircle(${cx}, ${cy}, ${radius})`;

//   document.querySelector('.show').onclick = function () {

//     let div = document.createElement('div');
//     document.body.append(div);

//     div.style.width =  0

//     div.style.height = 0

//     div.style.top = `${cx}px`;
//     div.style.left = `${cy}px`;

//     div.classList.add('circle');

//     function callback(div){
//       document.createElement('p').textContent = callbackk
//       div.append(document.querySelector('p'))

//     }

//     setTimeout(() => {
//       div.style.width = radius * 2 + 'px';
//       div.style.height = radius * 2 + 'px';
//       div.addEventListener('transitionend', function handler() {
//         div.removeEventListener('transitionend', handler);
//         callback(div);
//       });
//     }, 0);
//   };
// }

// showCircle(150, 150, 100,'hello');
// cl(performance.now())

// class TimeFormatted extends HTMLElement {
//   render() {
//     let date = new Date(this.getAttribute('datetime') || Date.now());

//     this.innerHTML = new Intl.DateTimeFormat('default', {
//       year: this.getAttribute('year') || undefined,
//       month: this.getAttribute('month') || undefined,
//       day: this.getAttribute('day') || undefined,
//       hour: this.getAttribute('hour') || undefined,
//       minute: this.getAttribute('minute') || undefined,
//       second: this.getAttribute('second') || undefined,
//       timeZoneName: this.getAttribute('time-zone-name') || undefined,
//     }).format(date);
//   }

//   connectedCallback() {
//     if (!this.rendered) {
//       this.render();
//       this.rendered = true;
//     }
//   }

//   static get observedAttributes() {
//     return [
//       'datetime',
//       'year',
//       'month',
//       'day',
//       'hour',
//       'minute',
//       'second',
//       'time-zone-name',
//     ];
//   }

//   attributeChangedCallback(name, oldValue, newValue) {
//     this.render();
//   }
// }

// customElements.define('time-formatted', TimeFormatted);

// class LiveTimer extends TimeFormatted {
//   constructor() {
//     super();
//   }

//   /* ваш код здесь */
// }

// customElements.define('live-timer', LiveTimer);

// setInterval(() => {
//   elem.setAttribute('datetime', new Date());
//   console.log(elem.date);
//   // elem.dispatchEvent(event)
// }, 1000); // (5)

// //  event = new CustomEvent('tick',{
// //   detail: elem.date
// //  });

// elem.addEventListener('tick', (event) => console.log(event.detail));

// elem.attachShadow({mode: 'open'});
// // у теневого дерева свои стили (2)
// elem.shadowRoot.innerHTML = `
// <style> p { font-weight: bold; } </style>
// <p>Hello, John!</p>
// `;

// // <p> виден только запросам внутри теневого дерева (3)
// console.log(document.querySelectorAll('p').length); // 0
// console.log(elem.shadowRoot.querySelectorAll('p').length); // 1

//  console.log("Глава 5.1".match(/\d\.\d/) );


//  let regexp =  /\d\d[:-]\d\d/g ;

//  console.log( "Завтрак в 09:00. Ужин в 21-30".match(regexp) ); 

// let str = "+7(903)-123-45-67";

// let numbers = str.match(/\d+/g);

// console.log(numbers)

// let regexp = /\.+/g;

// console.log("some!... some?.....".match(regexp) )

// cl("123 456".match(/\d+? \d+?/g) )

