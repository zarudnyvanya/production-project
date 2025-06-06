import { classNames } from 'shared/lib/classNames/classNames'
import { HTMLAttributes, ReactNode } from 'react'
import styles from './Card.module.scss'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactNode
  theme?: CardTheme
}

export const Card = (props: CardProps) => {
  const { className, children, theme = CardTheme.NORMAL, ...otherProps } = props
  return (
    <div className={classNames(styles.Card, {}, [className, styles[theme]])} {...otherProps}>
      {children}
    </div>
  )
}
