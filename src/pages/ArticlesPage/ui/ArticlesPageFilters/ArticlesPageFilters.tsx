import { classNames } from 'shared/lib/classNames/classNames'
import { ArtcileViewSelector } from 'features/ArtcileViewSelector'
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'
import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import { ArticleTypeTabs, ArticleView } from 'entities/Article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice'
import { useTranslation } from 'react-i18next'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector'
import { ArticleType, ArticleSortField } from 'entities/Article'
import { SortOrder } from 'shared/types'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'
import { TabItem } from 'shared/ui/Tabs/Tabs'
import styles from './ArticlesPageFilters.module.scss'

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
  const { className } = props
  const { t } = useTranslation()
  const view = useSelector(getArticlesPageView)
  const sort = useSelector(getArticlesPageSort)
  const order = useSelector(getArticlesPageOrder)
  const search = useSelector(getArticlesPageSearch)
  const type = useSelector(getArticlesPageType)

  const dispatch = useAppDispatch()

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onViewClick = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view))
    },
    [dispatch],
  )

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort))
      dispatch(articlesPageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData],
  )

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder))
      dispatch(articlesPageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData],
  )

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search))
      dispatch(articlesPageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData],
  )

  const onChangeType = useCallback(
    (type: ArticleType) => {
      dispatch(articlesPageActions.setType(type))
      dispatch(articlesPageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData],
  )

  return (
    <div className={classNames(styles.ArticlesPageFilters, {}, [className])}>
      <div className={styles.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArtcileViewSelector view={view} onViewClick={onViewClick} />
      </div>
      <Card className={styles.search}>
        <Input value={search} onChange={onChangeSearch} placeholder={t('Поиск')} />
      </Card>
      <ArticleTypeTabs value={type} onChangeType={onChangeType} />
    </div>
  )
}
