import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { ArticleList } from 'entities/Article'
import { useTranslation } from 'react-i18next'
import { VStack } from 'shared/ui/Stack'
import { useGetArticleRecommendationsListQuery } from '../api/articleRecommendationsApi'

interface ArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = (props: ArticleRecommendationsListProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { data: articles, isLoading, error } = useGetArticleRecommendationsListQuery(3)

  if (isLoading || error) {
    return null
  }

  return (
    <VStack gap={8} className={classNames('', {}, [className])}>
      <Text title={t('Рекомендации')} />
      <ArticleList articles={articles} target={'_blank'} />
    </VStack>
  )
}
