import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UiSchema } from '../types/UiSchema'

const initialState: UiSchema = {
  scroll: {},
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<{ path: string; position: number }>) => {
      const { path, position } = action.payload
      state.scroll[path] = position
    },
  },
})

export const { reducer: uiReducer } = uiSlice
export const { actions: uiActions } = uiSlice
