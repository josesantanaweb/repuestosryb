import { AboutPage, HomePage, WorkPage } from '@/pages'

export const ROUTES = [
  {
    path: '/',
    name: 'Inicio',
    element: <HomePage />,
  },
  {
    name: 'Quiénes somos',
    path: '/quienes-somos',
    element: <AboutPage />,
  },
  {
    name: 'Catálogo',
    path: '/catalogo',
    scrollTo: 'catalogo',
  },
  {
    name: 'Trabaja con nosotros',
    path: '/proyectos',
    element: <WorkPage />,
  },
  {
    name: 'Contacto',
    path: '/contacto',
    scrollTo: 'contacto',
  },
]
