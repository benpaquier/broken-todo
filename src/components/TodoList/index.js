import { useContext } from 'react'

import './todo-list.css'
import { TodoContext } from '../../contexts/Todo'
import Checkbox from '../Checkbox'

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext)

  const handleDelete = (id) => {
    // Fix an ability to delete task
  }

  const toggleCheck = (id) => {
    // Fix an ability to toggle task
  }

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id)
    }
  }

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Looks like you're absolutely free today!</div>
      )}
    </div>
  )
}

export default TodoList