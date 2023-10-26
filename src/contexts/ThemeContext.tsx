import { FC, ReactNode, createContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextProps {
  currentTheme: Theme
  setCurrentTheme: (newTheme: Theme) => void
  toggleCurrentTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  currentTheme: 'light',
  setCurrentTheme: () => {},
  toggleCurrentTheme: () => {}
})

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem('theme') as Theme) || 'dark'
  )

  const toggleTheme = () => {
    setTheme(() => {
      const currentState = theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', currentState)
      return currentState
    })
  }

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        setCurrentTheme: setTheme,
        toggleCurrentTheme: toggleTheme
      }}>
      {children}
    </ThemeContext.Provider>
  )
}
