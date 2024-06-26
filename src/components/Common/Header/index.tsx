import { ROUTES } from '@/routes'
import { BiLogoInstagram, BiLogoWhatsapp, BiMenu, BiPhone } from 'react-icons/bi'

import { NavLink as RouterNavLink, useNavigate } from 'react-router-dom'

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

  const handleScroll = (sectionId: string) => (event: any) => {
    if (!sectionId) return
    event.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="relative bg-white border-b border-gray-200">
      <div className="flex justify-center">
        <div className="container flex flex-col items-center justify-between lg:flex-row">
          <div className="flex items-center justify-between w-full gap-10 px-5 py-5 lg:gap-20 lg:w-auto lg:px-0">
            <img src="/images/logo.svg" className="w-[60px] lg:w-[120px]" />
            <span className="block cursor-pointer text-primary lg:hidden">
              <BiMenu size={24} />
            </span>
            <nav className="flex-col items-center hidden w-full lg:flex lg:flex-row lg:w-auto">
              {ROUTES.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={(event) => (item.scrollTo ? handleScroll(item.scrollTo)(event) : navigate(item.path))}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
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
