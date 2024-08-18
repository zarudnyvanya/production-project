import { classNames } from 'shared/lib/classNames/classNames'
import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  square?: boolean
  size?: ButtonSize
}

export const Button = (props: ButtonProps) => {
  const { className, theme, size, square, children, ...otherProps } = props

  const mods: Record<string, boolean> = {
    [styles.square]: square,
  }

  return (
    <button
      className={classNames(styles.button, mods, [className, styles[theme], styles[size]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
