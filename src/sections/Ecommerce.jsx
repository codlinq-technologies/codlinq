import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Ecommerce = () => {
  return (
    <div className="w-full bg-white text-[#2c2c2c] overflow-hidden">

      {/* ------------------------- HERO SECTION ------------------------- */}
      <section className="w-full bg-gradient-to-r from-white to-[#ffe5d1] pt-24 pb-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
              Grow Your E-commerce
              <br /> Sales with{" "}
              <span className="text-[#ff7722]">Codlinq</span>
            </h1>

            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
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
      </section>

      {/* ------------------------- STATS SECTION ------------------------- */}
      <section className="w-full bg-[#2c2c2c] text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-4 text-center">

          {[
            { count: "1+", text: "Years Experience" },
            { count: "10k+", text: "Happy Clients" },
            { count: "9k+", text: "Products Managed" },
            { count: "11+", text: "Expert Team" },
          ].map((item, i) => (
            <div key={i} className="py-4">
              <h2 className="text-3xl font-bold text-[#ff7722]">{item.count}</h2>
              <p className="text-sm">{item.text}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ------------------------- SERVICES TO SCALE ------------------------- */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Services to Scale Your Business</h2>
        </div>

        {/* 3 service cards */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {/* Flipkart */}
          <div className="p-6 bg-[#f8f8f8] rounded-xl shadow-md hover:shadow-xl transition">
            <img src="src/assets/flipkart.webp" className="h-14" />
            <h3 className="font-bold text-xl mt-4">Flipkart Account Management</h3>
            <p className="mt-2 text-gray-600">
              Optimize listings, improve rankings & boost sales with expert management.
            </p>
          </div>

          {/* Amazon */}
          <div className="p-6 bg-[#f8f8f8] rounded-xl shadow-md hover:shadow-xl transition">
            <img src="src/assets/amazon.webp" className="h-14" />
            <h3 className="font-bold text-xl mt-4">Amazon Account Management</h3>
            <p className="mt-2 text-gray-600">
              Listing optimization, ads setup, SEO, branding & end-to-end management.
            </p>
          </div>

          {/* Meesho */}
          <div className="p-6 bg-[#f8f8f8] rounded-xl shadow-md hover:shadow-xl transition">
            <img src="src/assets/meesho.webp" className="h-14" />
            <h3 className="font-bold text-xl mt-4">Meesho Account Management</h3>
            <p className="mt-2 text-gray-600">
              Grow faster with strategic product management & performance optimization.
            </p>
          </div>

        </div>
      </section>

      {/* ------------------------- BRAND GROWTH SECTION ------------------------- */}
      <section className="bg-[#1a1a1a] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Accelerate Your Brand’s Growth
          </h2>

          <p className="text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed">
            Drive your brand’s growth with expert Amazon, Flipkart, and Meesho management.
            We optimize listings, boost rankings, run ad strategies, maintain account health 
            and help you scale consistently.
          </p>

          {/* <a
            href="/contact"
            className="inline-block mt-8 bg-[#ff7722] px-8 py-3 rounded-lg font-bold hover:bg-[#e76917]"
          >
            Book a Call
          </a> */}
        </div>
      </section>

      {/* ------------------------- PLATFORM SPECIFIC BOXES ------------------------- */}
      {/* <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10"> */}

          {/* AMAZON */}
          {/* <div className="p-8 bg-[#f8f8f8] rounded-xl shadow">
            <h3 className="text-xl font-bold">Amazon Management Services</h3>
            <p className="mt-3 text-gray-600">
              Catalog creation, A+ content, listing optimization, ads strategy & more.
            </p>
          </div> */}

          {/* FLIPKART */}
          {/* <div className="p-8 bg-[#f8f8f8] rounded-xl shadow">
            <h3 className="text-xl font-bold">Flipkart Management Services</h3>
            <p className="mt-3 text-gray-600">
              Listing setup, inventory handling, cataloging, performance optimization.
            </p>
          </div> */}

          {/* MEESHO */}
          {/* <div className="p-8 bg-[#f8f8f8] rounded-xl shadow">
            <h3 className="text-xl font-bold">Meesho Management Services</h3>
            <p className="mt-3 text-gray-600">
              Catalog creation, pricing strategy, ads support & growth insights.
            </p>
          </div>

        </div>
      </section> */}

      {/* ------------------------- CTA SECTION ------------------------- */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

          <div className="flex-1">
            <h2 className="text-3xl font-bold">
              Account Management Service Is Calling — No Need For Stalling.
            </h2>
            <p className="mt-4 text-gray-600">
              Let our experts manage everything — listings, ads, account health, 
              optimization & reporting — while you focus on growing your business.
            </p>

            {/* <a
              href="/contact"
              className="inline-block mt-6 bg-[#ff7722] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e76917]"
            >
              Explore Now
            </a> */}
          </div>

          <div className="flex-1">
            <img src="/src/assets/H2.webp" className="w-full" />
          </div>

        </div>
      </section>

      {/* ------------------------- TESTIMONIALS ------------------------- */}
      <section className="py-20 bg-[#fafafa]">
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
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex gap-1 text-[#ff7722]">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="mt-3 text-gray-700">{t.text}</p>
                <h4 className="mt-4 font-bold text-[#2c2c2c]">{t.name}</h4>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
};

export default Ecommerce;