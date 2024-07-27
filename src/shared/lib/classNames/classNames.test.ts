import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with odditional class', () => {
    const expected = 'someClass class1 class2'
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
  })

  test('with false mods', () => {
    const expected = 'someClass class1 class2 hovered'
    expect(
      classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2']),
    ).toBe(expected)
  })

  test('with undefined mods', () => {
    const expected = 'someClass class1 class2 hovered'
    expect(
      classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2']),
    ).toBe(expected)
  })
})
