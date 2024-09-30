import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'app/types'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    }

    expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
  })

  test('should return state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
  })
})
