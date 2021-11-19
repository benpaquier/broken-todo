import './todo-results.css'
import { useContext } from 'react'

import { TodoContext } from '../../contexts/Todo'

const TodoResults = () => {
  const { todos, setTodos } = useContext(TodoContext)

  const calculateChecked = () => {
    let count = 0

    todos.forEach(element => {
      if (element.checked === true) {
        count += 1
      }
    })
    console.log(count);
  }

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  )
}

export default TodoResults