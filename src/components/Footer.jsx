import React from 'react';
import { ASSETS } from "../assets";
import { FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="w-full relative bg-black text-white py-10 px-4 flex flex-col items-center"
      style={{
        backgroundImage: `url(${ASSETS.sports_blue_car})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* CALL US Button */}
        <div className="bg-primary h-14 sm:h-16 w-48 sm:w-64 rounded-full text-lg sm:text-2xl text-white font-bold flex items-center justify-center mb-6 sm:mb-10">
          <span className="bg-[#e89c3a] h-12 sm:h-14 w-12 sm:w-14 rounded-full flex items-center justify-center text-black text-xl sm:text-2xl mr-2">
            <FaPhone />
          </span>
          CALL US
        </div>

        {/* Emergency & Contact Section */}
        <section className="flex flex-col md:flex-row gap-6 sm:gap-10 lg:gap-20 w-full max-w-6xl justify-center items-center">
          {/* Emergency Info */}
          <div className="bg-black/70 backdrop-blur-md p-6 rounded-md text-center shadow-md w-full sm:w-80">
            <p className="text-xl sm:text-2xl mb-2">Emergency</p>
            <h3 className="text-3xl sm:text-5xl font-bold mb-2">Car Repair</h3>
            <h3 className="text-3xl sm:text-5xl text-[#e89c3a] font-bold mb-4">Services</h3>
            <p className="mb-2">Reach Us Through These Numbers</p>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">09069792022</h3>
            <h3 className="text-2xl sm:text-3xl font-bold">08067413893</h3>
          </div>

          {/* Contact Form */}
          <div className="bg-black/70 backdrop-blur-md p-6 rounded-md shadow-md w-full sm:w-[55%] flex flex-col items-center">
            {/* Name & Email */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="text"
                placeholder="Name"
                className="h-12 sm:h-14 w-full sm:w-1/2 px-4 bg-transparent border-2 text-white border-[#e89c3a] rounded-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="h-12 sm:h-14 w-full sm:w-1/2 px-4 bg-transparent border-2 text-white border-[#e89c3a] rounded-full"
              />
            </div>

            {/* Message */}
            <input
              type="text"
              placeholder="What is your message?"
              className="h-20 sm:h-16 w-full px-4 border-2 text-white bg-transparent border-[#e89c3a] rounded-xl mt-4"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="h-12 sm:h-14 w-full sm:w-48 border-2 text-white bg-[#e89c3a] hover:bg-[#d88924] rounded-full mt-4 font-semibold transition-all duration-300"
            >
              Send Your Message
            </button>
          </div>
        </section>

        {/* Copyright */}
        <div className="relative z-10 w-full text-center text-xs sm:text-sm tracking-wide mt-8">
          © Orendu's Brain Activity {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
