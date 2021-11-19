import './App.css'

// Branch Test initialized 

import { TodoContextProvider } from './contexts/Todo'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import TodoResults from './components/TodoResults/TodoResults'

const App = () => {
  return (
    <TodoContextProvider>
      <div className="root">
        <TodoList />
        <TodoResults />
        <TodoForm />
      </div>
    </TodoContextProvider>
  )
}

export default App