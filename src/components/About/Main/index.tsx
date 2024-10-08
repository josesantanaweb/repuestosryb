import { BiChevronDown } from 'react-icons/bi'

const Main = () => {
  return (
    <main className="px-5 py-5 border-b-4 lg:py-0 main border-secondary lg:px-0">
      <div className="banner"></div>
      <div className="relative z-10 flex flex-col items-center justify-center max-w-[60rem] mx-auto]">
        <h1 className="text-[2.5rem] lg:text-[4.25rem] text-secondary text-center font-bold font-kanit opacity-15">
          QUIÉNES SOMOS
        </h1>
        <h1 className="text-[1.5rem] lg:text-[2rem] text-primary italic text-center font-semibold font-kanit mb-8">
          REPUESTOS D&B
        </h1>
        <p className="text-[1.125rem] text-black">
          Somos una empresa líder en la venta al mayor de repuestos de autos de alta calidad, con más de 13 años de
          experiencia en el sector automotriz y totalmente comprometidos con ofrecer los mejores productos y soluciones
          para el mercado venezolano.
          <br />
          <br /> Nuestro enfoque se centra en proporcionar no solo piezas de primera categoría, sino también un servicio
          postventa excepcional que nos distingue en la industria.
          <br />
          <br /> Trabajamos incansablemente para garantizar la satisfacción total de nuestros clientes, brindando
          asesoramiento personalizado y una atención dedicada que asegura la máxima eficiencia y confiabilidad en cada
          una de nuestras entregas.
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
