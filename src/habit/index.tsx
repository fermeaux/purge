import React from 'react'
import HabitList from './components/habit-list'

export default function HabitPage () {
  return (
    <main className='py-4 px-8 sm:py-8 sm:px-16'>
      <h1 className='text-center text-3xl font-bold text-gray-700'>Traqueur d{"'"}addiction</h1>
      <div className='my-4 sm:my-8'>
        <HabitList />
      </div>
    </main>
  )
}
