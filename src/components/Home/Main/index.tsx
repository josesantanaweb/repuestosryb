import { CATEGORIES } from '@/data/categories'

interface CategoryProps {
  category: {
    id: number
    name: string
    image: string
  }
}

const Category = ({ category }: CategoryProps) => {
  return (
    <div
      key={category.id}
      className="flex flex-col items-center justify-center gap-4 px-12 border-r border-white border-opacity-20 last:border-none"
    >
      <img src={`/images/categories/${category.image}`} alt="category" className="w-[4rem] h-[4rem]" />
      <p className="text-lg text-white uppercase">{category.name}</p>
    </div>
  )
}

const Main = () => {
  return (
    <main className="main">
      <div className="banner"></div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <img src="/images/logo.svg" alt="logo" className="w-[27rem] mb-20" />
        <h1 className="text-[2.75rem] text-secondary text-center font-bold font-kanit italic mb-5 drop-shadow-[0_4px_4px_rgba(203,0,13,0.20)]">
          ¡Somos tu mayorista de confianza!
        </h1>
        <p className="text-[1.5rem]">Tenemos todos los repuestos que necesitas al mayor.</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[10rem] bg-primary border-t-[6px] border-secondary">
        <div className="container flex items-center justify-between h-full">
          {CATEGORIES.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Main
