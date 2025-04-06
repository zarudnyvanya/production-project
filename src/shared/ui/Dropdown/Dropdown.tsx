import { classNames } from 'shared/lib/classNames/classNames'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ReactNode } from 'react'
import styles from './Dropdown.module.scss'
import { AppLink } from '../AppLink/AppLink'

interface DropdownItem {
  content?: ReactNode
  disabled?: boolean
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger: ReactNode
}

export const Dropdown = (props: DropdownProps) => {
  const { className, trigger, items } = props

  return (
    <Menu as={'div'} className={classNames(styles.Dropdown, {}, [className])}>
      <MenuButton className={styles.button}>{trigger}</MenuButton>
      <MenuItems transition anchor="bottom end" className={styles.menu}>
        {items.map((item) => {
          const content = (
            <button onClick={item.onClick} className={styles.item} disabled={item.disabled}>
              {item.content}
            </button>
          )

          if (item.href) {
            return (
              <MenuItem key={item.href} as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </MenuItem>
            )
          }

          return <MenuItem key={item.href}>{content}</MenuItem>
        })}
      </MenuItems>
    </Menu>
  )
}
