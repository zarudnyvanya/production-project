import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import styles from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
}

export const Text = memo((props: TextProps) => {
  const { title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT, className } = props

  const mods: Mods = {}

  return (
    <div className={classNames(styles.text, mods, [className, styles[theme], styles[align]])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  )
})
