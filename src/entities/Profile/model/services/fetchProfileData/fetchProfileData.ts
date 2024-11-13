import { createAsyncThunk } from '@reduxjs/toolkit'
import { Profile } from '../../types/profile'
import { ThunkConfig } from 'app/providers/StoreProvider'

export const fetchProfileData = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    if (!profileId) {
      return rejectWithValue('error')
    }

    try {
      const response = await extra.api.get<Profile>(`/profile/${profileId}`)

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (error) {
      console.log('error', error)

      return rejectWithValue('error')
    }
  },
)
