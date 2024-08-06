import { classNames } from 'shared/lib/classNames/classNames'
import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button = (props: ButtonProps) => {
  const { className, theme, children, ...otherProps } = props
  return (
    <button className={classNames(styles.button, {}, [className, styles[theme]])} {...otherProps}>
      {children}
    </button>
  )
}
