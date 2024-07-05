import { BiChevronDown } from 'react-icons/bi'

const Main = () => {
  return (
    <main className="px-5 py-5 border-b-4 lg:py-0 main border-secondary lg:px-0">
      <div className="banner"></div>
      <div className="relative z-10 flex flex-col items-center justify-center max-w-[70rem] mx-auto]">
        <h1 className="text-[2rem] lg:text-[3rem] text-secondary text-center font-bold font-kanit opacity-15 leading-9 mb-6 lg:mb-0">
          ¿QUIERES FORMAR PARTE DE NUESTRO EQUIPO?
        </h1>
        <h1 className="text-[1.5rem] lg:text-[2rem] text-primary italic text-center font-semibold font-kanit mb-8 drop-shadow-[0_4px_4px_rgba(1,44,114,0.20)]">
          REPUESTOS D&B
        </h1>
        <p className="text-[1.125rem] text-black">
          En <span className="font-semibold text-black">Repuestos D&B</span>, las personas que forman parte de nuestra
          compañía representan lo que somos, una compañía diversa e inclusiva que lleva casi 2 años trabajando con el
          mismo propósito:{' '}
          <span className="font-semibold text-black">generar prosperidad, conectando con las personas.</span>
          <br />
          <br />
          Te vas a divertir con un equipo de personas apasionadas por la compañía y la industria. Aprenderás de nuestro
          legado pero también serás parte de la transformación que estamos viviendo de la mano de los mejores
          profesionales.
          <br />
          <br />
          Registra tu perfil en nuestra base de datos para que podamos mantenerte informado de las ofertas de empleo que
          coincidan con lo que estás buscando
          <br />
          <br />
        </p>
      </div>
      <div className="absolute z-10 justify-center hidden w-full lg:flex bottom-5">
        <span className="p-3 text-black border border-black rounded-full animate-bounce">
          <BiChevronDown size={24} />
        </span>
      </div>
    </main>
  )
}

export default Main
