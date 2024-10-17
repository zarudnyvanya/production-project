import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Profile } from 'entities/Profile/model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar'
import { Currency, CurrencySelect } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'
import styles from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstName?: (value: string) => void
  onChangeLastName?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeUsername?: (value: string) => void
  onChangeAvatar?: (value: string) => void
  onChangeCurrency?: (value: Currency) => void
  onChangeCountry?: (value: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    readonly,
    isLoading,
    error,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props
  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
      <div className={classNames(styles.profileCard, {}, [className, styles.loading])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(styles.profileCard, {}, [className, styles.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Произошла ошибка во время загрузки страницы')}
          text={t('Попробуйте обновить страницу')}
        />
      </div>
    )
  }

  const mods: Mods = {
    [styles.editing]: !readonly,
  }

  return (
    <div className={classNames(styles.profileCard, mods, [className])}>
      <div className={styles.data}>
        <div className={styles.avatar}>
          <Avatar size={AvatarSize.M} src={data?.avatar} />
        </div>
        <Input
          className={styles.input}
          value={data?.firstName || ''}
          onChange={onChangeFirstName}
          placeholder={t('Ваше имя')}
          readOnly={readonly}
          autofocus
        />
        <Input
          className={styles.input}
          value={data?.lastName || ''}
          onChange={onChangeLastName}
          placeholder={t('Ваша фамилия')}
          readOnly={readonly}
        />
        <Input
          className={styles.input}
          value={data?.age || ''}
          onChange={onChangeAge}
          placeholder={t('Возраст')}
          readOnly={readonly}
          pattern="[0-9.]+"
        />
        <Input
          className={styles.input}
          value={data?.city || ''}
          onChange={onChangeCity}
          placeholder={t('Город')}
          readOnly={readonly}
        />
        <Input
          className={styles.input}
          value={data?.username || ''}
          onChange={onChangeUsername}
          placeholder={t('Имя пользователя')}
          readOnly={readonly}
        />
        <Input
          className={styles.input}
          value={data?.avatar || ''}
          onChange={onChangeAvatar}
          placeholder={t('Аватар')}
          readOnly={readonly}
        />
        <CurrencySelect readonly={readonly} value={data?.currency} onChange={onChangeCurrency} />
        <CountrySelect readonly={readonly} value={data?.country} onChange={onChangeCountry} />
      </div>
    </div>
  )
}
