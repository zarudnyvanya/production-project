import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import styles from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props
  const { t } = useTranslation()
  return (
    <div className={classNames(styles.loginform, {}, [className])}>
      <Input
        autofocus
        className={classNames(styles.input, {}, [className])}
        placeholder={t('Введите логин')}
      />
      <Input
        className={classNames(styles.input, {}, [className])}
        placeholder={t('Введите пароль')}
      />

      <Button className={classNames(styles.loginBtn, {}, [className])}>{t('Войти')}</Button>
    </div>
  )
}
