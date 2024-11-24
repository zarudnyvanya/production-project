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
    const triggerElement = triggerRef.current
    const wrapperElement = wrapperRef.current

    if (!callback) {
      return
    }

    const options = {
      root: wrapperElement,
      threshold: 0.2,
      rootMargin: '0px',
    }

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback?.()
      }
    }, options)

    observer.current.observe(triggerElement)

    return () => {
      if (observer.current && triggerElement) {
        observer.current?.unobserve(triggerElement)
      }
    }
  }, [wrapperRef, triggerRef, callback])
}
