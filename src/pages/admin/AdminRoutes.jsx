import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'

const AdminRoutes = () => {
  return (
    <Routes>
    <Route path="/admin" element={<Admin />}></Route>
  </Routes>
  )
}

export default AdminRoutes