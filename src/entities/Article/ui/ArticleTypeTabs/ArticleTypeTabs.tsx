import { classNames } from 'shared/lib/classNames/classNames'
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs'
import { useCallback, useMemo } from 'react'
import { ArticleType } from 'entities/Article/model/types/article'
import { useTranslation } from 'react-i18next'

interface ArticleTypeTabsProps {
  className?: string
  value: ArticleType
  onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props
  const { t } = useTranslation()

  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t('Все'),
      },
      {
        value: ArticleType.IT,
        content: t('Айти'),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('Экономика'),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('Наука'),
      },
    ],
    [],
  )

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType)
    },
    [onChangeType],
  )

  return (
    <div className={classNames('', {}, [className])}>
      <Tabs value={value} tabs={typeTabs} onTabClick={onTabClick} />
    </div>
  )
}
