const DATA = [
  {
    image: 'project-01.png',
    date: 'Bogotá 30/04/24',
    deescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ',
  },
  {
    image: 'project-02.png',
    date: 'Bogotá 30/04/24',
    deescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ',
  },
  {
    image: 'project-03.png',
    date: 'Bogotá 30/04/24',
    deescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ',
  },
  {
    image: 'project-04.png',
    date: 'Bogotá 30/04/24',
    deescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ',
  },
  {
    image: 'project-01.png',
    date: 'Bogotá 30/04/24',
    deescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ',
  },
  {
    image: 'project-02.png',
    date: 'Bogotá 30/04/24',
    deescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ',
  },
  {
    image: 'project-03.png',
    date: 'Bogotá 30/04/24',
    deescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ',
  },
  {
    image: 'project-04.png',
    date: 'Bogotá 30/04/24',
    deescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ',
  },
]

const ProjectsPage = () => {
  return (
    <main>
      <div className="flex justify-center py-20">
        <div className="container">
          <h4 className="mb-20 text-5xl font-medium text-gray-800">APLICACIONES</h4>
          <div className="grid items-center grid-cols-4 gap-12">
            {DATA.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <img src={`/images/${item.image}`} alt="app" className="w-full h-[200px] mb-3" />
                <h4 className="mb-3 text-base font-semibold">{item.date}</h4>
                <p className="mb-3 text-base text-gray-800">{item.deescription}</p>
                <div className="flex justify-start">
                  <a href="" className="text-base font-medium text-gray-800 underline">
                    Ver mas
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectsPage
