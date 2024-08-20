import { FC, useMemo, useState } from 'react'
import { Theme, ThemeContext } from '../lib/ThemeContext'

interface ThemeProviderProps {
  children: React.ReactNode
  initialTheme?: Theme
}

const defaultTheme = (localStorage.getItem('theme') as Theme) || Theme.LIGHT

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  )

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
