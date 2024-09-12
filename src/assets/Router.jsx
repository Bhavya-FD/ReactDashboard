/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login_form from '../Components/Login_form'
import Dashboard from '../Components/DashBoard'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login_form/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
