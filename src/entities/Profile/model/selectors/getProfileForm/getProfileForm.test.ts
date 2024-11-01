import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { DeepPartial } from 'app/types'

describe('getProfileData', () => {
  test('should return data', () => {
    const form = {
      age: '22',
      avatar: '',
      city: 'Rostov',
      country: Country.Russia,
      currency: Currency.RUB,
      firstName: 'Ivan',
      lastName: 'Pupkin',
      username: 'petya',
    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        form,
      },
    }
    expect(getProfileForm(state as StateSchema)).toEqual(form)
  })

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
