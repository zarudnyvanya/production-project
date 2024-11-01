import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileIsLoading } from './getProfileIsLoading'
import { DeepPartial } from 'app/types'

describe('getProfileData', () => {
  test('should work with filled state to true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    }
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
  })

  test('should work with filled state to false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
      },
    }
    expect(getProfileIsLoading(state as StateSchema)).toEqual(false)
  })

  test('should work with emptry state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined)
  })
})
