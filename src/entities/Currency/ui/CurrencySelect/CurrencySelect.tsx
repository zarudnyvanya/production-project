import { Currency } from './../../model/types/currency'
import { useTranslation } from 'react-i18next'
import { memo, useMemo } from 'react'
import { ListBox } from 'shared/ui/ListBox/ListBox'

interface CurrencyProps {
  className?: string
  readonly?: boolean
  value?: string
  onChange?: (value: Currency) => void
}

export const CurrencySelect = memo((props: CurrencyProps) => {
  const { value, onChange, readonly } = props
  const { t } = useTranslation('currency')

  const onChangeHandler = (value: string) => {
    onChange?.(value as Currency)
  }

  const options = useMemo(() => {
    return [
      { value: Currency.RUB, content: Currency.RUB },
      { value: Currency.USD, content: Currency.USD },
      { value: Currency.EUR, content: Currency.EUR },
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
