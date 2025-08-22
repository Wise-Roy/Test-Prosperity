import React from "react";
import logoBg from "@/public/logoBg.png";
import Deepak_Shah from "@/public/Deepak_shah.jpg";
import Priyanka_shah from "@/public/priyanka_shah.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-10 space-y-12">
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-8">
        {/* Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <Image
            src={logoBg}
            alt="Prosperity Partners Logo"
            className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Prosperity Partners
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-justify">
            Prosperity Partners is a client-focused Investment advisory firm
            specializing in investment planning and wealth management. With a
            decade of experience, we provide personalized solutions across
            mutual funds, tax planning, and financial goal setting. Our mission
            is to build long-term financial prosperity for individuals and
            families through trust, expertise, and dedicated service.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-3/4 bg-gray-200" />

      {/* Second Section */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-8">
        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Mr. Deepak Shah
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-justify">
            Mr. Deepak Shah blends 21 years of engineering expertise with a
            strong passion for investments, managing over 200 clients with
            strategic, goal-driven investment planning. Deepak has worked in
            renowned organizations like – John Deere , Bharat Forge and Piaggio
            – where he learnt to become process oriented. This process-oriented
            approach of engineering industry helps for Investment planning of
            the clients – which he calls it as “Investment engineering”.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <Image
            src={Deepak_Shah}
            alt="Mr. Deepak Shah"
            className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-3/4 bg-gray-200" />

      {/* Third section*/}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-8">
        {/* Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <Image
            src={Priyanka_shah}
            alt="Mrs. Priyanka Shah"
            className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Mrs. Priyanka Shah
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-justify">
            Priyanka Deepak Shah , bringing over 10 years of expertise in
            investment planning, backed by a B.Com and DTL qualification. She
            leads client servicing and operations, closely tracks mutual fund
            industry updates, and oversees recruitment and training of new team
            members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;