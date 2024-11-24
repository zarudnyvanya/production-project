import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { Article, ArticleView } from 'entities/Article/model/types/article'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import styles from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />)
}

export const ArticleList = (props: ArticleListProps) => {
  const { className, articles, view = ArticleView.SMALL, isLoading } = props

  const renderArticle = (article: Article) => {
    return <ArticleListItem key={article.id} article={article} view={view} />
  }

  return (
    <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
      {articles?.length > 0 ? articles?.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  )
}
