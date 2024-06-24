import { REVIEWS } from '@/data/reviews'
import { BiSolidStar } from 'react-icons/bi'
import Slider from 'react-slick'

interface ReviewProps {
  review: {
    id: number
    name: string
    review: string
    image: string
  }
}
const Review = ({ review }: ReviewProps) => {
  return (
    <div className="p-8 mx-3 bg-white rounded-lg">
      <p className="mb-4 text-xs text-center text-gray-500">{review.review}</p>
      <div className="flex items-center justify-center gap-3">
        <img src={`/images/team/${review.image}`} className="w-10 h-10 rounded-full" />
        <div className="flex flex-col">
          <h4 className="text-sm font-semibold">{review.name}</h4>
          <span className="flex items-center gap-1 text-yellow-300">
            <BiSolidStar size={18} />
            <BiSolidStar size={18} />
            <BiSolidStar size={18} />
            <BiSolidStar size={18} />
            <BiSolidStar size={18} />
          </span>
        </div>
      </div>
    </div>
  )
}

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <div className="relative pt-20 bg-gray-100 pb-28">
      <div className="container">
        <div className="flex flex-col items-center justify-center w-full gap-4 mb-12">
          <h4 className="text-2xl text-center uppercase">
            Nuestros <span className="font-semibold">Clientes</span>
          </h4>
          <span className="w-10 h-0.5 bg-secondary"></span>
          <p className="text-sm text-center text-gray-500 max-w-[50rem]">
            Únase a nuestros más de 15,910 clientes satisfechos que están constantemente satisfechos con una excelente
            capacidad de respuesta y una poderosa funcionalidad.
          </p>
        </div>
        <Slider {...settings} className="flex gap-5">
          {REVIEWS.map((review) => (
            <div key={review.id}>
              <Review review={review} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Reviews
