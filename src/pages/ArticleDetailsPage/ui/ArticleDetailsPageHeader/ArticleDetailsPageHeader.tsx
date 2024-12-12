import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useCallback } from 'react'
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article'
import { useSelector } from 'react-redux'
import styles from './ArticleDetailsPageHeader.module.scss'
import { articleDetailsData } from 'entities/Article/model/selectors/articleDetails'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
  const { className } = props
  const { t } = useTranslation()
  const article = useSelector(articleDetailsData)
  const canEdit = useSelector(getCanEditArticle)

  const navigate = useNavigate()

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.articles}/${article?.id}/edit`)
  }, [navigate, article?.id])

  return (
    <div className={classNames(styles.ArticleDetailsPageHeader, {}, [className])}>
      <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
        {t('Назад к списку')}
      </Button>
      {canEdit && (
        <Button onClick={onEditArticle} theme={ThemeButton.OUTLINE} className={styles.editBtn}>
          {t('Редактировать')}
        </Button>
      )}
    </div>
  )
}
