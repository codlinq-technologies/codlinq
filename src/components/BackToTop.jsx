import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) setVisible(true);
    else setVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-28 right-6 bg-[#ff7722] p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 text-white"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default BackToTop;
