import { Country } from 'entities/Country'
import { validateProfileData } from './validateProfileData'
import { Currency } from 'entities/Currency'
import { ValidateProfileError } from '../../types/profile'

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

describe('validateProfileData.test', () => {
  test('success', () => {
    const result = validateProfileData(data)

    expect(result).toEqual([])
  })

  test('without firstName and lastName', () => {
    const result = validateProfileData({ ...data, firstName: '', lastName: '' })

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })

  test('incorrect age', () => {
    const result = validateProfileData({ ...data, age: undefined })

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
  })

  test('incorrect country', () => {
    const result = validateProfileData({ ...data, country: undefined })

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
  })

  test('emptry profile', () => {
    const result = validateProfileData({})

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ])
  })
})
