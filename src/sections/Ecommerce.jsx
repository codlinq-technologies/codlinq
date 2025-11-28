import React from "react";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import ecomHero from "../assets/ecomHero.webp";
import flipkartLogo from "../assets/flipkart.webp";
import amazonLogo from "../assets/amazon.webp";
import meeshoLogo from "../assets/meesho.webp";
import subHero from "../assets/subHero.webp";

const Ecommerce = () => {
  return (
    <div className="w-full bg-white text-[#2c2c2c] dark:bg-[#1a1a1a] dark:text-gray-100 overflow-hidden">

      {/* ------------------------- HERO + STATS SECTION (Full Screen) ------------------------- */}
      <section className="relative w-full min-h-screen flex flex-col justify-between pt-24 pb-10 px-6 md:px-16">

        {/* Hero */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center flex-1">

          {/* Left */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-snug">
              Grow Your E-commerce
              <br /> Sales with{" "}
              <span className="text-[#ff7722]">Codlinq</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Unlock your brand’s full potential with expert Amazon, Flipkart & Meesho 
              account management. From listings to ads, cataloging & growth strategies — 
              we scale your online business with precision.
            </p>

            {/* BUTTONS */}
            <div className="flex items-center gap-4 mt-6">

              {/* Call Button */}
              <a
                href="tel:+919203533342"
                className="bg-[#ff7722] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e76917] transition"
              >
                Call Us
              </a>

              {/* WhatsApp Circular Button */}
              <a
                href="https://wa.me/919203533342"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition"
              >
                <FaWhatsapp className="text-white text-2xl" />
              </a>

            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <img
              src={ecomHero}
              alt="Ecommerce Growth"
              className="
                w-[90%]
                sm:w-[80%]
                md:w-[90%]
                lg:w-[100%]
                xl:w-[110%]
                max-w-[600px]
                drop-shadow-xl
                transition-all duration-300
              "
            />
          </div>

        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-center mt-12 gap-6">
          {[
            { count: "1+", text: "Years Experience" },
            { count: "10k+", text: "Happy Clients" },
            { count: "9k+", text: "Products Managed" },
            { count: "11+", text: "Expert Team" },
          ].map((item, i) => (
            <div key={i} className="py-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#ff7722]">{item.count}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.text}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ------------------------- SERVICES TO SCALE ------------------------- */}
      <section className="py-20 px-6 md:px-16 bg-white dark:bg-[#1a1a1a]">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Services to Scale Your Business
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {/* Service Cards */}
          {[
            {
              src: {flipkartLogo},
              title: "Flipkart Account Management",
              text: "Optimize listings, improve rankings & boost sales with expert management.",
            },
            {
              src: {amazonLogo},
              title: "Amazon Account Management",
              text: "Listing optimization, ads setup, SEO, branding & end-to-end management.",
            },
            {
              src: {meeshoLogo},
              title: "Meesho Account Management",
              text: "Grow faster with strategic product management & performance optimization.",
            }
          ].map((card, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition">
              <div className="h-44 md:h-48 w-full relative">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-6 bg-[#f8f8f8] dark:bg-[#2c2c2c]">
                <h3 className="font-bold text-xl">{card.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{card.text}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ------------------------- BRAND GROWTH ------------------------- */}
      <section className="bg-[#1a1a1a] dark:bg-[#151515] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Accelerate Your Brand’s Growth</h2>
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
            Drive your brand’s growth with expert Amazon, Flipkart, and Meesho management.
            We optimize listings, boost rankings, run ad strategies, maintain account health 
            and help you scale consistently.
          </p>
        </div>
      </section>

      {/* ------------------------- CTA SECTION ------------------------- */}
      <section className="bg-white dark:bg-[#0d0d0d] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

          <div className="flex-1">
            <h2 className="text-3xl font-bold">
              Account Management Service Is Calling — No Need For Stalling.
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg">
              Let our experts manage everything — listings, ads, account health, 
              optimization & reporting — while you focus on growing your business.
            </p>
          </div>

          <div className="flex-1">
            <img
              src= {subHero}
              className="w-full drop-shadow-lg"
              alt="Service Preview"
            />
          </div>

        </div>
      </section>

      {/* ------------------------- TESTIMONIALS ------------------------- */}
<section className="py-20 bg-[#fafafa] dark:bg-[#111]">
  <div className="max-w-6xl mx-auto text-center px-6">

    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
      Satisfied Customers Are Our Best Ads
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-14">

      {[
        {
          text: "Codlinq boosted my Flipkart sales — easy & effective!",
          name: "Amit Mandal",
        },
        {
          text: "They scaled my Meesho sales with better listings & more orders!",
          name: "Manish Bajpai",
        },
        {
          text: "Real growth, real results! Highly recommended.",
          name: "Neha Panchal",
        },
      ].map((t, i) => (
        <div
          key={i}
          className="
            bg-white dark:bg-[#1a1a1a] 
            p-6 rounded-2xl shadow-lg
            transition-all duration-300 
            transform hover:-translate-y-2 
            hover:shadow-xl
            hover:border-[#ff7722]/40
            border border-transparent
            animate-fadeSlide
          "
          style={{
            animationDelay: `${i * 0.15}s`,
            animationFillMode: "both"
          }}
        >
          {/* Star Rating */}
          <div className="flex gap-1 text-[#ff7722]">
            {[...Array(5)].map((_, s) => (
              <FaStar key={s} className="text-lg" />
            ))}
          </div>

          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            {t.text}
          </p>

          <h4 className="mt-5 font-bold text-lg text-gray-900 dark:text-white">
            {t.name}
          </h4>
        </div>
      ))}

    </div>
  </div>
</section>


    </div>
  );
};

export default Ecommerce;
