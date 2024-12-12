import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'

export const fetchArticleRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articleDetailsPage/fetchArticleRecommendations',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
      const response = await extra.api.get('/articles', {
        params: {
          _limit: 8,
        },
      })
      return response.data
    } catch (error) {
      rejectWithValue('error')
    }
  },
)
