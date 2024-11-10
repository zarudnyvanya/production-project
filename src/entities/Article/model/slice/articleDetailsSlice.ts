import { createSlice } from '@reduxjs/toolkit'
import { ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { fetchArtcileById } from '../services/fetchArtcileById/fetchArtcileById'

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {
    setArticle: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtcileById.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArtcileById.fulfilled, (state, action) => {
        state.data = action.payload
        state.isLoading = false
        state.error = undefined
      })
      .addCase(fetchArtcileById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice
