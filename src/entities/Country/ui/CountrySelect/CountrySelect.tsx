import { Country } from './../../model/types/country'
import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox } from 'shared/ui/ListBox/ListBox'

interface CountrySelectProps {
  className?: string
  readonly?: boolean
  value?: string
  onChange?: (value: Country) => void
}

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { value, onChange, readonly } = props

  const { t } = useTranslation('country')

  const onChangeHandler = (value: string) => {
    onChange?.(value as Country)
  }

  const options = useMemo(() => {
    return [
      { value: Country.Russia, content: Country.Russia },
      { value: Country.Belarus, content: Country.Belarus },
      { value: Country.Armenia, content: Country.Armenia },
      { value: Country.Kazakhstan, content: Country.Kazakhstan },
      { value: Country.Ukraine, content: Country.Ukraine },
    ]
  }, [])

  return (
    <ListBox
      value={value}
      defaultValue={t('Выберите значение')}
      onChange={onChangeHandler}
      items={options}
      readonly={readonly}
    />
  )
})
