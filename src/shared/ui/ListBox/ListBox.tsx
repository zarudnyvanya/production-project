import { classNames } from 'shared/lib/classNames/classNames'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ReactNode } from 'react'
import styles from './ListBox.module.scss'
import { AnchorPropsWithSelection } from '@headlessui/react/dist/internal/floating'

interface ListBoxProps {
  className?: string
}

interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  items?: ListBoxItem[]
  className?: string
  value?: string
  defaultValue?: string
  readonly?: boolean
  position?: AnchorPropsWithSelection
  onChange?: <T extends string>(value: T) => void
}

export const ListBox = (props: ListBoxProps) => {
  const { items, value, defaultValue, onChange, readonly, position = 'bottom' } = props

  return (
    <Listbox disabled={readonly} value={value} onChange={onChange}>
      <ListboxButton className={classNames(styles.button)}>{value ?? defaultValue}</ListboxButton>
      <ListboxOptions anchor={position} className={classNames(styles.options)}>
        {items?.map((item) => (
          <ListboxOption
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            className={classNames(styles.option)}
          >
            <span className={classNames(styles.icon, {}, [])}>+</span>
            <div>{item.content}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
