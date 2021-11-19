import './App.css'

import { TodoContextProvider } from './contexts/Todo'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoResults from './components/TodoResults'

const App = () => {
  return (
    <TodoContextProvider>
        <TodoList />
        <TodoResults />
        <TodoForm />
    </TodoContextProvider>
  )
}

export default App