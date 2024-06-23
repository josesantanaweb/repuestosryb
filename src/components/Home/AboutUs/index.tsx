const AboutUs = () => {
  return (
    <div>
      <div className="flex justify-center py-10 bg-slate-200">
        <div className="container flex justify-start">
          <h4 className="text-5xl font-medium text-gray-800">SOBRE MAXXTANK</h4>
        </div>
      </div>
      <div className="relative h-[1000px] w-full">
        <img src="/images/banner-about-us.png" alt="banner" className="w-full h-full" />
      </div>
      <div className="flex justify-center py-10 bg-slate-200">
        <div className="container">
          <div className="flex justify-center gap-10 mb-14">
            <img src="/images/logo.svg" alt="banner" className="w-[160px]" />
            <h4 className="text-5xl text-gray-800">
              Experiencia, tecnología e ingenería para ofrecer soluciones adaptadas a cada proyecto.
            </h4>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-1/4">
              <h4 className="text-lg font-semibold text-gray-800">Propósito</h4>
              <p className="text-sm text-gray-800">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </p>
            </div>
            <div className="w-1/4">
              <h4 className="text-lg font-semibold text-gray-800">Misión</h4>
              <p className="text-sm text-gray-800">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </p>
            </div>
            <div className="w-1/4">
              <h4 className="text-lg font-semibold text-gray-800">Visión</h4>
              <p className="text-sm text-gray-800">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </p>
            </div>
            <div className="flex flex-col justify-center w-1/4">
              <img src="/images/video-preview.png" alt="video" className="w-[170px] mb-4 h-[140px]" />
              <p className="text-sm text-gray-800">Conoce más en nuestro video corporativo </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
