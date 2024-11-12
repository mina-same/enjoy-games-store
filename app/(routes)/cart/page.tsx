'use client'

import { Container } from '@/components/ui/container'
import { useCart } from '@/hooks/use-cart'
import { useEffect, useState } from 'react'
import { CartItems } from './components/cart-items'
import { Summary } from './components/summary'

const CartPage = () => {
  const cart = useCart()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="bg-gradient-to-bl from-[#7f36b9] via-[#6a3fbf] to-[#625bff] py-[100px] px-12">
      <Container >
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Shopping Cart</h1>

          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-white">Your cart is empty.</p>
              )}

              <ul>
                {cart.items.map((item) => (
                  <CartItems key={item.id} data={item} />
                ))}
              </ul>
            </div>

            <Summary />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CartPage
