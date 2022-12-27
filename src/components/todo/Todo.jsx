import React from 'react'
import '../todo/Todo.scss'

const Todo = () => {
  return (
    <div className='container-todo'>
        <h1>TODO LIST</h1>
         <input placeholder='Add a todo' type="text" />
        <button>Submit</button>
        <div className='container-todolist'>
       <div className="todos-points">
        <p>HEloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</p> <button>remove</button>
       </div>
        </div>
    </div>
  )
}

export default Todo
