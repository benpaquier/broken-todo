import './todo-results.css'

const TodoResults = () => {
  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
  }

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  )
}

export default TodoResults