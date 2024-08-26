import { Counter } from 'entities/Counter'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t } = useTranslation('about')

  return (
    <div>
      {t('О нас')}
      <Counter />
    </div>
  )
}

export default AboutPage
