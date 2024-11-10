import { FunctionComponent, SVGAttributes } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticleIcon from 'shared/assets/icons/article.svg'

export interface SidebarItemType {
  path: string
  text: string
  Icon: FunctionComponent<SVGAttributes<SVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
    Icon: MainIcon,
  },
  {
    path: RoutePath.about,
    text: 'О нас',
    Icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    text: 'Статьи',
    Icon: ArticleIcon,
    authOnly: true,
  },
]
