import { getQueryParams } from './addQueryParams'

describe('shared/url/addQueryParams', () => {
  test('with one param', () => {
    const params = getQueryParams({
      test: 'value',
    })

    expect(params).toBe('?test=value')
  })
  test('with multiple params', () => {
    const params = getQueryParams({
      a: 'first',
      b: 'second',
    })

    expect(params).toBe('?a=first&b=second')
  })
  test('with undefined', () => {
    const params = getQueryParams({
      test: 'value',
      res: undefined,
    })

    expect(params).toBe('?test=value')
  })
})
