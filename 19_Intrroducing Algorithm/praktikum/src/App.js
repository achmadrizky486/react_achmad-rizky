import React from 'react'
import Box from './pages/components/Box'
import Header from './pages/components/Header'
import Todoapp from './pages/Todoapp'
import { todoList } from './dataApp';

const App = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Box /> */}
      <Todoapp todo={todoList} />
    </>
  )
}

export default App