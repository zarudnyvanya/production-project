import { classNames } from 'shared/lib/classNames/classNames'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import styles from './Navbar.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  useEffect(() => {
    if (authData) {
      onCloseModal()
    }
  }, [authData])

  if (authData) {
    return (
      <div className={classNames(styles.navbar, {}, [className])}>
        <Button onClick={onLogout} theme={ThemeButton.OUTLINE} className={styles.links}>
          {t('Выйти')}
        </Button>
      </div>
    )
  }

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button onClick={onShowModal} theme={ThemeButton.OUTLINE} className={styles.links}>
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}
