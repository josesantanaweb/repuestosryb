import Skeleton from '@/components/Common/Skeleton'
import { PRODUCTS } from '@/data/products'
import { useEffect, useState } from 'react'

const TABS = ['Todos', 'Nuevos', 'Mas Vendidos', 'Promo']

interface ProductProps {
  product: {
    id: number
    image: string
    name: string
    code: string[]
    brand: string
    tag?: string[]
    imageSize?: string
  }
}

const Product = ({ product }: ProductProps) => {
  return (
    <div className="relative flex flex-col p-5 border border-gray-200 cursor-pointer">
      {product.tag && (
        <span
          className={`px-2 py-1 text-xs text-white rounded-full max-w-[60px] text-center absolute z-20 top-3 left-3 ${
            product.tag.includes('Nuevo') ? 'bg-primary' : 'bg-secondary'
          }`}
        >
          {product.tag ?? ''}
        </span>
      )}
      <div className="flex items-center justify-center mb-3 overflow-hidden bg-white-200 h-[270px]">
        <img
          src={`/images/products/${product.image}.png`}
          alt={product.name}
          className={`transition-all scale-100 hover:scale-110`}
          width={product.imageSize}
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
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState(PRODUCTS)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    if (tabActive === 'Todos') {
      setProducts(PRODUCTS)
    }
    if (tabActive === 'Nuevos') {
      setProducts(PRODUCTS.filter((product) => product.tag?.includes('Nuevo')))
    }
    if (tabActive === 'Mas Vendidos') {
      setProducts(PRODUCTS.filter((product) => product.tag?.includes('Vendidos')))
    }
    if (tabActive === 'Promo') {
      setProducts(PRODUCTS.filter((product) => product.tag?.includes('Promo')))
    }
  }, [tabActive])

  return (
    <div className="w-full bg-white py-14" id="catalogo">
      <div className="container">
        <div className="flex flex-col justify-between mb-10 lg:items-start lg:flex-row">
          <div className="flex flex-col items-center justify-center gap-4 mb-10 lg:justify-start">
            <h4 className="text-2xl text-center uppercase lg:text-left">
              Conoce Nuestros <span className="font-semibold">Productos</span>
            </h4>
            <span className="w-14 h-0.5 bg-secondary"></span>
          </div>
          <div className="flex items-center justify-center my-5 lg:my-0">
            <p className="text-[0.875rem] lg:text-[1.2rem] text-center">
              Nuestra garantía respalda cada pieza que distribuimos.
            </p>
          </div>
          <div className="flex items-center justify-center w-full gap-4 lg:gap-8 lg:justify-start lg:w-auto">
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
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {loading
            ? PRODUCTS.map((product) => <Skeleton key={product.id} />)
            : products.map((product) => <Product key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  )
}

export default Products
