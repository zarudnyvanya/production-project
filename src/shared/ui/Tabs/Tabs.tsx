import { classNames } from 'shared/lib/classNames/classNames'
import { ReactNode, useCallback } from 'react'
import { Card, CardTheme } from '../Card/Card'
import styles from './Tabs.module.scss'

export interface TabItem {
  value: string
  content: ReactNode
}

interface TabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (value: TabItem) => void
}

export const Tabs = (props: TabsProps) => {
  const { className, tabs, value, onTabClick } = props

  const clickHandle = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab)
      }
    },
    [onTabClick],
  )

  return (
    <div className={classNames(styles.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={classNames(styles.tab, {}, [])}
          theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
}
