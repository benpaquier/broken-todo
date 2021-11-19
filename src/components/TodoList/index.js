import { useContext } from 'react'

import './todo-list.css'
import { TodoContext } from '../../contexts/Todo'
import Checkbox from '../Checkbox'

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext)

  const handleDelete = (id) => {
    const search = todos.findIndex (element => element.id === id )
    const newArray = [...todos]
    newArray.splice(search, 1)
    setTodos(newArray)
  }

  const toggleCheck = (id) => {
    const search = todos.findIndex (element => element.id === id )
    const newArray = [...todos]
    if (todos[search].checked === false) {
      newArray[search].checked = true
    } else {
      newArray[search].checked = false
    }
    setTodos(newArray)
  }

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id)
    }
  }

  console.log(todos);
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
        <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  )
}

export default TodoList