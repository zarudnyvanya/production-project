import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'app/types'
import { articleDetailsData, articleDetailsError, articleDetailsIsLoading } from './articleDetails'

describe('articleDetails', () => {
  test('get data', () => {
    const data = {
      id: '1',
      title: 'title',
    }

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    }

    expect(articleDetailsData(state as StateSchema)).toEqual(data)
  })
  test('loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    }

    expect(articleDetailsIsLoading(state as StateSchema)).toBe(true)
  })

  test('error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    }

    expect(articleDetailsError(state as StateSchema)).toBe('error')
  })
})
