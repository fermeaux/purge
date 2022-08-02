import React, { useEffect, useState } from 'react'
import { useLocalStorage } from '../../../hooks/use-local-storage'

interface Prop {
  habit: Habit
}

export default function HabitItem ({ habit }: Prop) {
  const [lastDates, setLastDates] = useLocalStorage<Array<number>>(habit.id, [Date.now()])
  const [diff, setDiff] = useState(0)

  useEffect(() => {
    setDiff(Math.floor((Date.now() - lastDates[0]) / (1000 * 3600 * 24)))
  }, [lastDates])

  const consume = () => setLastDates([Date.now(), ...lastDates])

  return (
    <article style={{ backgroundImage: `url(${habit.cover})` }} className='h-32 rounded-3xl bg-cover bg-center'>
      <div className='flex h-full w-full flex-col items-center justify-center rounded-3xl bg-black/25' onClick={consume}>
        <h2 className='text-center text-2xl font-bold text-white'>{habit.name}</h2>
        <p className='text-center text-xl text-white'>{diff} jours sans</p>
      </div>
    </article>
  )
}
