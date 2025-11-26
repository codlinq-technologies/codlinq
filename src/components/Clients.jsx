import React from "react";

const clientLogos = [
  { src: "/src/assets/client1.webp", alt: "Client 1" },
  { src: "/src/assets/client2.webp", alt: "Client 2" },
  { src: "/src/assets/client3.webp", alt: "Client 3" },
  { src: "/src/assets/client4.webp", alt: "Client 4" },
  { src: "/src/assets/client5.webp", alt: "Client 5" },
  { src: "/src/assets/client6.webp", alt: "Client 6" },
  { src: "/src/assets/client7.webp", alt: "Client 7" },
  { src: "/src/assets/client8.webp", alt: "Client 8" },
];

const Clients = () => {
  return (
    <section className="bg-gray-200 py-10 overflow-hidden relative">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4">
        {/* <h1 className="text-4xl font-bold text-center mb-12 text-indigo-800">
          Our Top Clients
        </h1> */}

        <div className="overflow-hidden relative">
          <div
            className="flex gap-16 w-max animate-scroll"
            style={{
              animation: "scrollLeft 40s linear infinite",
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center min-w-[150px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
