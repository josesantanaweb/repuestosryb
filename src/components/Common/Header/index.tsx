import { ROUTES } from '@/routes'
import { BiLogoInstagram, BiLogoWhatsapp, BiPhone } from 'react-icons/bi'

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
    <header className="relative border-b border-gray-200">
      <div className="flex justify-center">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-20">
            <img src="/images/logo.svg" className="w-[120px]" />
            <nav className="flex items-center">
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
          <div className="flex items-center gap-5">
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
