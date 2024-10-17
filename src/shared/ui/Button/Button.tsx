import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, memo } from 'react'
import styles from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
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
  disabled?: boolean
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = ThemeButton.BACKGROUND,
    size = ButtonSize.M,
    square,
    disabled,
    children,
    ...otherProps
  } = props

  const mods: Mods = {
    [styles.square]: square,
    [styles.disabled]: disabled,
  }

  return (
    <button
      className={classNames(styles.button, mods, [className, styles[theme], styles[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
})
