import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { DeepPartial } from 'app/types'
import { ValidateProfileError } from '../../types/profile'

describe('getProfileData', () => {
  test('should work with filled state', () => {
    const errors = [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.SERVER_ERROR]
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
      },
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors)
  })

  test('should work with filled state and empty array', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [],
      },
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([])
  })

  test('should work with emptry state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
