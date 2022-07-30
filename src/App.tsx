import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import HabitList from './habit'

export default function App () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HabitList />} />
      </Routes>
    </div>
  )
}
