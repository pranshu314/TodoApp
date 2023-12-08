import { React, useState } from 'react'
import TopBar from './TopBar.jsx'
import AddTodo from './AddTodo.jsx'
import BottomBar from './BottomBar.jsx'
import PageTodo from './PageTodo.jsx'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className='bg-slate-900 h-screen w-screen'>
      <TopBar></TopBar>
      <AddTodo todos={todos} setTodos={setTodos}></AddTodo>
      <PageTodo todos={todos} setTodos={setTodos}></PageTodo>
      <BottomBar></BottomBar>
    </div>
  )
}

export default App
