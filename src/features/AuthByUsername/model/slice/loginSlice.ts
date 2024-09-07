import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
}

export const loginSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      const { payload } = action
      state.username = payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      const { payload } = action
      state.password = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
