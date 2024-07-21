import { classNames } from 'shared/lib/classNames/classNames'

import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { useTheme } from './providers/ThemeProvider'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import './styles/index.scss'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
