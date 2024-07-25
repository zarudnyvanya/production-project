import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'

interface BugButtonProps {
  className?: string
}

export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false)

  const { t } = useTranslation()

  const onError = () => {
    setError((prev) => !prev)
  }

  useEffect(() => {
    if (error) throw new Error()
  }, [error])

  return (
    <Button onClick={onError} className={classNames('', {}, [className])}>
      {t('Вызвать ошибку')}
    </Button>
  )
}
