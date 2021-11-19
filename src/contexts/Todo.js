import { createContext, useState } from 'react'

// import todosTemplate from '../todo.json'

const TodoContext = createContext({})

const TodoContextProvider = props => {
  const [todos, setTodos] = useState([])

  const value = {
    todos,
    setTodos
  }

  return (
    <TodoContext.Provider value={value}>
      {props.children}
    </TodoContext.Provider>
  )
}

export {
  TodoContext,
  TodoContextProvider
}