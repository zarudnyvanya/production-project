import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import styles from './NotFoundPage.module.scss'
import { Page } from 'widgets/Page/Page'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()

  return (
    <Page className={classNames(styles.notFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </Page>
  )
}
