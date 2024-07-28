'use client'

import { useEffect, useState } from 'react'
import { GoClock } from 'react-icons/go'

export function Time() {
  const [epoch, setEpoch] = useState(Date.now())

  useEffect(() => {
    const delay = (60 - (Math.floor(epoch / 1_000) % 60)) * 1_000
    const timeout = setTimeout(() => {
      setEpoch(Date.now())
    }, delay)

    return () => clearTimeout(timeout)
  }, [epoch])

  const timeString = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'America/Toronto',
  }).format(epoch)

  return (
    <div className="flex items-center gap-x-1">
      <GoClock size={16} />
      <time dateTime={timeString}>{timeString}</time>
    </div>
  )
}
