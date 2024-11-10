import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import styles from './ArticleCodeBlock.module.scss'
import { ArticleCodeBlockType } from './../../model/types/article'
import { Code } from 'shared/ui/Code/Code'

interface ArticleCodeBlockProps {
  className?: string
  block: ArticleCodeBlockType
}

export const ArticleCodeBlock = memo((props: ArticleCodeBlockProps) => {
  const { className, block } = props
  return (
    <div className={classNames(styles.ArticleCodeBlock, {}, [className])}>
      <Code text={block.code} />
    </div>
  )
})
