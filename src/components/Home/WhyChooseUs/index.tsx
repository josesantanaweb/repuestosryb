import { WHY_CHOOSE_US } from '@/data/why'

interface ChooseProps {
  choose: {
    id: number
    title: string
    description: string
    image: string
  }
}

const Choose = ({ choose }: ChooseProps) => {
  return (
    <div key={choose.id} className="flex flex-col items-center">
      <img src={`images/why/${choose.image}`} alt={choose.title} className="w-20 h-20 mb-6" />
      <h4 className="text-white text-[1.5rem] font-bold mb-2">{choose.title}</h4>
      <p className="text-base text-center text-white">{choose.description}</p>
    </div>
  )
}

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="flex flex-col items-center justify-center h-full max-w-[70rem] mx-auto">
        <p className="mb-2 text-white text-[1.75rem] text-center font-light">Equipo Profesional</p>
        <h3 className="text-white uppercase text-[2.875rem] text-center font-bold mb-10">¿POR QUÉ ELEGIRNOS?</h3>
        <div className="flex items-center justify-between w-full">
          {WHY_CHOOSE_US.map((item) => (
            <Choose key={item.id} choose={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
