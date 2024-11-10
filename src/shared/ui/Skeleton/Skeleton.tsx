import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Skeleton.module.scss'
import { CSSProperties } from 'react'

interface SkeletonProps {
  className?: string
  width?: string | number
  height?: string | number
  borderRadius?: string | number
}

export const Skeleton = (props: SkeletonProps) => {
  const { width, height, borderRadius, className } = props

  const stylesCss: CSSProperties = {
    width,
    height,
    borderRadius,
  }

  return <div style={stylesCss} className={classNames(styles.Skeleton, {}, [className])}></div>
}
