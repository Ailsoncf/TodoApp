import React, { useState } from 'react'
import {  FaPlusSquare, FaTrash } from 'react-icons/fa'
import './formStyles.css'

const TodoForm = ({ saveTodo }) => {
  const [value, setValue ] = useState('')
  const [ todos, setTodos ] = useState([])


  function handleTodoChange(event) {
    event.preventDefault()
      setValue(event.target.value)
  }

  function handleTodoAdd (event){
    event.preventDefault()
    if(value === ''){
      return
    }
    setTodos([...todos, {
      id: Date.now(),
      text: value
    }])

    setValue('')
  }

  function HandleDeleteTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className='container'>
        <div className='divInput'>
          <input 
            className='formInput' 
            type="text" 
            id='description' 
            placeholder='Adicione uma tarefa'
            onChange={handleTodoChange}
            value={value}
          />
        </div>
        <div className='divButton'>
          <FaPlusSquare  className='button' onClick={handleTodoAdd}>
            
          </FaPlusSquare>
        </div>

        <ul>
          {todos.map(todo => (
            <li key={todo.id} >
              {todo.text}
              <FaTrash onClick={() => HandleDeleteTodo(todo.id)}></FaTrash>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TodoForm

