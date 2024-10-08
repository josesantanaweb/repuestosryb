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
      <div className="relative z-10 flex flex-col items-center justify-center py-10 lg:py-0 lg:-mt-[100px] 2xl:mt-0">
        <img src="/images/logo.svg" alt="logo" className="w-[12rem] lg:w-[26rem] mb-5 lg:mb-10 2xl:mb-20" />
        <h1 className="text-[1.5rem] lg:text-[2.5rem] text-secondary uppercase text-center font-bold font-kanit italic mb-5">
          ¡Somos tu mayorista de confianza!
        </h1>
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
