import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { SortOrder } from 'shared/types'
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article'

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const { dispatch, getState } = thunkApi

    const inited = getArticlesPageInited(getState())

    if (!inited) {
      const orderFromUrl = searchParams.get('order') as SortOrder
      const sortFromUrl = searchParams.get('sort') as ArticleSortField
      const typeFromUrl = searchParams.get('type') as ArticleType
      const searchFromUrl = searchParams.get('search')

      if (orderFromUrl) {
        dispatch(articlesPageActions.setOrder(orderFromUrl))
      }

      if (sortFromUrl) {
        dispatch(articlesPageActions.setSort(sortFromUrl))
      }

      if (searchFromUrl) {
        dispatch(articlesPageActions.setSearch(searchFromUrl))
      }

      if (typeFromUrl) {
        dispatch(articlesPageActions.setType(typeFromUrl))
      }

      dispatch(articlesPageActions.initState())
      dispatch(fetchArticlesList({}))
    }
  },
)
