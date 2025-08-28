import React from 'react'
import { ASSETS } from "../assets";
import { FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-[#e89c3a] bg-black py-2">
      <div className="bg-primary h-16 w-64 rounded-full absolute left-1/2 -translate-x-1/2 text-2xl text-white font-bold flex items-center justify-center mt-20">
        <span className="bg-[#e89c3a] h-14 w-14 rounded-full absolute top-1/2 -translate-y-1/2 left-1 text-black text-center font-bold flex items-center justify-center ">
          <FaPhone></FaPhone>
        </span>
        CALL US
      </div>

      <section className="flex flex-row gap-20 h-1/2 w-full absolute mt-[30%] justify-center items-center">
        <div className="bg-black/50 p-4 text-white text-center h-full w-80">
          <p className="text-2xl mb-2">Emergency</p>
          <h3 className="text-5xl font-bold mb-4">Car Repair</h3>
          <h3 className="text-5xl text-[#e89c3a] font-bold mb-4">Services</h3>
          <p className="mb-2">Reach Us Through These Numbers</p>
          <h3 className="text-3xl font-bold mb-4">09069792022</h3>
          <h3 className="text-3xl font-bold mb-4">08067413893</h3>
        </div>

        <div className="bg-black/50 h-[90%] w-[50%] flex flex-col justify-center items-center text-white">
          <div className="h-16 flex flex-row ">
            <input
              type="text"
              placeholder="Name"
              className="h-full w-52 border-2 text-white border-[#e89c3a] rounded-4xl mr-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="h-16 w-52 border-2 text-white border-[#e89c3a] rounded-4xl"
            />
          </div>

          <input
            type="text"
            placeholder="What is your message?"
            className="h-16 w-110 border-2 text-white border-[#e89c3a] rounded-4xl mt-4"
          />
          <div className="g-recaptcha"></div>
          <button type='submit' className="h-16 w-110 border-2 text-white bg-[#e89c3a] hover:bg-[hsla(34,79%,57%,1)] rounded-4xl mt-4">
            Send Your Message
          </button>
        </div>
      </section>

      <div className="w-full flex flex-col items-center ">
        <img
          src={ASSETS.sports_blue_car}
          alt="Sports blue car"
          className="w-full h-full object-cover"
        />
        <div className="w-full text-center text-white text-xs tracking-wide mt-1">
          © Orendu's Brain Activity {new Date().getFullYear()}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
