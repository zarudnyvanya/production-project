import { Counter } from 'entities/Counter'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'

const MainPage = () => {
  const { t } = useTranslation()

  return (
    <Page>
      {t('Главная страница')}
      <Counter />
    </Page>
  )
}

export default MainPage
