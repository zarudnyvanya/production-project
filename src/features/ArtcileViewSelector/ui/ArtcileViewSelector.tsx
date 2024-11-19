import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import TiledIcon from 'shared/assets/icons/tiled.svg'
import ListIcon from 'shared/assets/icons/list.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { ArticleView } from 'entities/Article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice'
import styles from './ArtcileViewSelector.module.scss'

interface ArtcileViewSelectorProps {
  className?: string
  view?: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
]

export const ArtcileViewSelector = (props: ArtcileViewSelectorProps) => {
  const { className, view, onViewClick } = props

  const dispatch = useAppDispatch()

  const onChangeView = (view: ArticleView) => {
    return () => {
      onViewClick?.(view)
      dispatch(articlesPageActions.setView(view))
    }
  }

  return (
    <div className={classNames(styles.ArtcileViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button key={viewType.view} onClick={onChangeView(viewType.view)} theme={ThemeButton.CLEAR}>
          <Icon
            className={classNames(
              styles.icon,
              { [styles['selected']]: view === viewType.view },
              [],
            )}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  )
}
