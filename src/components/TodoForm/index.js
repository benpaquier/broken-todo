import { useContext, useState } from 'react'

import './todo-form.css'
import { TodoContext } from '../../contexts/Todo'

const TodoForm = () => {
  const { todos, setTodos } = useContext(TodoContext)
  const [task, setTask] = useState('')

  const handleAddTodo = () => {
    // Fin an ability to add new task
    setTodos([...todos, {id:"", label:task, checked:false}])
    setTask('')
  }
  console.log(todos)
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo()
    }
  }
  
  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  )
}

export default TodoForm