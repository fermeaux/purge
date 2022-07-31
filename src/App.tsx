import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import HabitPage from './habit'

export default function App () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HabitPage />} />
      </Routes>
    </div>
  )
}
