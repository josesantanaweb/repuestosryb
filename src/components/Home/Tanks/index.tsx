import Button from '@/components/Common/Button'
const Tanks = () => {
  return (
    <div>
      <div className="flex justify-center py-40 bg-gray-800">
        <div className="container flex flex-col justify-start">
          <h4 className="mb-10 text-5xl font-medium text-white">TANQUES</h4>
          <div className="grid items-center grid-cols-3 gap-10">
            <ul>
              <li className="py-3 text-2xl text-white border-b border-dashed">Diseño & Ingeniería</li>
              <li className="py-3 text-2xl text-white border-b border-dashed">Armado</li>
              <li className="py-3 text-2xl text-white border-b border-dashed">Paneles</li>
              <li className="py-3 text-2xl text-white border-b border-dashed">Impermeabilización</li>
            </ul>
            <div className="relative flex flex-col items-center">
              <img src="/images/abstract-figure.svg" className="absolute w-24 -top-40" />
              <img src="/images/tank-render.png" alt="" />
              <h4 className="mb-5 text-2xl text-center text-white">
                Diseño, instalación y uso de materiales certificados
              </h4>
              <div className="flex justify-center">
                <Button>Saber más</Button>
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="text-2xl text-white">Certficación y eficiencia</h4>
              <p className="text-lg text-white">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tanks
