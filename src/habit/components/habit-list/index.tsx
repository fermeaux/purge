import React from 'react'
import { HABITS } from '../../constants/habit-list'
import HabitItem from '../habit-item'

export default function HabitList () {
  return (
    <section className='grid gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
      {HABITS.map(habit => <HabitItem key={habit.id} habit={habit} />)}
    </section>
  )
}
