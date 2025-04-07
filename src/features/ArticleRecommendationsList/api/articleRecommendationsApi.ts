import { api } from 'shared/api/rtkApi'

const recommendationsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query({
      query: (limit) => ({
        url: `/articles`,
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
})

export const { useGetArticleRecommendationsListQuery } = recommendationsApi
