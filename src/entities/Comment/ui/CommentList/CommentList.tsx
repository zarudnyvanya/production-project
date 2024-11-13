import { classNames } from 'shared/lib/classNames/classNames'
import { Comment } from 'entities/Comment/model/types/comment'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'
import styles from './CommentList.module.scss'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = (props: CommentListProps) => {
  const { className, comments, isLoading } = props
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className={classNames(styles.CommentList, {}, [className])}>
        <CommentCard className={styles.comment} isLoading={isLoading} />
        <CommentCard className={styles.comment} isLoading={isLoading} />
        <CommentCard className={styles.comment} isLoading={isLoading} />
      </div>
    )
  }

  return (
    <div className={classNames(styles.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            className={styles.comment}
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text={t('Комментарии отсутствуют')} />
      )}
    </div>
  )
}
