import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleList } from 'entities/Article'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { Page } from 'widgets/Page/Page'
import { articlesPageReducer, getArticles } from './../../model/slices/articlesPageSlice'
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
  getArticlesPageView,
} from './../../model/selectors/articlesPageSelectors'
import { initArticlesPage } from './../../model/services/initArticlesPage/initArticlesPage'
import { fetchNextArticlesPage } from './../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { useSearchParams } from 'react-router-dom'
import styles from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props
  const { t } = useTranslation('article')
  const [searchParams] = useSearchParams()

  const articles = useSelector(getArticles.selectAll)
  const page = useSelector(getArticlesPageNum)
  const hasMore = useSelector(getArticlesPageHasMore)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)

  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  }, [dispatch])

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [page, hasMore, isLoading])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(styles.ArticlesPage, {}, [className])}
      >
        <ArticlesPageFilters className={styles.articlesFilters} />
        <ArticleList
          className={styles.articleList}
          view={view}
          isLoading={isLoading}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
