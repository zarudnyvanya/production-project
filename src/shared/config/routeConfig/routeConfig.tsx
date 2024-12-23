import { RouteProps } from 'react-router-dom'
import { AboutPageAsync } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePageAsync } from 'pages/ProfilePage'
import { MainPageAsync } from 'pages/MainPage'
import { ArticlesPageAsync } from 'pages/ArticlesPage'
import { ArticleDetailsPageAsync } from 'pages/ArticleDetailsPage'
import { ArticleEditPageAsync } from 'pages/ArticleEditPage'
import { ArticleCreatePageAsync } from 'pages/ArticleCreatePage'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  // last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // + :id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles', // + :id
  [AppRoutes.ARTICLE_CREATE]: '/articles/new',
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPageAsync />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPageAsync />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePageAsync />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPageAsync />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}/:id`,
    element: <ArticleDetailsPageAsync />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: `${RoutePath.article_create}`,
    element: <ArticleCreatePageAsync />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePath.article_edit}`,
    element: <ArticleEditPageAsync />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
}
