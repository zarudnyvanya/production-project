import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AddCommentForm.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getCommentFormText } from 'features/AddCommentForm/model/selectors/addCommentFormSelectors'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  addCommentFormActions,
  addCommentFormReducer,
} from 'features/AddCommentForm/model/slices/addCommentFormSlice'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'

interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm = (props: AddCommentFormProps) => {
  const { className, onSendComment } = props
  const { t } = useTranslation()

  const text = useSelector(getCommentFormText)

  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value))
    },
    [dispatch],
  )

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(styles.AddCommentForm, {}, [className])}>
        <Input
          value={text}
          onChange={onCommentTextChange}
          placeholder={t('Введите текс комментария')}
          className={styles.input}
        />
        <Button onClick={onSendHandler} theme={ThemeButton.OUTLINE}>
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
}

export default AddCommentForm
