import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { Dispatch } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

describe('loginByUsername.test', () => {
  // let dispatch: Dispatch
  // let getState: () => StateSchema

  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })

  test('success login', async () => {
    const userValue = {
      id: '1',
      username: '123',
    }

    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        data: userValue,
      }),
    )

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('rejected login', async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        status: 403,
      }),
    )

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
  })

  // test('success login', async () => {
  //   const userValue = {
  //     id: '1',
  //     username: '123',
  //   }

  //   mockedAxios.post.mockReturnValue(
  //     Promise.resolve({
  //       data: userValue,
  //     }),
  //   )

  //   const action = loginByUsername({ username: '123', password: '123' })
  //   const result = await action(dispatch, getState, undefined)

  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('fulfilled')
  // })

  // test('rejected login', async () => {
  //   mockedAxios.post.mockReturnValue(
  //     Promise.resolve({
  //       status: 403,
  //     }),
  //   )

  //   const action = loginByUsername({ username: '123', password: '123' })
  //   const result = await action(dispatch, getState, undefined)

  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('rejected')
  // })
})
