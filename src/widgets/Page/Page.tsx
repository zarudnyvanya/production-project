import { classNames } from 'shared/lib/classNames/classNames'
import { MutableRefObject, ReactNode, UIEvent, useRef } from 'react'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from 'features/UI/model/slices/uiSlice'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { getUIScrollByPath } from 'features/UI'
import { StateSchema } from 'app/providers/StoreProvider'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'
import styles from './Page.module.scss'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

const PAGE_ID = 'page-id'

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props

  const wrapperRef = useRef() as MutableRefObject<HTMLElement>
  const triggerRef = useRef() as MutableRefObject<HTMLElement>

  const { pathname } = useLocation()

  const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname))

  const dispatch = useDispatch()

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  }, [])

  const onScroll = useThrottle((e: UIEvent<HTMLElement>) => {
    const position = e.currentTarget.scrollTop
    dispatch(
      uiActions.setScrollPosition({
        path: pathname,
        position,
      }),
    )
  }, 500)

  return (
    <section
      id={PAGE_ID}
      onScroll={onScroll}
      ref={wrapperRef}
      className={classNames(styles.Page, {}, [className])}
    >
      {children}
      {onScrollEnd ? <section className={styles.trigger} ref={triggerRef}></section> : null}
    </section>
  )
}
