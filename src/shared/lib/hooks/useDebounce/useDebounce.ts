import { MutableRefObject, useCallback, useRef } from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const useDebounce = (cb: (...args: any) => any, delay: number) => {
  const timer = useRef() as MutableRefObject<any>

  return useCallback(
    (...args: any[]) => {
      clearTimeout(timer.current)

      timer.current = setTimeout(() => {
        cb(args)
      }, delay)
    },
    [cb, delay],
  )
}
