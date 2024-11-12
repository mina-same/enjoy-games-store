// ShopPage.tsx
import { getProducts } from "@/actions/get-products";
import { getCategories } from "@/actions/get-categories";
import ProductFilters from "@/components/ProductFilters";
import { ProductList } from "@/components/product-list";
import React from "react";

const ShopPage = async () => {
  const products = await getProducts({ isFeatured: true });
  const categories = await getCategories();

  return (
    <div>
      <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8 pt-14 bg-gradient-to-bl from-[#7f36b9] to-[#625bff] rounded-sm">
        {/* Pass products and categories data to the ProductFilters component */}
        <ProductFilters products={products} categories={categories} />
      </div>
    </div>
  );
};

export default ShopPage;
