import { useContext, useState } from 'react'

import './todo-form.css'
import { TodoContext } from '../../contexts/Todo'

const TodoForm = () => {
  const { todos, setTodos } = useContext(TodoContext)
  const [task, setTask] = useState('')

  const handleAddTodo = (e) => {
    e.preventDefault()
    if(task.length !==0){
    setTodos([...todos,
  {
    "label": task   
  }])
    }
    setTask("")
  }
 

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) { //press enter to exc handleAddTodo
      handleAddTodo()
      
    }
    console.log(e.keyCode);
  }


  return (
    <form className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="submit" onClick={handleAddTodo}>
        Add task
      </button>
    </form>
  )
}

export default TodoForm