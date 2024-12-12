import { StateSchema } from 'app/providers/StoreProvider'

export const getArticlesPageRecommendationsIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.recommendations.isLoading

export const getArticlesPageRecommendationsError = (state: StateSchema) =>
  state.articleDetailsPage?.recommendations.error
