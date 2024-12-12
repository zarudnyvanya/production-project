import { classNames } from 'shared/lib/classNames/classNames'

interface ArticleCreatePageProps {
  className?: string
}

const ArticleCreatePage = (props: ArticleCreatePageProps) => {
  const { className } = props
  return (
    <div className={classNames('styles.ArticleCreatePage', {}, [className])}>ArticleCreatePage</div>
  )
}

export default ArticleCreatePage
