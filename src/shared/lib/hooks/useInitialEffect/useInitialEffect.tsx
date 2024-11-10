import { useEffect } from 'react'

export const useInitialEffect = (cb: () => void, deps: unknown[]) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      cb()
    }
  }, deps)
}
