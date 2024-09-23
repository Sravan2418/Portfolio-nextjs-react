"use client";
import React from "react";
import Image from "next/image";

const Education = () => {
  return (
    <section className="text-white" id="education">
      <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-center mb-8">Education</h2>

      <div className="flex flex-col gap-16">
        {/* Syracuse University */}
        <div className="flex items-start justify-start gap-8"> {/* Adjusted gap */}
          <Image
            src="/images/syracuse-logo.png" // Ensure the path is correct
            alt="Syracuse University Logo"
            width={196}  // Wider width for Syracuse to compensate for its smaller size
            height={200} // Keep height the same
            className="flex-shrink-0"
          />
          <div className="text-left w-4/5"> {/* Adjusted width for text */}
            <h3 className="text-2xl font-semibold">MS in Applied Data Science</h3>
            <p className="text-lg text-gray-300">
              Syracuse University, Syracuse, NY, USA
            </p>
            <p className="text-md text-gray-400 mb-2">
              Duration: Aug 2022 – May 2024
            </p>
            <p className="text-md text-gray-400">
              Relevant Coursework: Advanced Big Data Management | Data Warehouse | Big Data Analytics 
              | Natural Language Processing | Applied Machine Learning | Text Mining
            </p>
          </div>
        </div>

        {/* SRM University */}
        <div className="flex items-start justify-start gap-8"> {/* Keep the same layout as Syracuse */}
          <Image
            src="/images/srm-logo.png" // Ensure the path is correct
            alt="SRM University Logo"
            width={200}  // Smaller width for SRM logo
            height={200} // Same height as Syracuse
            className="flex-shrink-0"
          />
          <div className="text-left w-4/5"> {/* Keep same width as Syracuse */}
            <h3 className="text-2xl font-semibold">BTech in Electronics and Communication Engineering</h3>
            <p className="text-lg text-gray-300">
              SRM University, Kattankalthur, TamilNadu, India
            </p>
            <p className="text-md text-gray-400 mb-2">
              Duration: July 2015 – May 2019
            </p>
            <p className="text-md text-gray-400">
              Relevant Coursework: Machine Learning | Python Programming | Computer Networks | Databases | Lean Six Signma 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
