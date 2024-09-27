"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            {/* Apply gradient to "Hello, I'm" */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            {/* Keep the animated text in white */}
            <span className="text-white">
              <TypeAnimation
                sequence={[
                  "Sravan Kumar",
                  1000, 
                  "Machine Learning Engineer",
                  1000,
                  "Data Scientist",
                  1000,
                  "Data Engineer",
                  1000,
                  "Data Analyst",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Crafting data-driven solutions for smarter insights, scalable architecture, and transformative AI-powered analytics, with a focus on Machine Learning, Generative AI, and advanced Data Engineering.
          </p>
          <div>
            {/* Hire Me Button */}
            <Link
              href="/#contact" // Link to contact section or replace with mailto
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-purple-600 hover:to-pink-500"
            >
              Hire Me
            </Link>

            {/* Download CV Button */}
            <Link
              href="https://drive.google.com/file/d/1gbo7bLiATzUAO4ADCC9pgrI8I_SAVVKI/view?usp=sharing" // Google Drive direct download link
              target="_blank" // Opens in a new tab
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mt-3"
            >
              <span className="block bg-black text-white border-2 border-pink-500 rounded-full px-5 py-2 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:text-white">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
