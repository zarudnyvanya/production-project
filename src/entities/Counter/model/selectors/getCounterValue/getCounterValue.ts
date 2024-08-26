import { createSelector } from '@reduxjs/toolkit'
import { getCounter } from '../getCounter/getCounter'
import { CounterSchema } from '../../types/counterSchema'

// CreateSelector позволяет переиспользовать другие слекторы (lib: reselect)
export const getCounterValue = createSelector(getCounter, (counter: CounterSchema) => counter.value)
