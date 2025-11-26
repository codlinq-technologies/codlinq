import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ type = "floating", className = "" }) => {
  const whatsappNumber = "7879318073";
  const preFilledText =
    "Hi there, I'm interested in learning more about your services!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    preFilledText
  )}`;

  const [showToast, setShowToast] = useState(false);

  if (type === "icon") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-green-500 hover:scale-110 transition ${className}`}
      >
        <FaWhatsapp className="text-xl text-blue-900" />
      </a>
    );
  }

  return (
    <>
      {showToast && (
        <div className="fixed bottom-14 right-16 z-50 opacity-100 translate-y-0 transition-all duration-300">
          <div className="bg-white text-gray-800 dark:bg-[#333] dark:text-gray-300 text-sm px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 border border-gray-200 dark:border-gray-600">
            <FaWhatsapp className="text-green-500 text-lg" />
            <span>Chat with us on WhatsApp</span>
          </div>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowToast(true)}
        onMouseLeave={() => setShowToast(false)}
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
      >
        <FaWhatsapp className="text-xl" />
      </a>
    </>
  );
};

export default WhatsAppButton;
