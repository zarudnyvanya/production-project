import {} from 'entities/User'
import { memo, Suspense, useCallback } from 'react'
import {} from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'
import { RequireAuth } from './RequireAuth'

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = route.element
    return (
      <Route
        key={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
        path={route.path}
      />
    )
  }, [])

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  )
})
