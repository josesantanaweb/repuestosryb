import Button from '@/components/Common/Button'
import { IoIosPlay } from 'react-icons/io'

const MainBanner = () => {
  return (
    <div className="flex justify-center mb-10">
      <div className="flex items-center justify-between h-[600px] pl-20 gap-10">
        <div className="flex flex-col items-start justify-center w-1/2 h-full">
          <h4 className="mb-3 text-5xl font-medium text-gray-800">EL AGUA ES VIDA Y NOSOTROS LA RESGUARDAMOS</h4>
          <p className="mb-10 text-2xl text-gray-800">
            Liderazgo tecnológico en el diseño e instalación de tanques para almacenamiento de agua y otros líquidos.
          </p>
          <Button>
            Ver Video
            <IoIosPlay size={18} />
          </Button>
        </div>
        <div className="relative flex items-center w-1/2 h-full">
          <img src="/images/banner-main.png" className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default MainBanner
