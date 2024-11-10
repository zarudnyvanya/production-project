import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Icon.module.scss'

interface IconProps {
  className?: string
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const Icon = (props: IconProps) => {
  const { className, Svg } = props
  return <Svg className={classNames(styles.Icon, {}, [className])} />
}
