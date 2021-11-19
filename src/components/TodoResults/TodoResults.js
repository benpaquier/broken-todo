import './todo-results.css'

import { useContext } from 'react'
import { TodoContext } from '../../contexts/Todo'

const TodoResults = () => {

  const { todos, setTodos } = useContext(TodoContext)
  
  const calculateChecked = () => {
    
  }

  return (
    <div className="todo-results">
      Done: 
      {calculateChecked()}
    </div>
  )
}

export default TodoResults