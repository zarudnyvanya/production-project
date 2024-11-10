import { classNames } from 'shared/lib/classNames/classNames'
import { useCallback } from 'react'
import { Button, ThemeButton } from '../Button/Button'
import CopyIcon from 'shared/assets/icons/copy.svg'
import styles from './Code.module.scss'

interface CodeProps {
  className?: string
  text: string
}

export const Code = (props: CodeProps) => {
  const { className, text } = props

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={classNames(styles.Code, {}, [className])}>
      <Button onClick={onCopy} theme={ThemeButton.CLEAR} className={styles.copy}>
        <CopyIcon className={styles.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  )
}
