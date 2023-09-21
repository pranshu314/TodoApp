import { React } from 'react'
import TopBar from './TopBar.jsx'
import AddTodo from './AddTodo.jsx'
import BottomBar from './BottomBar.jsx'
import PageTodo from './PageTodo.jsx'
import './App.css'

function App() {

  return (
    <div className='bg-slate-900 h-screen w-screen'>
      <TopBar></TopBar>
      <AddTodo></AddTodo>
      <PageTodo></PageTodo>
      <BottomBar></BottomBar>
    </div>
  )
}

export default App
