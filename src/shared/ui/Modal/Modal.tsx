import { classNames } from 'shared/lib/classNames/classNames'
import { MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { Portal } from '../Portal/Portal'
import styles from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, className, children } = props

  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)

      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const contentHandler = (e: MouseEvent) => {
    e.stopPropagation()
  }

  const keyDownHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        closeHandler()
      }
    },
    [closeHandler],
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', keyDownHandler)
    }

    return () => {
      clearInterval(timerRef.current), document.removeEventListener('keydown', keyDownHandler)
    }
  }, [isOpen, keyDownHandler])

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  }

  return (
    <Portal>
      <div onClick={closeHandler} className={classNames(styles.modal, mods, [className])}>
        <div onClick={contentHandler} className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  )
}
