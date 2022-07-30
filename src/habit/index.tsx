import React from 'react'
import { HABITS } from './constants/habit-list'
import HabitItem from './HabitItem'

export default function HabitList () {
  return (
    <div>
      {HABITS.map((habit, index) => <HabitItem key={index} habit={habit} />)}
    </div>
  )
}
