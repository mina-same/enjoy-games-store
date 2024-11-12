"use client";

import React, { useState } from "react";
import { CategoryType, Category, CategoryDisplayNames } from "@/types"; // Ensure this is correct
import Image from "next/image";
import { useRouter } from 'next/navigation';

const CategoryFilter: React.FC<{ categories: Category[] }> = ({
  categories,
}) => {
  const [selectedCategoryType, setSelectedCategoryType] = useState<CategoryType | null>(null);
  const router = useRouter();

  console.log("Categories received:", categories);

  // Filter categories based on selected category type
  const filteredCategories = selectedCategoryType
    ? categories.filter((category) => category.categoryType === selectedCategoryType)
    : categories;

  console.log("Selected Category Type:", selectedCategoryType);
  console.log("Filtered Categories:", filteredCategories);

  return (
    <div>
      <div className="flex space-x-4 mb-6 justify-center z-40 relative">
        {Object.values(CategoryType).map((type) => (
          <button
            key={type}
            onClick={() => {
              console.log("Clicked type:", type);
              setSelectedCategoryType(type); // Set the selected category type directly
            }}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              selectedCategoryType === type
                ? "bg-[#061743] text-white"
                : "bg-white text-black"
            }`}
            aria-pressed={selectedCategoryType === type}
            aria-label={`Filter categories by ${CategoryDisplayNames[type]}`} // Accessibility improvement
          >
            {CategoryDisplayNames[type]} {/* Display the correct name */}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => router.push(`/category/${category.id}`)} // Corrected this line
              className="p-4 rounded-lg transition-transform duration-200 hover:scale-105 cursor-pointer"
            >
              <Image
                src={category.billboard.imageUrl || "/placeholder-image.png"} // Add a placeholder image if needed
                alt={category.name}
                width={300}
                height={300}
                className="rounded-md"
                placeholder="blur" // Use blur while loading
                blurDataURL="/placeholder-image.png" // Placeholder for blur effect
              />
              <h1 className="text-2xl text-white mb-2 text-center">
                {category.name}
              </h1>
            </div>
          ))
        ) : (
          <div className="text-center text-white">
            No categories available for this type.
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
