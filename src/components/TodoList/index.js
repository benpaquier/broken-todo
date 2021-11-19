import { useContext } from 'react'

import './todo-list.css'
import { TodoContext } from '../../contexts/Todo'
import Checkbox from '../Checkbox'

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext)

  // Function to fix an ability to delete task
  const handleDelete = (id) => {
    const clonedTodos = [...todos]
    const index = clonedTodos.findIndex(task => task.id === id)
    clonedTodos.splice(index,1)
    setTodos(clonedTodos)
  }


  // Function to fix an ability to toggle task
  const toggleCheck = (id) => {
    //--- toujours cloner un tableau qui est dans un state
    const clonedTodos = [...todos]
    //--- fonction qui permet de mofifier un élément du tableau grâce à son index
    const index = clonedTodos.findIndex(task => task.id === id)
    clonedTodos[index].checked = !clonedTodos[index].checked //--- on donne la valeur inverse pour que l'on puisse passer de true à false (= barrer/debarrer la tâche)
    setTodos(clonedTodos) //--- on renvoie notre nouveau tableau pour changer la valeur du state
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