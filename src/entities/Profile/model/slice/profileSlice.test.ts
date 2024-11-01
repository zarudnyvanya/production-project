import { DeepPartial } from 'app/types'
import { ProfileSchema, ValidateProfileError } from '../types/profile'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { profileActions, profileReducer } from './profileSlice'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const data = {
  age: '22',
  avatar: '',
  city: 'Rostov',
  country: Country.Russia,
  currency: Currency.RUB,
  firstName: 'Ivan',
  lastName: 'Pupkin',
  username: 'petya',
}

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    }

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
      readonly: true,
    })
  })

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
    }

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      data,
      form: data,
      validateErrors: [],
    })
  })

  test('test update', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: data,
    }

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ ...data, firstName: 'Artem' }),
      ),
    ).toEqual({
      form: { ...data, firstName: 'Artem' },
    })
  })

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    }

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending(''))).toEqual({
      isLoading: true,
      validateErrors: undefined,
    })
  })

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    }

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
      isLoading: false,
      data,
      form: data,
      readonly: true,
      validateErrors: undefined,
    })
  })
})
