import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { CommentList } from 'entities/Comment'
import { Text } from 'shared/ui/Text/Text'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'
import {
  articleDetailsCommentReducer,
  getArticleCommentsSelector,
} from '../model/slices/articleDetailsCommentSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../model/services/addCommentFormArticle/addCommentFormArticle'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import styles from './ArticleDetailsPage.module.scss'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Page } from 'shared/ui/Page/Page'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentReducer,
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props
  const { t } = useTranslation('article')
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleCommentsSelector.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  }, [])

  const onSendComment = useCallback(
    (text: string) => {
      console.log('text', text)

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
        <ArticleDetails id={id} />
        <Text className={styles.commentTitle} title={t('Комментарии')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
