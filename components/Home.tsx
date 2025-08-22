import React from "react";
import BackGround1 from "@/public/BackGround1.jpg";
import Image from "next/image";

const Home = () => {
  return (
    <div className="pt-[80px]">
      <div className="relative overflow-hidden px-5 py-8 sm:p-6 md:p-8 w-full  h-[670px]">
        <Image
          src={BackGround1}
          alt="Background"
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute inset-0 flex items-center justify-start px-4 md:px-12 sm:mx-auto">
          <div className="flex flex-col items-center justify-center text-center space-y-4  max-w-3xl mx-auto lg:ml-20">
            <h2 className="text-2xl md:text-4xl font-serif text-gray-900 leading-tight">
              Crafting Wealth, Backed by Wisdom
            </h2>

            <div className="mr-auto text-center sm:text-left flex flex-col items-center sm:items-start">
              <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                We are a client-focused mutual fund distributor committed to
              </p>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                providing transparent, goal-based investment solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;