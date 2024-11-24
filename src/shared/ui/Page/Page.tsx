import { classNames } from 'shared/lib/classNames/classNames'
import { MutableRefObject, ReactNode, useRef } from 'react'
import styles from './Page.module.scss'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props

  const wrapperRef = useRef() as MutableRefObject<HTMLElement>
  const triggerRef = useRef() as MutableRefObject<HTMLElement>

  const ref = useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  })

  return (
    <section ref={wrapperRef} className={classNames(styles.Page, {}, [className])}>
      {children}
      <section ref={triggerRef}></section>
    </section>
  )
}
