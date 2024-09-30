import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { StateSchema } from '../config/StateSchema'
import { DeepPartial } from 'app/types'
import { ReducersMapObject } from '@reduxjs/toolkit'

export type AsyncReducers = ReducersMapObject<StateSchema>
type DeepAsyncReducers = DeepPartial<AsyncReducers>

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepAsyncReducers
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState, asyncReducers } = props

  const store = createReduxStore(initialState as StateSchema, asyncReducers as AsyncReducers)

  return <Provider store={store}>{children}</Provider>
}
