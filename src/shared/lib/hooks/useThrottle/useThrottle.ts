/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from 'react'

export const useThrottle = (cb: (...args: any[]) => void, delay: number) => {
  const throttleRef = useRef(false)

  return useCallback(
    (...args: any[]) => {
      if (!throttleRef.current) {
        cb(...args)
        throttleRef.current = true
      }

      setTimeout(() => {
        throttleRef.current = false
      }, delay)
    },
    [cb, delay],
  )
}
