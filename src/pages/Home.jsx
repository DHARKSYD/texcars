import React from "react";
import { ASSETS } from "../assets";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const slides = [
    {
      title: "We Deliver luxury",
      desc: "Experience the thrill of driving a Mercedes AMG-GT...",
      img: ASSETS.mercedes_race_car_removebg_preview,
    },
    {
      title: "Pure Performance",
      desc: "Unleash the raw power and precision of Mercedes engineering...",
      img: ASSETS.shadowed_red_car,
    },
    {
      title: "Style & Comfort",
      desc: "Every journey redefined — luxury meets technology...",
      img: ASSETS.sports_blue_car,
    },
  ];

  return (
    // Add pt-24 (or adjust as needed for your header height)
    <main className="pt-24">
      {/* Top Bar removed */}
      {/* Swiper Slideshow */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="min-h-[60vh] h-[70vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section className="relative flex flex-col md:flex-row items-center justify-between px-0 pt-0 pb-0 min-h-[60vh] h-[70vh]">
              {/* Blurred overlay */}
              <div className="absolute inset-0 z-0 backdrop-blur-lg bg-black/40" />

              {/* Text */}
              <div className="md:w-1/2 z-10 mt-8 px-8">
                <h1 className="text-white text-5xl md:text-6xl font-light mb-6 leading-tight">
                  {slide.title.split(" ").map((word, i) =>
                    word.toLowerCase() === "luxury" ? (
                      <span key={i} className="font-semibold">
                        {word}{" "}
                      </span>
                    ) : (
                      word + " "
                    )
                  )}
                </h1>
                <p className="text-gray-300 text-base md:text-lg max-w-md mb-8">
                  {slide.desc}
                </p>
              </div>

              {/* Image */}
              <div className="md:w-1/2 flex justify-end items-center z-10 h-full w-full">
                <img
                  src={slide.img}
                  alt="mercedes"
                  className="w-full h-full object-cover object-center drop-shadow-4xl"
                  style={{ minHeight: "100%", maxHeight: "100%" }}
                />
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* About & Contact Section */}
      <section className="bg-white grid grid-cols-1 md:grid-cols-2 gap-0 px-0 py-0 w-full">
        <div className="p-10 md:p-16">
          <p className="text-sm md:text-base w-max relative before:absolute before:h-0.5 before:w-12 before:bg-primary before:left-[120%] before:top-1/2 before:translate-y-1/2">
            About
          </p>
          <h3 className="text-4xl font-serif font-semibold mb-4">this car</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            The Mercedes AMG-GT is a stunning sports car that combines luxury
            and performance...
          </p>
        </div>
        <div className="bg-primary flex flex-col justify-center p-10 md:p-16 text-white">
          <h3 className="text-xl font-semibold mb-4">
            Any type of query & Discussion
          </h3>
          <p className="mb-2">Call us: +234 906 9792 022</p>
          <p className="mb-2">texcarsluxury@gmail.com</p>
          <p>Gwarinpa, Abuja</p>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-14 px-4 md:px-16 bg-white">
        <h2 className="text-4xl font-serif font-light text-center mb-4">
          How it works?
        </h2>
        <p className="text-center text-gray-500 mb-10">
          This is a step-by-step guide on how to use our services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-primary text-white rounded-lg p-8 flex flex-col items-center">
            <span className="text-4xl mb-4">👤</span>
            <h3 className="font-semibold mb-2 text-lg">Create account</h3>
            <p className="text-center text-gray-300 text-sm">
              Create a new account with your personal information.
            </p>
          </div>
          <div className="bg-primary text-white rounded-lg p-8 flex flex-col items-center">
            <span className="text-4xl mb-4">🚗</span>
            <h3 className="font-semibold mb-2 text-lg">Book your ride</h3>
            <p className="text-center text-gray-300 text-sm">
              Select a car and a time slot.
            </p>
          </div>
          <div className="bg-primary text-white rounded-lg p-8 flex flex-col items-center">
            <span className="text-4xl mb-4">🕒</span>
            <h3 className="font-semibold mb-2 text-lg">Book your time</h3>
            <p className="text-center text-gray-300 text-sm">
              Select a time slot and pay for your ride.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
