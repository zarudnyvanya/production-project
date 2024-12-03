import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { ChangeEvent, useMemo } from 'react'
import styles from './Select.module.scss'

export interface SelectOption<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: SelectOption<T>[]
  readonly?: boolean
  value?: T
  onChange?: (value: T) => void
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { label, options, value, onChange, className, readonly } = props

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T)
  }

  const optionsList = useMemo(() => {
    return options?.map((opt) => (
      <option key={opt.value} className={styles.option}>
        {opt.content}
      </option>
    ))
  }, [options])

  const mods: Mods = {}

  return (
    <div className={classNames(styles.Wrapper, mods, [className])}>
      {label && <span className={styles.label}>{`${label}>`}</span>}
      <select
        className={styles.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  )
}
