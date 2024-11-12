"use client";

interface CartItemProps {
  data: Product;
}

import { Currency } from "@/components/ui/currency";
import { IconButton } from "@/components/ui/icon-button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

export const CartItems: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data?.images?.[0]?.url}
          alt={data.name}
          className="object-cover object-center"
        />
      </div>

      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>

        <div className="flex flex-col justify-between pr-9 gap-24 sm:pr-0">
          <p className="text-lg font-semibold text-white">{data.name}</p>
          <Currency value={data.price} className="text-2xl font-extrabold text-white" />
        </div>
      </div>
    </li>
  );
};
