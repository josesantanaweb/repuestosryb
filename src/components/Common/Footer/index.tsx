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
    </footer>
  )
}

export default Footer
