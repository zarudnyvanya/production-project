import { classNames } from 'shared/lib/classNames/classNames'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { Comment } from 'entities/Comment/model/types/comment'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import styles from './CommentCard.module.scss'

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard = (props: CommentCardProps) => {
  const { className, comment, isLoading } = props

  if (isLoading) {
    return (
      <div className={classNames(styles.CommentCard, {}, [className, styles.loading])}>
        <div className={styles.header}>
          <Skeleton width={30} height={30} borderRadius={'50%'} />
          <Skeleton height={20} />
        </div>
        <Skeleton />
      </div>
    )
  }

  return (
    <div className={classNames(styles.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment?.user.id}`} className={styles.header}>
        <Avatar src={comment?.user.avatar} customSize={30} />
        <Text title={comment?.user.username} />
      </AppLink>
      <Text text={comment?.text} />
    </div>
  )
}
