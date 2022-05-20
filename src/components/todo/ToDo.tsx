import { Todo } from 'data/models'
import { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti';
type ToDoProps = {
  todo: Todo,
  checkComplete(id: number): void
  deleteTodo(id: number): void
}
function ToDo(props: ToDoProps) {
  const { todo, checkComplete, deleteTodo } = props
  
  return (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
      <div key={todo.id} onClick={() => checkComplete(todo.id)}>
        {todo.content}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          className='delete-icon'
          onClick={() => deleteTodo(todo.id)}
        />
        <TiEdit
          className='edit-icon'
         
        />
      </div>
    </div>
  )
}

export default ToDo