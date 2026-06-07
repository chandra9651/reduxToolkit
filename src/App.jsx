import React from 'react'

import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-600"> Redux Tool Kit</h1>
      <AddTodo />
      <Todos />
    </div>

  )
}

export default App
