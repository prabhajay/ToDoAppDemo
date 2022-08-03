const todoUserText=document.querySelector('#add-todo')
const addTodoBtn=document.querySelector('#add-todo-btn')

const todoList=document.querySelector('#todo-list')
/*console.log(todoText)
console.log(addTodoBtn)
console.log(todoList)*/

const markCompleteCb=document.createElement('input',{
    type:'checkbox'
})
const todoText=document.createElement('p')
const deleteBtn=document.createElement