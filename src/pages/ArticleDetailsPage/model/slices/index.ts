import { combineReducers } from '@reduxjs/toolkit'
import { articleDetailsCommentReducer } from './articleDetailsCommentSlice'
import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationSlice'

export const articleDetailsPageReducer = combineReducers({
  comments: articleDetailsCommentReducer,
  recommendations: articleDetailsRecommendationsReducer,
})
