import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { ArticleTextBlockType } from './../../model/types/article'
import { Text } from 'shared/ui/Text/Text'
import styles from './ArticleTextBlock.module.scss'

interface ArticleTextBlockProps {
  className?: string
  block: ArticleTextBlockType
}

export const ArticleTextBlock = memo((props: ArticleTextBlockProps) => {
  const { className, block } = props
  return (
    <div className={classNames(styles.ArticleTextBlock, {}, [className])}>
      {block.title && <Text className={styles.title} title={block.title} />}
      {block.paragraphs.map((paragraph) => (
        <Text className={styles.paragraph} key={paragraph} text={paragraph} />
      ))}
    </div>
  )
})
