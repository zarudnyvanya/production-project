import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState'
import { StateSchema } from 'app/providers/StoreProvider'
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'
import { AppDispatch } from 'app/providers/StoreProvider/config/store'
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'
import styles from './LoginForm.module.scss'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

enum LoginErrors {
  INCORRECT_DATA = '',
  SERVER_ERROR = '',
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props
  const { t } = useTranslation()

  const { username, password, isLoading, error } = useSelector((state: StateSchema) =>
    getLoginState(state),
  )
  const dispatch = useDispatch<AppDispatch>()

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch],
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch],
  )

  const onLoginClick = () => {
    dispatch(loginByUsername({ username, password }))
  }

  return (
    <div className={classNames(styles.loginform, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text text={t('Введён неверный логин или пароль')} theme={TextTheme.ERROR} />}
      <Input
        value={username}
        onChange={onChangeUsername}
        autofocus
        className={classNames(styles.input, {}, [className])}
        placeholder={t('Введите логин')}
      />
      <Input
        value={password}
        onChange={onChangePassword}
        className={classNames(styles.input, {}, [className])}
        placeholder={t('Введите пароль')}
      />

      <Button
        disabled={isLoading}
        onClick={onLoginClick}
        className={classNames(styles.loginBtn, {}, [className])}
      >
        {t('Войти')}
      </Button>
    </div>
  )
})
