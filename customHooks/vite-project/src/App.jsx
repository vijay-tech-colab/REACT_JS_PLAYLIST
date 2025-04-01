import React from 'react'
import User from './components/User'
import Product from './components/Product'
import Welcome from './components/Welcome'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/users' element={<User/>}/>
        <Route path='/products' element={<Product/>}/>
      </Routes>
      
    </div>
  )
}

export default App