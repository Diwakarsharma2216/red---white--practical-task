import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from './compoent/CartPage'
import Homepage from './page/Homepage'

const MainRoutes = () => {

  return (
    <div>
<Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/cart" element={<CartPage />} />
</Routes>
    </div>
  )
}

export default MainRoutes