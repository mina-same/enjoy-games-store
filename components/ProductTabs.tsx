"use client";

import { useState } from 'react';

interface ProductTabsProps {
  description: string;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ description }) => {
  const [activeTab, setActiveTab] = useState('details');

  return (
    <div className="mt-12 w-full bg-white bg-opacity-10 rounded-lg shadow-lg p-6 backdrop-blur-md">
      {/* Tabs */}
      <div className="flex justify-center mb-6 space-x-4">
        <button
          className={`px-6 py-3 text-lg font-semibold rounded-lg border-2 border-gray-500 ${
            activeTab === 'details'
              ? 'bg-[#6a3fbf] text-white shadow-md border-2 border-white'
              : 'text-gray-300 hover:text-white'
          }`}
          onClick={() => setActiveTab('details')}
        >
          تفاصيل المنتج
        </button>
        <button
          className={`px-6 py-3 text-lg font-semibold rounded-lg border-2 border-gray-500 ${
            activeTab === 'reviews'
              ? 'bg-[#6a3fbf] text-white shadow-md border-2 border-white'
              : 'text-gray-300 hover:text-white'
          }`}
          onClick={() => setActiveTab('reviews')}
        >
          تقييمات المنتج
        </button>
      </div>

      {/* Tab Content */}
      <div className="text-gray-100">
        {activeTab === 'details' && (
          <div className="p-4 bg-opacity-10 rounded-lg text-right" style={{ direction: 'rtl' }}>
            <div
              className="leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div className="p-4 bg-opacity-10 rounded-lg text-right" style={{ direction: 'rtl' }}>
            {/* Rating and Review Section */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">التقييمات و اراء الزبائن</h3>
              <button className="px-4 py-2 bg-[#6a3fbf] text-white font-semibold rounded-md shadow-md hover:bg-purple-600 transition">
                أضف تقييم
              </button>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center">
                <span className="text-4xl font-bold text-yellow-400">5.00</span>
                <span className="text-yellow-500 ml-2">★★★★★</span>
                <span className="text-gray-300 ml-2">(بناءً على 1 تقييم)</span>
              </div>
              <div className="mt-2 space-y-2">
                {/* Example rating bar */}
                <div className="flex items-center">
                  <span className="w-24 text-gray-300">رائع</span>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-yellow-400 h-2"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                  <span className="ml-2 text-gray-300">1 تقييم</span>
                </div>
                {/* Additional rating bars (optional) */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
