import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import { Todo } from '../../data/models/todo.model';
function ToDoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const addTodo = (todo: Todo) => {
    if(!todo.content || /^\s*$/.test(todo.content)) {
      return
    }
    const newTodoList = [todo, ...todoList]
    setTodoList(newTodoList)
  }
  return (
    <div>
      <ToDoForm onSubmit={addTodo}/>
    </div>
  )
}

export default ToDoList