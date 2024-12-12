import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { CommentList } from 'entities/Comment'
import { Text } from 'shared/ui/Text/Text'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { getArticleCommentsSelector } from '../model/slices/articleDetailsCommentSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../model/services/addCommentFormArticle/addCommentFormArticle'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Page } from 'widgets/Page/Page'
import { getArticleRecommendations } from '../model/slices/articleDetailsRecommendationSlice'
import { getArticlesPageRecommendationsIsLoading } from '../model/selectors/recommendations'
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import styles from './ArticleDetailsPage.module.scss'
import { articleDetailsPageReducer } from '../model/slices'

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
  const navigate = useNavigate()

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

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

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
        <Button onClick={onBackToList} theme={ThemeButton.OUTLINE}>
          {t('Назад к списку')}
        </Button>
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
