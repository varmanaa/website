'use client'

import { IconWithTooltip } from '#components'
import { getTheme } from '#utils'
import { useEffect, useState } from 'react'
import { GoMoon } from 'react-icons/go'

export function ThemeIcon() {
  const [theme, setTheme] = useState<string>()

  useEffect(() => {
    setTheme(getTheme())

    const handleKeyDown = (ev: KeyboardEvent) => {
      if (ev.key !== 'Shift') return

      const newTheme = getTheme() === 'dark' ? 'light' : 'dark'

      setTheme(newTheme)
      window.localStorage.setItem('theme', newTheme)
      document.documentElement.dataset.theme = newTheme
    }

    if (typeof window !== 'undefined')
      window.addEventListener('keydown', handleKeyDown)

    return () => {
      if (typeof window !== 'undefined')
        window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <IconWithTooltip
      icon={<GoMoon size={24} />}
      onClick={() => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'

        setTheme(newTheme)
        window.localStorage.setItem('theme', newTheme)
        document.documentElement.dataset.theme = newTheme
      }}
      placement="bottom"
      text="Toggle theme (Shift)"
    />
  )
}