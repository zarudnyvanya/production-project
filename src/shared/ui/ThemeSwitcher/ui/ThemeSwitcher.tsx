import { classNames } from 'shared/lib/classNames/classNames'
import LightTheme from 'shared/assets/icons/theme-light.svg'
import DarkTheme from 'shared/assets/icons/theme-dark.svg'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { useTheme } from 'app/providers/ThemeProvider'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import styles from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
      className={classNames(styles.switcher, {}, [className])}
    >
      {theme === Theme.LIGHT ? (
        <LightTheme width={30} height={30} />
      ) : (
        <DarkTheme width={30} height={30} />
      )}
    </Button>
  )
}
