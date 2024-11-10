import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
// import styles from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props
  const { t } = useTranslation('article')
  // return <div className={classNames(styles.ArticlesPage, {}, [className])}>ArticlesPage</div>
  return <div></div>
}

export default memo(ArticlesPage)
