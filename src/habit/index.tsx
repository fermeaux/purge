import React from 'react'
import HabitList from './components/habit-list'

export default function HabitPage () {
  return (
    <main className='py-8 px-16'>
      <h1 className='text-center text-3xl font-bold'>Traqueur d{"'"}addiction</h1>
      <div className='my-8'>
        <HabitList />
      </div>
    </main>
  )
}
