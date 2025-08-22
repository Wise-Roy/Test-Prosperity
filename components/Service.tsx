"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Optional: for toggle icons

const services = [
  {
    title: "Portfolio - Comprehensive Review and Health Checkup",
    description:
      "A complete analysis of your income, expenses, assets, and liabilities to determine financial health.",
  },

  {
    title: "Risk Assessment & Profiling",
    description:
      "Understand your risk appetite through a structured assessment to guide your investment strategy.",
  },
  {
    title: "Gap Analysis & Optimization",
    description:
      "Identifying gaps in your current Investment plan and providing optimized solutions.",
  },
  {
    title: "Goal-Oriented Investment Planning",
    description:
      "Structured investment planning customized to achieve specific financial goals like education, retirement, or home buying.",
  },
  {
    title: "Debt Products: NCDs & Corporate FDs",
    description:
      "Explore stable and fixed-return opportunities through Non-Convertible Debentures (NCDs) and Corporate Fixed Deposits. Ideal for risk-averse investors seeking predictable income with higher interest than traditional savings.",
  },
];

const Service = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif text-center text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 text-center mb-10">
          Tailored solutions designed to elevate your Investment journey.
        </p>

        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left p-4 font-medium text-gray-800 hover:bg-gray-100 transition"
              >
                <span>{service.title}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              <div
                className={`px-4 py-4 text-gray-600 text-sm sm:text-base transition-all duration-300 ease-in-out ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;