import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { profileActions, updateProfileData } from 'entities/Profile'
import styles from './ProfilePageHeader.module.scss'

interface ProfilePageHeaderProps {
  className?: string
  readonly?: boolean
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className, readonly } = props
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [])

  return (
    <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {readonly ? (
        <Button onClick={onEdit} theme={ThemeButton.OUTLINE}>
          {t('Редактировать')}
        </Button>
      ) : (
        <div className={styles.actions}>
          <Button onClick={onCancelEdit} theme={ThemeButton.OUTLINE_RED}>
            {t('Отменить')}
          </Button>
          <Button onClick={onSave} theme={ThemeButton.OUTLINE}>
            {t('Сохранить')}
          </Button>
        </div>
      )}
    </div>
  )
}
