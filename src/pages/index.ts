import HomePage from '@/pages/home'
import React from 'react'

export { HomePage }

export const AppsPage = React.lazy(() => import('@/pages/apps'))
export const ProjectsPage = React.lazy(() => import('@/pages/proyects'))
