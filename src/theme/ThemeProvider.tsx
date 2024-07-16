import { FC, useMemo, useState } from 'react'
import { Theme, ThemeContext } from './ThemeContext'

interface ThemeProviderProps {
  children: React.ReactNode
}

const defaultTheme = (localStorage.getItem('theme') as Theme) || Theme.LIGHT

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  )

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
