import { useState } from 'react'
import './App.css'
import Add from '../component/add'
import Update from '../component/update'
import View from '../component/view'
import Delete from '../component/delete'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from '../component/dashboard'
import Login from '../component/login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/add' element={<Add/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
          <Route path='/delete/:id' element={<Delete/>}></Route>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/view' element={<View/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
