import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ProfileCard.module.scss'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props
  const { t } = useTranslation('profile')

  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)

  console.log('data', data)

  return (
    <div className={classNames(styles.profileCard, {}, [className])}>
      <div className={classNames(styles.header)}>
        <Text title={t('Профиль')} />
        <Button theme={ThemeButton.OUTLINE}>{t('Редактировать')}</Button>
      </div>
      <div className={styles.data}>
        <Input className={styles.input} value={data?.firstName || ''} placeholder={t('Ваше имя')} />
        <Input
          className={styles.input}
          value={data?.lastName || ''}
          placeholder={t('Ваша фамилия')}
        />
      </div>
    </div>
  )
}
