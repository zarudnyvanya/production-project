import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'app/types'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword.test', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'qwerty',
      },
    }

    expect(getLoginPassword(state as StateSchema)).toEqual('qwerty')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getLoginPassword(state as StateSchema)).toEqual(undefined)
  })
})
