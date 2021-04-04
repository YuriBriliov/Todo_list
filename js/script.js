'use strict'

let inputMessange = document.querySelector('#mess_input');
let addBtn = document.querySelector('#btn_add_task');
let todoBlock = document.querySelector(".task_area");
let tasks = document.querySelector('.tasks')
let date = new Date();
let todoList = [];




addBtn.addEventListener('click', (event)=>{
  event.preventDefault()
  if (inputMessange.value === '') {
    alert("строка не должна быть пустой")
  } else {
    addTodo();
  }
});
inputMessange.addEventListener('keydown', (event) => {
  if (inputMessange.value === '' && (event.key === "Enter" || event.keyCode === 13)) {
    alert("строка не должна быть пустой")
  } else if (event.key === "Enter" || event.keyCode === 13) {
    addTodo();
  }
});


function addTodo() {
  let item = document.createElement('li');
  item.classList.add('li_item');
  todoBlock.appendChild(item);

  let dateTodo = document.createElement('div');
  dateTodo.classList.add('date');
  dateTodo.textContent = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  item.appendChild(dateTodo);

  let input_text = document.createElement('input');
  input_text.classList.add('text_todo');
  input_text.classList.add('dis');
  input_text.value = inputMessange.value;
  input_text.disabled = true;
  input_text.addEventListener('keydown', (event) => {
    if (event.key === "enter" || event.keyCode === 13) {
      input_text.disabled = true;
      input_text.classList.toggle('enter');
      btnEdit.classList.toggle('remove');
      btnChan.classList.toggle('remove');
    }
  })
  item.appendChild(input_text);

  let btnRdy = document.createElement('button');
  btnRdy.innerHTML = "ГОТОВО";
  btnRdy.classList.add('btn_rdy');
  btnRdy.classList.add('btn_control');
  item.appendChild(btnRdy);

  let btnEdit = document.createElement('button');
  btnEdit.innerHTML = "РЕДАКТИРОВАТЬ";
  btnEdit.classList.add('btn_edit');
  btnEdit.classList.add('btn_control');
  btnEdit.addEventListener('click', (event) => {
    event.preventDefault();
    if (input_text.disabled = true) {
      input_text.disabled = false
    }
    input_text.classList.toggle('enter');
    btnEdit.classList.toggle('remove');
    btnChan.classList.toggle('remove');
  })
  item.appendChild(btnEdit);

  let btnChan = document.createElement('button');
  btnChan.innerHTML = "ИЗМЕНИТЬ";
  btnChan.classList.add('btn_chan');
  btnChan.classList.add('btn_control');
  btnChan.classList.add('remove');
  btnChan.addEventListener('click', (event) => {
    event.preventDefault();
    input_text.disabled = true;
    input_text.classList.toggle('enter');
    btnEdit.classList.toggle('remove');
    btnChan.classList.toggle('remove');
  })
  item.appendChild(btnChan);

  let btnDel = document.createElement('button');
  btnDel.innerHTML = "УДАЛИТЬ";
  btnDel.classList.add('btn_del');
  btnDel.classList.add('btn_control');
  btnDel.addEventListener('click', (event) => {
    event.preventDefault();
    let parLi = event.target.parentElement;
    // console.log(todoList.indexOf(parLi))
    todoList.forEach((item,index)=>{
      if (todoList[item] == index) {
        console.log(item)
      }
    })
    parLi.remove();
  })
  item.appendChild(btnDel);
  inputMessange.value = ''
  todoList.unshift(item);
  console.log(todoList)
}
