import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { ArticleCodeBlockType } from './../../model/types/article'
import { Code } from 'shared/ui/Code/Code'
// import styles from './ArticleCodeBlock.module.scss'

interface ArticleCodeBlockProps {
  className?: string
  block: ArticleCodeBlockType
}

export const ArticleCodeBlock = memo((props: ArticleCodeBlockProps) => {
  const { className, block } = props
  return (
    // <div className={classNames(styles.ArticleCodeBlock, {}, [className])}>
    <Code text={block.code} />
    // </div>
  )
})
