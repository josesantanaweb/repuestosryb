import { HomePage } from '@/pages'

export const ROUTES = [
  {
    path: '/',
    name: 'Inicio',
    element: <HomePage />,
  },
  {
    name: 'Quiénes somos',
    path: '/quienes-somos',
  },
  {
    name: 'Catálogo',
    path: '/catalogo',
  },
  {
    name: 'Trabaja con nosotros',
    path: '/proyectos',
  },
  {
    name: 'Contacto',
    path: '/contacto',
  },
]
