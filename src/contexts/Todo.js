import { createContext, useState } from 'react'

import todosTemplate from '../todo.json'

const TodoContext = createContext({})

const TodoContextProvider = props => {
  const [todos, setTodos] = useState(todosTemplate)

  const value = {
    todos: todos,
    setTodos: setTodos
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