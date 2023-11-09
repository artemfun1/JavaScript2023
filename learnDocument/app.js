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
//       if(+elemRow[i].cells[index].textContent > +elemRow[i+1].cells[0].textContent){
//         tbody.append(elemRow[i])
//       }
//       }
//     }
// }

// function sortName(index) {
//   for(let j=0;j<elemRow.length+1;j++){
//     for(let i =0; i<elemRow.length-1;i++){
//       if(elemRow[i].cells[index].textContent > elemRow[i+1].cells[1].textContent){
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




