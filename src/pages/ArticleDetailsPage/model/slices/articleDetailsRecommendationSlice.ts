import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import { ArticleDetailsRecommendationSchema } from '../types/articleDetailsRecommendationSchema'
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations'

const recommendationsAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id,
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
)

export const articleDetailsRecommendationSlice = createSlice({
  name: 'articleDetailsRecommendation',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        state.error = undefined
        recommendationsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationSlice
export const { actions: articleDetailsRecommendationsActions } = articleDetailsRecommendationSlice
