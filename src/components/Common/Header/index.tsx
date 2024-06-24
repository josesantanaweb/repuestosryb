import { LINKS } from '@/data/menu'
import { BiLogoInstagram, BiLogoWhatsapp, BiPhone } from 'react-icons/bi'

import { NavLink as RouterNavLink } from 'react-router-dom'

interface NavLinkProps {
  to: string
  children: React.ReactNode
}

const NavLink = ({ to, children }: NavLinkProps) => {
  return (
    <RouterNavLink to={to} className={({ isActive }) => (isActive ? 'link link-active' : 'link')}>
      {children}
    </RouterNavLink>
  )
}

const Header = () => {
  return (
    <header className="relative border-b border-gray-200">
      <div className="flex justify-center">
        <div className="container flex items-center justify-between mx-auto">
          <div className="flex items-center gap-20">
            <img src="/images/logo.svg" className="w-[120px]" />
            <nav className="flex gap-4">
              {LINKS.map((item, index) => (
                <NavLink key={index} to={item.url}>
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
