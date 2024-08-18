import { classNames } from 'shared/lib/classNames/classNames'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import styles from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        styles.sidebar,
        {
          [styles.collapsed]: collapsed,
        },
        [className],
      )}
    >
      <Button
        className={styles.collapsedBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
        data-testid="sidebar-toggle"
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        <div className={styles.item}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={styles.link}>
            <MainIcon className={styles.icon} />
            <span>Главная </span>
          </AppLink>
        </div>
        <div className={styles.item}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={styles.link}>
            <AboutIcon className={styles.icon} />
            <span>О нас</span>
          </AppLink>
        </div>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={styles.lang} />
      </div>
    </div>
  )
}
