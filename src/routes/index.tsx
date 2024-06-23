import { AppsPage, HomePage, ProjectsPage } from '@/pages'

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/aplicaciones',
    element: <AppsPage />,
  },
  {
    path: '/proyectos',
    element: <ProjectsPage />,
  },
]
