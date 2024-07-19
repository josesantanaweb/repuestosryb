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
      className="flex flex-col items-center h-[100px] lg:h-auto justify-center gap-4 px-3 lg:border-r border-white lg:px-12 border-opacity-20 last:border-none"
    >
      <img
        src={`/images/categories/${category.image}`}
        alt="category"
        className="w-[2rem] h-[2rem] lg:w-[4rem] lg:h-[4rem]"
      />
      <p className="text-xs text-white uppercase lg:text-base">{category.name}</p>
    </div>
  )
}

const Main = () => {
  return (
    <main className="main">
      <div className="banner"></div>
      <div className="relative z-10 flex flex-col items-center justify-center py-10 lg:py-0">
        <img src="/images/logo.svg" alt="logo" className="w-[12rem] lg:w-[26rem] mb-5 lg:mb-20" />
        <h1 className="text-[1.5rem] lg:text-[2.5rem] text-secondary uppercase text-center font-bold font-kanit italic mb-5 drop-shadow-[0_4px_4px_rgba(203,0,13,0.20)]">
          ¡Somos tu mayorista de confianza!
        </h1>
        <p className="text-[0.875rem] lg:text-[1.5rem]">Nuestra garantía respalda cada pieza que distribuimos.</p>
      </div>
      <div className="relative lg:absolute bottom-0 left-0 w-full lg:h-[10rem] bg-primary border-t-[6px] border-secondary">
        <div className="container grid items-center justify-between h-full grid-cols-3 lg:flex">
          {CATEGORIES.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Main
