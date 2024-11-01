import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { DeepPartial } from 'app/types'

describe('getProfileData', () => {
  test('should return data', () => {
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
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: data,
      },
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
