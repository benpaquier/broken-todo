import { useContext } from 'react'

import './todo-list.css'
import { TodoContext } from '../../contexts/Todo'
import Checkbox from '../Checkbox/CheckBox'

const TodoList = () => {

  const { todos, setTodos } = useContext(TodoContext)

  // setTodos([basicTasks,...todos])

  const handleDelete = (id) => {
    const clonedTasks = todos.filter((e, i) => i !== id)
    setTodos(clonedTasks)
  }

  const toggleCheck = (id) => {
    setTodos(
    todos.map(
      e => {
       if (e.id === id) {
        {e.checked ? e.checked = false : e.checked = true}
       }
       return e
     }))
  }

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id)
    }
  }

  // console.log(todos);

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id + todoItem.label}
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