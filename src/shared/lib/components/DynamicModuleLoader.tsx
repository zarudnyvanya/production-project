import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'

import { FC, ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoader {
  children?: ReactNode
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoader> = (props) => {
  const { children, reducers, removeAfterUnmount } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).map(([name, reducer]: ReducersListEntry) => {
      return store.reducerManager.add(name, reducer)
    })
    // store.reducerManager.add(reducers, reducer)
    dispatch({ type: `@INIT ${name} reducer` })

    return () => {
      if (removeAfterUnmount) {
        // store.reducerManager.remove(name), dispatch({ type: `@DESTROY ${name} reducer` })
      }
    }
  }, [])

  return children
}
