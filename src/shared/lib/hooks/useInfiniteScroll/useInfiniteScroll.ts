import { MutableRefObject, useEffect, useRef } from 'react'

interface UseInfiniteScrollProps {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = (props: UseInfiniteScrollProps) => {
  const { wrapperRef, triggerRef, callback } = props

  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!callback) {
      return
    }

    const options = {
      root: wrapperRef.current,
      threshold: 0.2,
      rootMargin: '0px',
    }

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback?.()
      }
    }, options)

    observer.current.observe(triggerRef.current)

    return () => {
      if (observer.current) {
        observer.current?.unobserve(triggerRef.current)
      }
    }
  }, [wrapperRef, triggerRef, callback])

  return {}
}
