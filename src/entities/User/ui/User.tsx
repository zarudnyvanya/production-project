import { classNames } from 'shared/lib/classNames/classNames'
import styles from './User.module.scss'

interface UserProps {
  className?: string
}

export const User = (props: UserProps) => {
  const { className } = props
  return <div className={classNames(styles.user, {}, [className])}>User</div>
}
