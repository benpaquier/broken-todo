import { useContext, useState } from 'react'

import './todo-form.css'
import { TodoContext } from '../../contexts/Todo'


const TodoForm = () => {
  const { todos, setTodos } = useContext(TodoContext)
  const [task, setTask] = useState({
    id: 0,
    label: "",
    checked: false
  })

  const handleChange = (e) => {
    setTask({
      label: e.target.value
    })
  }

  const handleAddTodo = () => {
    console.log(task)
    const newTodos = [...todos, task]
    setTodos(newTodos)
    console.log(todos)
  }

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo()
    }
  }

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task.label}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  )
}

export default TodoForm