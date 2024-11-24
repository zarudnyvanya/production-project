import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from 'entities/Profile'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useParams } from 'react-router-dom'
import { Page } from 'shared/ui/Page/Page'

export const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}
const ProfilePage = (props: ProfilePageProps) => {
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const errors = useSelector(getProfileValidateErrors)

  const { id } = useParams<{ id: string }>()

  const { t } = useTranslation('profile')

  const dispatch = useAppDispatch()

  const validateErrorTranslates = {
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка со стороны сервера'),
  }

  useInitialEffect(() => {
    dispatch(fetchProfileData(id))
  }, [dispatch])

  const onChangeFirstName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ firstName: value }))
    },
    [dispatch],
  )

  const onChangeLastName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastName: value }))
    },
    [dispatch],
  )

  const onChangeAge = useCallback(
    (value: string) => {
      const mutatedValue = value.replace(/[^0-9]/g, '')

      if (value !== mutatedValue) return

      dispatch(profileActions.updateProfile({ age: value }))
    },
    [dispatch],
  )

  const onChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ city: value }))
  }, [])

  const onChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ username: value }))
  }, [])

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }))
  }, [])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }, [])

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page>
        <ProfilePageHeader readonly={readonly} />
        {errors &&
          errors.length > 0 &&
          errors.map((error) => (
            <Text theme={TextTheme.ERROR} key={error} text={validateErrorTranslates[error]} />
          ))}
        <ProfileCard
          data={formData}
          readonly={readonly}
          isLoading={isLoading}
          error={error}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
