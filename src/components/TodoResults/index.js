import { useContext } from 'react'

import './todo-results.css'
import { TodoContext } from '../../contexts/Todo'

const TodoResults = () => {
  const { todos } = useContext(TodoContext)

  const calculateChecked = () => {
    const checkedTodos = todos.filter(todo => todo.checked)
    return checkedTodos.length
  }

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  )
}

export default TodoResults