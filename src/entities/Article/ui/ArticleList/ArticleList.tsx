import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { Article, ArticleView } from 'entities/Article/model/types/article'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { HTMLAttributeAnchorTarget } from 'react'
import { VirtuosoGrid } from 'react-virtuoso'
import styles from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />)
}

export const ArticleList = (props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.SMALL, target } = props
  const { t } = useTranslation()

  const renderArticle = (article: Article) => {
    return <ArticleListItem key={article.id} article={article} view={view} target={target} />
  }

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
        <Text text={t('Статьи не найдены')} />
      </div>
    )
  }

  return (
    <div className={classNames(styles.ArticleList, {}, [])}>
      <VirtuosoGrid
        data={articles}
        useWindowScroll
        customScrollParent={document.getElementById('page-id') as HTMLElement}
        totalCount={16}
        style={{ height: isLoading ? 0 : 600 }}
        listClassName={classNames(styles.ArticleList, {}, [className, styles[view]])}
        itemContent={(_, article) => {
          return (
            <div
              style={{
                height: view === ArticleView.SMALL ? 300 : 600,
              }}
            >
              {renderArticle(article)}
            </div>
          )
        }}
      />
      {isLoading && (
        <div className={classNames(styles.ArticleList, {}, [styles[view]])}>
          {getSkeletons(view)}
        </div>
      )}
    </div>
  )
}
