import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

import styles from './SidebarItem.module.scss'
import { SidebarItemType } from 'widgets/Sidebar/model/items'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

interface SidebarItemProps {
  className?: string
  item: SidebarItemType
  authOnly?: boolean
  collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props
  const { t } = useTranslation()
  const isAuth = useSelector(getUserAuthData)

  if (!isAuth && item.authOnly) return null

  return (
    <AppLink
      theme={AppLinkTheme.PRIMARY}
      to={item.path}
      className={classNames(styles.link, { [styles.collapsed]: collapsed })}
    >
      <item.Icon className={styles.icon} />
      <span>{t(item.text)}</span>
    </AppLink>
  )
})
