import Button from '@/components/Common/Button'
import Input from '@/components/Common/Input'

const Form = () => {
  return (
    <div className="relative pt-20 pb-20 bg-white lg:pb-28">
      <div className="container px-4 lg:px-0">
        <div className="flex flex-col items-center justify-center w-full gap-4 mb-12">
          <h4 className="text-2xl text-center uppercase">
            Completa el <span className="font-semibold">Formulario</span>
          </h4>
          <span className="w-10 h-0.5 bg-secondary"></span>
        </div>
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-3 max-w-[60rem] mx-auto mb-5">
          <Input label="Nombre" placeholder="Nombre" />
          <Input label="Apellido" placeholder="Apellido" />
          <Input label="Correo Electrónico" placeholder="Correo Electrónico" />
          <Input label="Teléfono" placeholder="Teléfono" />
          <Input label="Zona de interés" placeholder="Zona de interés" />
          <Input label="Link del CV" placeholder="Link del CV" />
        </div>
        <div className="flex items-center justify-center max-w-[25rem] mx-auto">
          <Button>ENVIAR</Button>
        </div>
      </div>
    </div>
  )
}

export default Form
