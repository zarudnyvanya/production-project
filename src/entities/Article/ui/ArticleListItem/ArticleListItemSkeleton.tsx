import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Card } from 'shared/ui/Card/Card'
import { ArticleView } from './../../model/types/article'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleListItem.module.scss'

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
  const { className, view } = props

  const types = <Skeleton width={120} height={20} className={styles.types} />
  const views = (
    <div className={styles.views}>
      <Skeleton width={40} height={20} />
    </div>
  )

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
        <Card>
          <div className={styles.header}>
            <Skeleton width={30} height={30} borderRadius={'50%'} className={styles.avatar} />
            <Skeleton width={100} height={15} className={styles.username} />
            <Skeleton width={60} height={15} className={styles.date} />
          </div>
          <Skeleton width={150} height={30} className={styles.title} />
          {types}
          <div className={styles.imageWrapper}>
            <Skeleton className={styles.img} />
          </div>
          <Skeleton className={styles.textBlock} />
          <div className={styles.footer}>
            <Skeleton />
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
      <Card>
        <div className={styles.imageWrapper}>
          <Skeleton className={styles.img} />
          <Skeleton className={styles.date} />
        </div>
        <div className={styles.footer}>
          {types}
          {views}
        </div>
        <Skeleton className={styles.title} />
      </Card>
    </div>
  )
}
