import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { ArticleImageBlockType } from './../../model/types/article'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import styles from './ArticleImageBlock.module.scss'

interface ArticleImageBlockProps {
  className?: string
  block: ArticleImageBlockType
}

export const ArticleImageBlock = memo((props: ArticleImageBlockProps) => {
  const { className, block } = props
  return (
    <div className={classNames(styles.ArticleImageBlock, {}, [className])}>
      <img className={styles.img} src={block.src} />
      {block.title && <Text title={block.title} />}
    </div>
  )
})
