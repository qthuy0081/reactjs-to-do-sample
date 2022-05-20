import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import { Todo } from '../../data/models/todo.model';
import ToDo from './ToDo';



function ToDoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })
  const addTodo = (todo: Todo) => {
    if (!todo.content || /^\s*$/.test(todo.content)) {
      return
    }
    const newTodoList = [todo, ...todoList]
    setTodoList(newTodoList)
  }

  const checkComplete = id => {
    const updatedTodo = todoList.map(todo => {
      if(todo.id == id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodoList(updatedTodo)
  }

  const deleteTodo = id => {
    console.log(id);
    
    const updatedTodoList = [...todoList].filter(todo => todo.id !== id)
    setTodoList(updatedTodoList)
  }
  const submitUpdate = value => {
    const updatedTodo = todoList.map(todo => {
      if(todo.id === edit.id) {
        todo.content = value
      }
      return todo
    })
    setTodoList(updatedTodo)
    setEdit({
      id: null,
      value: ''
    })
  }
  if(edit.id) {
    return <ToDoForm isEdit={!!edit} onSubmit={submitUpdate}/>
  }
  return (
    <>
      <h1>My Todo list</h1>
      <ToDoForm onSubmit={addTodo} isEdit={!!edit}/>
      <div>
        {todoList.map(todo => {
          return <ToDo key={todo.id} todo={todo} checkComplete={checkComplete} deleteTodo={deleteTodo}></ToDo>
        })}
      </div>
    </>
  )
}

export default ToDoList