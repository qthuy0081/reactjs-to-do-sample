import React, { useState } from 'react'
import { Todo } from 'data/models'

interface IToDoForm {
  onSubmit(todo: Todo): void
}
function ToDoForm(props: IToDoForm) {

  const [input, setInput] = useState('')

  const handleOnChange = (e: any) => {
    setInput(e.target.value)
  }

  const handleSubmit  = (e: any) => {
    e.preventDefault()
    props.onSubmit({
      id: 10,
      content: input
    })
    setInput('')
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input 
      type="text" 
      placeholder='Add'
      value={input}
      className='todo-input'
      onChange={handleOnChange}
      />
      <button className='todo-button'>Add</button>
    </form>
  )
}

export default ToDoForm