/* Theory
// const array = [1, 2, 3, 5, 20, 111]
// const arrayString = [ 'a', 'b', 'c', null, 12]
// const array = new Array(1, 2, 3, 5, 20 ,42)
// console.log(array.length)
// console.log(array[1])
// console.log(array[array.length - 1])
// array[0] = 'Privet!'
// console.log(array)
// array[array.length] = 'becon'
// console.log(array) */


// const inputElement = document.getElementById('title');
// let createButton = document.getElementById('create');
// let listElement = document.getElementById('list');

// console.log(listElement.length)

// const notes = ['записать блок про массивы', 'рассказать теорию обьектов',]



// createButton.onclick = function (){
//   if (inputElement.value.length === 0){
//     return;
//   }
  

// listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value)
// )
// inputElement.value = '';
// }

// function getNoteTemplate(title) {
//   return 
//   `
//     <li
//       class="list-group-item d-flex justify-content-between align-items-center"
//       >
//       <span>${title}</span>
//       <span>
//         <span class="btn btn-small btn-success">&check;</span>
//         <span class="btn btn-small btn-danger">&times;</span>
//       </span>
//     </li>
//   `
// }

/* Object theory 

// const person = {

//   firstName: 'Artem',
//   lastName: 'Artem2',
//   year: 1993, 
//   hisGirlfriend: false,
//   languages: ['ru', 'en'],
//   getFullName: function(){
//     console.log(person.firstName + ' ' + person.lastName)
//   }
// }
// console.log(person.getFullName())
// console.log(person.languages)
// console.log(person['languages'])
// const key = 'hisGirlfriend'

// console.log(person[key])

// person.hisGirlfriend = true

// console.log(person[key])
// console.log()

*/


// const notes = [
//   {
//     title: 'записать блок про массивы',
//     complited: false,
//   },
//   {
//     title: 'рассказать теорию обьектов',
//     complited: true,
//   },
  
// ]

// function render (){
//   listElement.innerHTML = '';
//   if(notes.length === 0) {
//     listElement.innerHTML = '<p>Нет элементов</p>'
//   }
//   for (let i=0; i < notes.length; i++){
//   listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
//   }
  // for (let note of notes){
  //   listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
  // }
// }

// render();


// createButton.onclick = function (){
//   if (inputElement.value.length === 0){
//     return;
//   }
  
// const newNote = {
//     title: inputElement.value,
//     complited: false,
// };

// notes.push(newNote);
// render();
// inputElement.value = '';
// };

// listElement.onclick = function (event){
//   if (event.target.dataset.index){
//     const index = parseInt(event.target.dataset.index)
//     const type = event.target.dataset.type
     
//     if(type === "toogle"){
//       notes[index].complited = !notes[index].complited

     
//     } else if (type === "remove"){
//       notes.splice(index, 1)


//     }
//     render();

//   }
  
//   // console.log((event.target.dataset.index), (event.target.dataset.type) )
// };

// function getNoteTemplate(note, index) {
//   return `
//     <li
//       class="list-group-item d-flex justify-content-between align-items-center"
//       >
//         <span 
//         class="${note.complited ? 'text-decoration-line-through' : '' }">${note.title}
//         </span>
//       <span>
//           <span 
//           class="btn btn-small 
//           btn-${note.complited ? 'warning' : 'success'}" 
//           data-index = "${index}" 
//           data-type="toogle"
//           >&check;
//           </span>

//           <span 
//           class="btn btn-small btn-danger"
//           data-index = "${index}" 
//           data-type="remove"
//           >&times;
//           </span>
//       </span>
//     </li>
//   `
// }



