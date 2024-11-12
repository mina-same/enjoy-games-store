"use client";

import { IconButton } from "@/components/ui/icon-button";
import { useCart } from "@/hooks/use-cart";
import usePreviewModal from "@/hooks/use-preview-modal";
import { Expand } from "lucide-react";
import { Product } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { Currency } from "./currency";
import { BsCart4 } from "react-icons/bs";

interface ProductCardNewProps {
  data: Product;
}

export const ProductCardNew: React.FC<ProductCardNewProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(data);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    previewModal.onOpen(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white flex items-center border-2 border-gray-300 rounded-lg shadow-xl p-6 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all transform duration-300 ease-in-out max-w-full sm:max-w-[650px] mx-auto"
    >
      {/* Product Info on the Left */}
      <div className="w-2/3 pr-6 flex flex-col justify-between">
        <div className="text-right">
          <p className="text-xl font-extrabold text-gray-900">{data.name}</p>
          <p className="text-2xl font-semibold text-gray-800 mt-1">
            <Currency value={data.price} currencySymbol="د.أ" />
          </p>
          <hr className="border-t-2 border-gray-300 my-2" />
          <p className="text-sm text-gray-600 mt-2">{data.category.categoryDescription}</p>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <IconButton
            onClick={onPreview}
            icon={<Expand size={24} className="text-gray-600 hover:text-yellow-500 transition-all" />}
            className="p-2 hover:bg-gray-200 rounded-lg transition-all duration-300"
          />
          <button
            onClick={onAddToCart}
            className="w-full font-extrabold text-yellow-600 border border-yellow-500 rounded-lg px-6 py-2 hover:bg-yellow-500 hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            إضافة للسلة
            <BsCart4 className="ml-2" />
          </button>
        </div>
      </div>

      {/* Product Image on the Right */}
      <div className="w-1/3 flex-shrink-0 relative rounded-lg overflow-hidden shadow-inner">
        <Image
          alt={data.name}
          src={data.images?.[0]?.url}
          width={250} // Adjust the width as needed
          height={200} // Adjust the height as needed
          className="object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
    </div>
  );
};
