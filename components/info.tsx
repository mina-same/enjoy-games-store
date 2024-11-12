'use client'

import { Product } from '@/types'
import { ShoppingCart } from 'lucide-react'
import { Button } from './ui/button'
import { Currency } from './ui/currency'

interface InfoProps {
  data: Product
}

export const Info: React.FC<InfoProps> = ({ data }) => {
  console.log(data)

  return (
    <div className="flex flex-col md:flex-row items-start gap-8">
      {/* Text Section */}
      <div className="flex-1 text-right mt-6">
        <h1 className="text-3xl font-bold text-white">{data?.name}</h1>

        <div className="mt-3 flex items-end justify-between">
          <p className="text-2xl text-white">
            <Currency value={data?.price} />
          </p>
        </div>

        <hr className="my-4 border-gray-300" />

        <h2 className="text-xl font-semibold text-white mt-6">: لمحة عن المنتج</h2>
        <p className="text-white mt-2 leading-relaxed">
          {data?.category?.categoryDescription}
        </p>

        <div className="mt-10 flex items-center gap-x-3">
          <Button className="flex items-center gap-x-2 text-black bg-white">
            Add to cart
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  )
}
