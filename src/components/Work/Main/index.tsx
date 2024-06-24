import { BiChevronDown } from 'react-icons/bi'

const Main = () => {
  return (
    <main className="border-b-4 main border-secondary">
      <div className="banner"></div>
      <div className="relative z-10 flex flex-col items-center justify-center max-w-[70rem] mx-auto]">
        <h1 className="text-[3rem] text-secondary text-center font-bold font-kanit opacity-15">
          ¿QUIERES FORMAR PARTE DE NUESTRO EQUIPO?
        </h1>
        <h1 className="text-[1.5rem] text-secondary text-center font-light font-kanit mb-2">
          LLENA NUESTRO FORMULARIO
        </h1>
        <h1 className="text-[2rem] text-primary italic text-center font-semibold font-kanit mb-8 drop-shadow-[0_4px_4px_rgba(1,44,114,0.20)]">
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
      <div className="absolute z-10 flex justify-center w-full bottom-5">
        <span className="p-3 text-black border border-black rounded-full animate-bounce">
          <BiChevronDown size={24} />
        </span>
      </div>
    </main>
  )
}

export default Main
