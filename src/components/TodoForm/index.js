import { useContext, useState } from 'react'

import './todo-form.css'
import { TodoContext } from '../../contexts/Todo'

const TodoForm = () => {
  const { todos, setTodos } = useContext(TodoContext)
  const [task, setTask] = useState([])

  const handleAddTodo = (e) => {
    console.log("event de handleAddTodo: ",e)
    e.preventDefault()
    task = e.target.value
    setTask(task)
  }

  // handleSubmit(e) {
  //   e.preventDefault()
  //   this.props.addTask(this.state.task)
  //   this.setState({ task: "" })
  // }

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo()
    }
  }

  return (
    <div className="todo-form">
      <form onSubmit={setTask([handleAddTodo,...task])}>
        <input
          placeholder="Enter new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyUp={handleKeyUp}
        />
      </form>
        <button type="button" onClick={handleAddTodo}>
          Add task
        </button>
    </div>
  )
}

export default TodoForm