const DATA = [
  {
    title: 'Tecnología australiana',
    deescription:
      'Material impermeabilizante independiente de la estructura metalica de soporte, lo que evita el contacto directo del agua con la estructura.',
  },
  {
    title: 'Norma AWWA D-103-09',
    deescription:
      'Los tanques son fabricados de acuerdo a esta norma “Factory Coated Bolted Steel Tanks for Water Storage”.',
  },
  {
    title: 'Paneles RV8',
    deescription:
      'Páneles de acero galvanizado y corrugados recubiertos con ProteCoat y unidos con pernos de alta resistencia,. ',
  },
  {
    title: 'Estructura resistente y funcional para el almacenamiento de agua potable',
    deescription: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..',
  },
]

const Storage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white">
      <div className="container mb-10">
        <h4 className="mb-2 text-5xl font-medium text-gray-800">ALMACENAMIENTO DE AGUA POTABLE</h4>
        <p className="mb-10 text-2xl text-gray-800">
          Tanques modulares pernados con recubrimiento para almacenamiento de agua potable.
        </p>
        <img src="/images/app-tank-2.png" alt="tank" className="w-full h-[800px]" />
      </div>
      <div className="container">
        <div className="grid grid-cols-4 gap-3">
          {DATA.map((item, index) => (
            <div className="flex flex-col" key={index}>
              <h4 className="mb-3 text-2xl font-medium text-gray-800">{item.title}</h4>
              <p className="text-base text-gray-800">{item.deescription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Storage
