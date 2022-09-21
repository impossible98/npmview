// import third-party modules
import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import local modules
import Home from '../pages/Home/index'
import Package from '../pages/Package/index'

function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:name" element={<Package />} />
      <Route path="/:scope/:name" element={<Package />} />
    </Routes>
  )
}

export default Router