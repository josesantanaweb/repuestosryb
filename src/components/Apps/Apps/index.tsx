const DATA = [
  {
    image: 'apps-tank.png',
    title: 'Almacenamiento de agua Potable',
  },
  {
    image: 'apps-tank.png',
    title: 'Para redescontra incendio',
  },
  {
    image: 'apps-tank.png',
    title: 'Para usos industriales',
  },
  {
    image: 'apps-tank.png',
    title: 'Para otros usos',
  },
]

const Applications = () => {
  return (
    <div className="flex justify-center py-20 bg-slate-200">
      <div className="container">
        <h4 className="mb-20 text-5xl font-medium text-gray-800">APLICACIONES</h4>
        <div className="grid items-center grid-cols-4 gap-12">
          {DATA.map((item, index) => (
            <div className="flex flex-col pr-10 border-r border-gray-800 border-dashed" key={index}>
              <p className="mb-3 text-base text-gray-800">0{index + 1}</p>
              <img src={`/images/${item.image}`} alt="app" className="w-full h-[200px] mb-3" />
              <h4 className="mb-3 text-2xl font-medium">{item.title}</h4>
              <div className="flex justify-end">
                <a href="" className="text-base font-medium text-gray-800 underline">
                  Ver mas
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Applications
