import { PARTNERS } from '@/data/partners'

interface PartnerProps {
  logo: string
}

const Partner = ({ logo }: PartnerProps) => {
  return <img src={`images/partners/${logo}`} alt="partner" className="w-20 h-20" />
}

const Footer = () => {
  return (
    <footer className="relative w-full">
      <div className="max-w-[70rem] flex flex-col mx-auto">
        <div className="flex items-center justify-between bg-white">
          {PARTNERS.map((partner, index) => (
            <Partner key={index} logo={partner.logo} />
          ))}
        </div>
      </div>
      <div className="w-full h-full bg-primary">
        <div className="container grid items-center grid-cols-3 py-10">
          <div className="flex flex-col">
            <img src="/images/logo-white.svg" alt="logo" className="w-24 mb-5" />
            <ul className="p-0">
              <li className="mb-6 text-base text-white">
                <span className="font-semibold">Dirección:</span> Parque Industrial Aserradero, Av. Paseo Cabriales, C.
                Flores, Valencia 2001, Carabobo
              </li>
              <li className="mb-6 text-base text-white">
                <span className="font-semibold">Teléfono:</span> +58 4144016071
              </li>
              <li className="text-base text-white">
                <span className="font-semibold">Email:</span> distribuidoradyb@gmail.com
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <ul className="p-0">
              <li className="mb-6 text-base font-semibold text-white">Productos</li>
              <li className="mb-6 text-base text-white">Frenos</li>
              <li className="mb-6 text-base text-white">Bujias</li>
              <li className="mb-6 text-base text-white">Bombas</li>
              <li className="text-base text-white">Filtros</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <ul className="p-0">
              <li className="mb-6 text-base font-semibold text-white">Nuestras Políticas</li>
              <li className="mb-6 text-base text-white">Ciudades disponibles</li>
              <li className="mb-6 text-base text-white">Políticas de cancelación</li>
              <li className="mb-6 text-base text-white">Garantía y servicios</li>
            </ul>
          </div>
        </div>
        <div className="container flex items-center justify-between py-5 border-t border-white border-opacity-10">
          <div className="flex items-center w-1/3 gap-5">
            <h6 className="italic font-bold text-white text-kanit">REPUESTOS D&B</h6>
            <p className="text-white">Todos los Derechos Reservados.</p>
          </div>
          <span className="w-1/3"></span>
          <p className="w-1/3 text-center text-white">Copyright © 2024.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
