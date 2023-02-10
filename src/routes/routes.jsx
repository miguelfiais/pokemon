import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Pokemon from '../pages/Pokemon'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemon/:name' element={<Pokemon />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router