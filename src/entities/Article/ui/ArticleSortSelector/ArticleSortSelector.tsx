import { classNames } from 'shared/lib/classNames/classNames'
import { Select, SelectOption } from 'shared/ui/Select/Select'
import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'
import { ArticleSortField } from 'entities/Article/model/types/article'
import { SortOrder } from 'shared/types'
import styles from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const { className, sort, order, onChangeSort, onChangeOrder } = props
  const { t } = useTranslation()

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: 'возрастанию',
      },
      {
        value: 'desc',
        content: 'убыванию',
      },
    ],
    [],
  )

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: 'дате',
      },
      {
        value: ArticleSortField.TITLE,
        content: 'названию',
      },
      {
        value: ArticleSortField.VIEWS,
        content: 'просмотрам',
      },
    ],
    [],
  )

  return (
    <div className={classNames(styles.ArticleSortSelector, {}, [className])}>
      <Select
        value={sort}
        onChange={onChangeSort}
        options={sortFieldOptions}
        label={t('Сортировать по')}
      />
      <Select value={order} onChange={onChangeOrder} options={orderOptions} label={t('По')} />
    </div>
  )
}
