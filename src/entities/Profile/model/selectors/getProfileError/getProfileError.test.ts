import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'
import { DeepPartial } from 'app/types'

describe('getProfileData', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: '123',
      },
    }
    expect(getProfileError(state as StateSchema)).toEqual('123')
  })

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})
