import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'app/types'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername.test', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'john',
      },
    }

    expect(getLoginUsername(state as StateSchema)).toEqual('john')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
