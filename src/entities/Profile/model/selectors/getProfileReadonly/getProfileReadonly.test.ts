import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileReadonly } from './getProfileReadonly'
import { DeepPartial } from 'app/types'

describe('getProfileData', () => {
  test('should work with filled state to true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    }
    expect(getProfileReadonly(state as StateSchema)).toEqual(true)
  })

  test('should work with filled state to false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: false,
      },
    }
    expect(getProfileReadonly(state as StateSchema)).toEqual(false)
  })

  test('should work with emptry state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
  })
})
