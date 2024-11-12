import React from 'react';
import Image from 'next/image';
import landingImage from "@/public/engoy games landing.png";

const MyComponent = () => {
  return (
    <div className="flex items-center justify-between w-full h-[655px] p-8 relative px-[100px]">
      {/* Left Side: Text and Button */}
      <div className="flex flex-col justify-center space-y-6 w-1/2 text-left">
        <h1 className="text-white text-6xl font-semibold leading-tight">
          Providing the best <br />
          <span className="text-[#ffd700]">growth</span> solutions
        </h1>
        <p className="text-white text-base leading-relaxed max-w-md">
          You can read this text, but it doesn’t matter. It’s concept, not important for your life or life of your friends.
        </p>
        <button className="bg-black text-white py-3 px-6 rounded-full text-base font-semibold w-max">
          Shop Now
        </button>
      </div>

      {/* Right Side: PNG Image */}
      <div className="w-1/2 flex justify-center items-center">
        <Image
          src={landingImage} // Replace with the actual PNG image URL
          alt="Your Product"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default MyComponent;
