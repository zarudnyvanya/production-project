import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { ChangeEvent, memo, useMemo } from 'react'
import styles from './Select.module.scss'

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  readonly?: boolean
  value?: string
  onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
  const { label, options, value, onChange, className, readonly } = props

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
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
})
