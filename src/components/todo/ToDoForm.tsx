import React, { useState } from 'react'
import { Todo } from 'data/models'

type ToDoFormPropsType = {
  onSubmit(todo: Todo): void
  isEdit: boolean
}
function ToDoForm(props: ToDoFormPropsType) {
  const {onSubmit, isEdit} = props
  const [input, setInput] = useState('')

  const handleOnChange = (e: any) => {
    setInput(e.target.value)
  }

  const handleSubmit  = (e: any) => {
    e.preventDefault()
    onSubmit({
      id: Math.random(),
      content: input,
      isComplete: false
    })
    setInput('')
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {isEdit ? (<>
        <input 
      type="text" 
      value={input}
      className='todo-input edit'
      onChange={handleOnChange}
      />
      <button className='todo-button edit'>Update</button>
      </>) : (<>
        <input 
      type="text" 
      placeholder='Add'
      value={input}
      className='todo-input'
      onChange={handleOnChange}
      />
      <button className='todo-button'>Add</button>
      </>)}
     
    </form>
  )
}

export default ToDoForm