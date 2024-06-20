'use client'

import './component.css'

import { getTheme } from '#utils'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<string>()
  const [classes, setClasses] = useState('theme-toggle relative')

  useEffect(() => {
    setTheme(getTheme())
  }, [])

  return (
    <button
      aria-pressed={theme === 'dark'}
      className={classes}
      onClick={() => {
        const selectedTheme = theme === 'light' ? 'dark' : 'light'

        setTheme(selectedTheme)
        setClasses(c => `${c} before:transition-all before:duration-[250ms]`)
        window.localStorage.setItem('theme', selectedTheme)
        document.documentElement.dataset.theme = selectedTheme
      }}
      type="button"
    />
  )
}
