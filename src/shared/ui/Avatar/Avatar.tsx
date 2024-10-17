import { classNames } from 'shared/lib/classNames/classNames'
import { CSSProperties, SyntheticEvent, useMemo } from 'react'
import avatar from './../../assets/avatar.jpg'
import styles from './Avatar.module.scss'

export enum AvatarSize {
  S = 'sizeS',
  M = 'sizeM',
  L = 'sizeL',
}

interface AvatarProps {
  className?: string
  src?: string
  size?: AvatarSize
  customSize?: number
  alt?: string
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, size = AvatarSize.S, customSize, alt } = props

  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = avatar
  }

  const inlineStyles: CSSProperties = useMemo(() => {
    return {
      width: customSize,
      height: customSize,
    }
  }, [customSize])

  return (
    <img
      style={inlineStyles}
      src={src}
      alt={alt}
      onError={handleError}
      className={classNames(styles.Avatar, {}, [className, styles[size]])}
    />
  )
}
