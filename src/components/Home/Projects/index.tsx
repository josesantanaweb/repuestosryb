const DATA = [
  {
    date: 'Bogotá 30/04/24',
    imagen: 'project-01.png',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
  },
  {
    date: 'Bogotá 30/04/24',
    imagen: 'project-02.png',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
  },
  {
    date: 'Bogotá 30/04/24',
    imagen: 'project-03.png',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
  },
  {
    date: 'Bogotá 30/04/24',
    imagen: 'project-04.png',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
  },
]

const Projects = () => {
  return (
    <div className="flex justify-center py-20">
      <div className="container">
        <h4 className="mb-20 text-5xl font-medium text-gray-800">PROYECTOS</h4>
        <div className="grid items-center grid-cols-4 gap-8">
          {DATA.map((item, index) => (
            <div className="flex flex-col" key={index}>
              <img src={`/images/${item.imagen}`} alt="" className="mb-3" />
              <h4 className="mb-3 text-sm font-semibold text-gray-800">{item.date}</h4>
              <p className="mb-3 text-lg text-gray-800">{item.description}</p>
              <a href="#" className="text-base font-semibold text-gray-800">
                Ver
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
