import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean
  readOnly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    value = '',
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readOnly,
    className,
    ...otherProps
  } = props

  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)

  const ref = useRef<HTMLInputElement>(null)

  const isCaretVisible = isFocused && !readOnly

  useEffect(() => {
    if (value.length > 0) {
      setCaretPosition(value.length)
    }
  }, [])

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autofocus, readOnly])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    onChange?.(value)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const mods: Mods = {
    [styles.readonly]: readOnly,
  }

  return (
    <div className={classNames(styles.inputWrapper, mods, [className])}>
      {placeholder && <div className={styles.placeholder}>{`${placeholder}>`}</div>}
      <div className={styles.caretWrapper}>
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          className={styles.input}
          value={value}
          onChange={onChangeHandler}
          readOnly={readOnly}
          type={type}
          ref={ref}
          {...otherProps}
        />
        {isCaretVisible && (
          <span style={{ left: caretPosition * 8.8 }} className={styles.caret}></span>
        )}
      </div>
    </div>
  )
})
