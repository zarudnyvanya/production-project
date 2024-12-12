import { classNames } from 'shared/lib/classNames/classNames'
import { ArtcileBlockType, Article, ArticleView } from './../../model/types/article'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import EyeIcon from 'shared/assets/icons/eye.svg'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import { HTMLAttributeAnchorTarget, useCallback } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import styles from './ArticleListItem.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'

interface ArticleListItemProps {
  className?: string
  article: Article
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = (props: ArticleListItemProps) => {
  const { className, article, view = ArticleView.SMALL, target } = props
  const { t } = useTranslation()

  const types = <Text text={article.type.join(', ')} className={styles.types} />
  const views = (
    <div className={styles.views}>
      <Text text={String(article.views)} className={styles.views} />
      <Icon Svg={EyeIcon} />
    </div>
  )

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find((block) => block.type === ArtcileBlockType.TEXT)

    return (
      <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
        <Card>
          <div className={styles.header}>
            <Avatar customSize={30} src={article.user.avatar} className={styles.avatar} />
            <Text text={article.user.username} className={styles.username} />
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <Text title={article.title} className={styles.title} />
          {types}
          <div className={styles.imageWrapper}>
            <img src={article.img} alt={article.img} className={styles.img} />
          </div>
          {textBlock && <ArticleTextBlock block={textBlock} className={styles.textBlock} />}
          <div className={styles.footer}>
            <AppLink target={target} to={`${RoutePath.article_details}/${article.id}`}>
              <Button>{t('Читать далее')}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <AppLink target={target} to={`${RoutePath.article_details}/${article.id}`}>
      <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
        <Card>
          <div className={styles.imageWrapper}>
            <img className={styles.img} src={article.img} alt={article.img} />
            <Text className={styles.date} text={article.createdAt} />
          </div>
          <div className={styles.footer}>
            {types}
            {views}
          </div>
          <Text text={article.title} className={styles.title} />
        </Card>
      </div>
    </AppLink>
  )
}
