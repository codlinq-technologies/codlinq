import React from "react";
import { FaStar } from "react-icons/fa";

const Ecommerce = () => {
  return (
    <div className="w-full bg-white text-[#2c2c2c] dark:bg-[#1a1a1a] dark:text-gray-100 overflow-hidden">

      {/* ------------------------- HERO + STATS SECTION (Full Screen) ------------------------- */}
      <section className="relative w-full h-screen flex flex-col justify-between pt-24 pb-16 px-6 md:px-16">

        {/* Hero */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center flex-1">
          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
              Grow Your E-commerce
              <br /> Sales with{" "}
              <span className="text-[#ff7722]">Codlinq</span>
            </h1>

            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Unlock your brand’s full potential with expert Amazon, Flipkart & Meesho 
              account management. From listings to ads, cataloging & growth strategies — 
              we scale your online business with precision.
            </p>

            <a
              href="tel:+919203533342"
              className="inline-block mt-6 bg-[#ff7722] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e76917] transition"
            >
              Call Us
            </a>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src="/src/assets/ecomHero.webp"
              alt="Ecommerce Growth"
              className="w-[90%] md:w-[80%] drop-shadow-xl"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-4 text-center mt-10 md:mt-0">
          {[
            { count: "1+", text: "Years Experience" },
            { count: "10k+", text: "Happy Clients" },
            { count: "9k+", text: "Products Managed" },
            { count: "11+", text: "Expert Team" },
          ].map((item, i) => (
            <div key={i} className="py-4">
              <h2 className="text-3xl font-bold text-[#ff7722]">{item.count}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.text}</p>
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

  <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {/* Flipkart */}
    <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition">
      <div className="h-44 md:h-48 w-full relative">
        <img
          src="src/assets/flipkart.webp"
          alt="Flipkart"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 bg-[#f8f8f8] dark:bg-[#2c2c2c]">
        <h3 className="font-bold text-xl mt-4">Flipkart Account Management</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Optimize listings, improve rankings & boost sales with expert management.
        </p>
      </div>
    </div>

    {/* Amazon */}
    <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition">
      <div className="h-44 md:h-48 w-full relative">
        <img
          src="src/assets/amazon.webp"
          alt="Amazon"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 bg-[#f8f8f8] dark:bg-[#2c2c2c]">
        <h3 className="font-bold text-xl mt-4">Amazon Account Management</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Listing optimization, ads setup, SEO, branding & end-to-end management.
        </p>
      </div>
    </div>

    {/* Meesho */}
    <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition">
      <div className="h-44 md:h-48 w-full relative">
        <img
          src="src/assets/meesho.webp"
          alt="Meesho"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 bg-[#f8f8f8] dark:bg-[#2c2c2c]">
        <h3 className="font-bold text-xl mt-4">Meesho Account Management</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Grow faster with strategic product management & performance optimization.
        </p>
      </div>
    </div>
  </div>
</section>


       {/* ------------------------- BRAND GROWTH SECTION ------------------------- */}
      <section className="bg-[#1a1a1a] dark:bg-[#151515] text-white py-20 px-6 transition">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Accelerate Your Brand’s Growth
          </h2>

          <p className="text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed">
            Drive your brand’s growth with expert Amazon, Flipkart, and Meesho management.
            We optimize listings, boost rankings, run ad strategies, maintain account health 
            and help you scale consistently.
          </p>
        </div>
      </section>

      {/* ------------------------- CTA SECTION ------------------------- */}
      <section className="bg-white dark:bg-[#0d0d0d] py-20 px-6 transition">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

          <div className="flex-1">
            <h2 className="text-3xl font-bold">
              Account Management Service Is Calling — No Need For Stalling.
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Let our experts manage everything — listings, ads, account health, 
              optimization & reporting — while you focus on growing your business.
            </p>
          </div>

          <div className="flex-1">
            <img src="/src/assets/H2.webp" className="w-full drop-shadow-lg" />
          </div>

        </div>
      </section>

      {/* ------------------------- TESTIMONIALS ------------------------- */}
      <section className="py-20 bg-[#fafafa] dark:bg-[#111] transition">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Satisfied Customers Are Our Best Ads</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">

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
              }
            ].map((t, i) => (
              <div key={i} className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl shadow-md transition">
                <div className="flex gap-1 text-[#ff7722]">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="mt-3 text-gray-700 dark:text-gray-300">{t.text}</p>
                <h4 className="mt-4 font-bold text-[#2c2c2c] dark:text-white">{t.name}</h4>
              </div>
            ))}

          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Ecommerce;
