import { PRODUCTS } from '@/data/products'
import { useState } from 'react'

const TABS = ['Todos', 'Nuevos', 'Mas Vendidos', 'Ofertas']

interface ProductProps {
  product: {
    id: number
    image: string
    name: string
    code: string[]
    brand: string
    tag: string
  }
}

const Product = ({ product }: ProductProps) => {
  return (
    <div className="flex flex-col p-5 border border-gray-200 cursor-pointer" id="catalogo">
      {product.tag && (
        <span
          className={`px-2 py-1 text-xs text-white rounded-full max-w-[60px] text-center ${
            product.tag === 'Nuevo' ? 'bg-primary' : 'bg-secondary'
          }`}
        >
          {product.tag}
        </span>
      )}
      <div className="flex items-center justify-center mb-3 overflow-hidden bg-white-200">
        <img
          src={`/images/products/${product.image}`}
          alt={product.name}
          className="w-full h-[270px] scale-100 hover:scale-125 transition-all"
        />
      </div>
      <h3 className="mb-2 text-base font-semibold uppercase text-primary">{product.name}</h3>
      {product.code.map((code, index) => (
        <p key={index} className="text-base text-black">
          <span className="font-semibold">Codigo:</span> {code}
        </p>
      ))}
      <p className="text-base text-black">
        <span className="font-semibold">Marca:</span> {product.brand}
      </p>
    </div>
  )
}

const Products = () => {
  const [tabActive, setTabActive] = useState('Todos')

  return (
    <div className="w-full bg-white py-14">
      <div className="container">
        <div className="flex items-start justify-between mb-10">
          <div className="flex flex-col justify-start gap-4 mb-10">
            <h4 className="text-2xl text-left uppercase">
              Conoce Nuestros <span className="font-semibold">Productos</span>
            </h4>
            <span className="w-14 h-0.5 bg-secondary"></span>
          </div>
          <div className="flex items-center gap-8">
            {TABS.map((tab) => (
              <span
                key={tab}
                onClick={() => setTabActive(tab)}
                className={`text-sm font-semibold text-black uppercase cursor-pointer hover:font-semibold hover:text-secondary ${
                  tabActive === tab ? 'text-secondary font-semibold' : ''
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-5">
          {PRODUCTS.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
