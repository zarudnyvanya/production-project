import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'
import { getUserAuthData } from 'entities/User'
import { articleDetailsData } from 'entities/Article/model/selectors/articleDetails'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (articleText, thunkApi) => {
    const { extra, getState, rejectWithValue, dispatch } = thunkApi

    const userData = getUserAuthData(getState())
    const article = articleDetailsData(getState())

    if (!userData || !articleText || !article) {
      return rejectWithValue('error')
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text: articleText,
      })

      if (!response.data) {
        return rejectWithValue('error')
      }

      dispatch(fetchCommentsByArticleId(article.id))

      return response.data
    } catch (e) {
      console.log('e', e)
      return rejectWithValue('error')
    }
  },
)
