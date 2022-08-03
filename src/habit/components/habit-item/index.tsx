import React, { useEffect, useState } from 'react'
import { useLocalStorage } from '../../../hooks/use-local-storage'
import { BREAK_HABIT_MESSAGES } from '../../constants/consume-messages'

interface Prop {
  habit: Habit
}

export default function HabitItem ({ habit }: Prop) {
  const [lastDates, setLastDates] = useLocalStorage<Array<number>>(habit.id, [Date.now()])
  const [message, setMessage] = useState('Début de la purge')

  useEffect(() => {
    const daysWithout = Math.floor((Date.now() - lastDates[0]) / (1000 * 3600 * 24))
    if (daysWithout > 0) {
      setMessage(`${daysWithout} jours sans`)
      return
    }

    const hoursWithout = Math.floor((Date.now() - lastDates[0]) / (1000 * 3600))
    if (hoursWithout > 0) {
      setMessage(`${hoursWithout} heures sans`)
      return
    }

    const minutesWithout = Math.floor((Date.now() - lastDates[0]) / (1000 * 60))
    if (minutesWithout > 0) {
      setMessage(`${minutesWithout} minutes sans`)
      return
    }

    if (lastDates.length === 1) {
      setMessage('Début de la purge')
      return
    }

    const indexMessage = Math.floor(Math.random() * BREAK_HABIT_MESSAGES.length)
    setMessage(BREAK_HABIT_MESSAGES[indexMessage])
  }, [lastDates])

  const consume = () => setLastDates([Date.now(), ...lastDates])

  return (
    <article style={{ backgroundImage: `url(${habit.cover})` }} className='h-32 rounded-3xl bg-cover bg-center'>
      <div className='flex h-full w-full flex-col items-center justify-center rounded-3xl bg-black/50 transition duration-500 ease-in-out hover:bg-black/25' onClick={consume}>
        <h2 className='text-center text-2xl font-bold text-white'>{habit.name}</h2>
        <p className='text-center text-xl text-white'>{message}</p>
      </div>
    </article>
  )
}
