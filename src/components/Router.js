import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Drinks from './drinks/Drinks'
import SingleDrink from './drinks/SingleDrink'
const Router = () => {
  return (
<Routes>

  <Route exact path="/" element={<Drinks />} />
  <Route exact path="/coffee/:id" element={  <SingleDrink /> } />

  </Routes>
  )
}

export default Router