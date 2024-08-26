import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { Modal } from 'shared/ui/Modal/Modal'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import styles from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation()

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button onClick={onToggleModal} theme={ThemeButton.OUTLINE} className={styles.links}>
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        modal modal modal modal modal modalmodal modal modal modalmodal modal modal modalmodal modal
        modal modalmodal modal modal modalmodal modal modal modalmodal modal modal modalmodal modal
        modal modalmodal modal modal modalmodal modal modal modalmodal modal modal modalmodal modal
        modal modal
      </Modal>
    </div>
  )
}
