import Button from '@/components/Common/Button'

const DATA = [
  {
    image: 'apps-tank.png',
    title: 'Almacenamiento de agua Potable',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation',
  },
  {
    image: 'apps-tank.png',
    title: 'Almacenamiento de agua Potable',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation',
  },
  {
    image: 'apps-tank.png',
    title: 'Almacenamiento de agua Potable',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation',
  },
  {
    image: 'apps-tank.png',
    title: 'Almacenamiento de agua Potable',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation',
  },
]

const Apps = () => {
  return (
    <div className="flex justify-center py-20 bg-slate-200">
      <div className="container">
        <h4 className="mb-20 text-5xl font-medium text-gray-800">APLICACIONES</h4>
        <div className="grid items-center grid-cols-2 gap-12 apps-separator">
          {DATA.map((item, index) => (
            <div className="flex items-start gap-8" key={index}>
              <img src={`/images/${item.image}`} alt="Agua Potable" className="object-cover w-[330px] h-[230px]" />
              <div className="flex flex-col">
                <h4 className="mb-5 text-lg font-semibold">{item.title}</h4>
                <p className="mb-10 text-sm">{item.description}</p>
                <div className="flex items-center gap-5">
                  <Button>Cotizar</Button>
                  <a href="#" className="text-gray-800 underline cursor-pointer">
                    Ver mas
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Apps
