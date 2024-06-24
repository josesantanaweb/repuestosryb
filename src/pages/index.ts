import HomePage from '@/pages/home'
import React from 'react'

export { HomePage }

export const AboutPage = React.lazy(() => import('@/pages/about'))
export const WorkPage = React.lazy(() => import('@/pages/work'))
