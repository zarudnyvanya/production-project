import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { memo, useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArtcileById } from 'entities/Article/model/services/fetchArtcileById/fetchArtcileById'
import { useSelector } from 'react-redux'
import {
  articleDetailsData,
  articleDetailsError,
  articleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eye.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { ArtcileBlockType, ArticleBlock } from './../../model/types/article'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'
import styles from './ArticleDetails.module.scss'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { id, className } = props
  const { t } = useTranslation('article')
  const article = useSelector(articleDetailsData)
  const isLoading = useSelector(articleDetailsIsLoading)
  const error = useSelector(articleDetailsError)

  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    dispatch(fetchArtcileById(id))
  }, [dispatch, id])

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArtcileBlockType.CODE:
        return <ArticleCodeBlock key={block.id} block={block} />
      case ArtcileBlockType.TEXT:
        return <ArticleTextBlock key={block.id} block={block} />
      case ArtcileBlockType.IMAGE:
        return <ArticleImageBlock key={block.id} block={block} />
      default:
        return null
    }
  }, [])

  let content

  if (isLoading) {
    content = (
      <>
        <Skeleton className={styles.avatar} width={200} height={200} borderRadius={'50%'} />
        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.skeleton} width={600} height={24} />
        <Skeleton className={styles.skeleton} height={200} />
        <Skeleton className={styles.skeleton} height={200} />
      </>
    )
  } else if (error) {
    content = <Text title={t('Произошла ошибка при загрузке статьи')} align={TextAlign.CENTER} />
  } else {
    content = (
      <>
        <Avatar className={styles.avatar} customSize={200} src={article?.img} />
        <Text
          className={styles.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={styles.articleInfo}>
          <Icon Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={styles.articleInfo}>
          <Icon Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(styles.ArticleDetails, {}, [className])}>{content}</div>
    </DynamicModuleLoader>
  )
})
