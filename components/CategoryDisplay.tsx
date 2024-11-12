"use client";

import { IconButton } from "@/components/ui/icon-button";
import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { Currency } from "@/components/ui/currency";
import { BsCart4 } from "react-icons/bs";
import { useCart } from "@/hooks/use-cart"; // Import your cart hook or context if you have it
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

interface CategoryDisplayProps {
  backgroundImage: string;
  title: string;
  description: string;
  products: Product[];
}

const CategoryDisplay: React.FC<CategoryDisplayProps> = ({
  backgroundImage,
  title,
  description,
  products,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;
  const { addItem } = useCart(); // Assuming `useCart` provides the `addItem` function

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (startIndex + itemsPerPage < products.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <div
      className="relative bg-cover bg-center h-[500px] flex flex-col items-center text-center pb-[px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Title and Description Container */}
      <div className="w-full flex justify-end text-right pr-8 z-10">
        <div className="px-16 pt-20">
          <h2 className="text-white text-lg font-bold mb-2">{title}</h2>
          <p className="text-white text-sm mb-6">{description}</p>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="flex justify-between items-center z-10 p-8 w-full px-20">
        {/* Slider buttons */}
        <div className="flex space-x-4 mb-6">
          <button
            className="w-12 h-12 text-white text-3xl p-2 rounded-full border-2 border-white bg-opacity-50"
            onClick={handlePrevious}
            disabled={startIndex === 0}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>

          <button
            className="w-12 h-12 text-white text-3xl p-2 rounded-full border-2 border-white bg-opacity-50"
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= products.length}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>

        <div className="border-2 rounded-3xl py-2 px-4 border-white text-white">
          عرض الكل
        </div>
      </div>

      {/* Products */}
      <div className="relative z-10 rounded-t-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md flex flex-col items-center text-center transition hover:shadow-lg"
          >
            <div className="w-[320px] h-[270px] relative mb-4">
              <Image
                src={product.images[0].url}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="font-bold mb-4">
                <Currency value={product.price} />
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addItem(product);
                }}
                className="w-full font-extrabold text-yellow-600 border border-yellow-500 rounded-lg px-6 py-2 hover:bg-yellow-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                إضافة للسلة
                <BsCart4 className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDisplay;