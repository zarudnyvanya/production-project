import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { CommentList } from 'entities/Comment'
import { Text } from 'shared/ui/Text/Text'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { AddCommentForm } from 'features/AddCommentForm'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Page } from 'widgets/Page/Page'
import { getArticleCommentsSelector } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentSlice'
import { getArticleRecommendations } from 'pages/ArticleDetailsPage/model/slices/articleDetailsRecommendationSlice'
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments'
import { getArticlesPageRecommendationsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/recommendations'
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { fetchArticleRecommendations } from 'pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentFormArticle/addCommentFormArticle'
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices'
import styles from './ArticleDetailsPage.module.scss'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props
  const { t } = useTranslation('article')
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleCommentsSelector.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const recommendationsIsLoading = useSelector(getArticlesPageRecommendationsIsLoading)

  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
    dispatch(fetchArticleRecommendations())
  }, [])

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch],
  )

  if (!id) {
    return (
      <Page className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} className={styles.articleDetails} />
        <Text className={styles.recommendationsTitle} title={t('Рекомендации')} />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          target={'_blank'}
          className={styles.recommendations}
        />
        <Text className={styles.commentTitle} title={t('Комментарии')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
