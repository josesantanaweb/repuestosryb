import Button from '@/components/Common/Button'
import { ROUTES } from '@/routes'
import React, { useState } from 'react'
import { BiLogoInstagram, BiLogoWhatsapp, BiMenu, BiPhone } from 'react-icons/bi'

import { NavLink as RouterNavLink, useLocation, useNavigate } from 'react-router-dom'

interface NavLinkProps {
  to: string
  children: React.ReactNode
  onClick?: (event: any) => void
}

const NavLink = ({ to, children, onClick }: NavLinkProps) => {
  return (
    <RouterNavLink to={to} className={({ isActive }) => (isActive ? 'link link-active' : 'link')} onClick={onClick}>
      {children}
    </RouterNavLink>
  )
}

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname
  const [open, setOpen] = useState(false)

  const handleScroll = (sectionId: string) => (event: any) => {
    if (!sectionId) return
    event.preventDefault()
    setOpen(false)
    const section = document.getElementById(sectionId)
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNavigate = (path: string) => {
    setOpen(false)
    navigate(path)
  }

  const handleMenu = () => {
    setOpen(!open)
  }

  const removeCatalogo = currentPath !== '/' ? ROUTES.filter((item) => item.path !== '/catalogo') : ROUTES

  return (
    <header className="relative bg-white border-b border-gray-200">
      <div className="flex justify-center">
        <div className="container flex flex-col items-center justify-between lg:flex-row">
          <div className="relative flex items-center justify-between w-full gap-10 px-5 py-5 lg:py-0 lg:gap-20 lg:w-auto lg:px-0">
            <img src="/images/logo.svg" className="w-[60px] lg:w-[120px]" />
            <span className="block cursor-pointer text-primary lg:hidden" onClick={handleMenu}>
              <BiMenu size={24} />
            </span>
            <nav className="hidden absolute top-[70px] right-0 z-20 lg:flex flex-col items-center w-full bg-white lg:flex-row lg:w-auto lg:static">
              {removeCatalogo.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={(event) => (item.scrollTo ? handleScroll(item.scrollTo)(event) : handleNavigate(item.path))}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="flex w-[120px] ml-10">
                <a href="mailto:jetrix1993@gmail.com?subject=Enviar%20CV&body=Adjunto%20mi%20CV%20para%20su%20consideración.">
                  <Button>Enviar CV</Button>
                </a>
              </div>
            </nav>
            {open && (
              <nav className="absolute top-[70px] right-0 z-20 flex flex-col items-center w-full bg-white lg:flex-row lg:w-auto lg:static">
                {removeCatalogo.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    onClick={(event) =>
                      item.scrollTo ? handleScroll(item.scrollTo)(event) : handleNavigate(item.path)
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <div className="flex justify-center w-full py-5">
                  <a href="mailto:oficina@repuestosdybca.com?subject=Enviar%20CV&body=Adjunto%20mi%20CV%20para%20su%20consideración.">
                    <Button>Enviar CV</Button>
                  </a>
                </div>
              </nav>
            )}
          </div>
          <div className="items-center hidden gap-5 lg:flex">
            <span className="text-primary">
              <BiLogoInstagram size={24} />
            </span>
            <span className="text-primary">
              <BiLogoWhatsapp size={24} />
            </span>
            <span className="text-primary">
              <BiPhone size={24} />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
