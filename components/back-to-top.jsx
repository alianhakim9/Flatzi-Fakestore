"use client";

import { useEffect, useState } from "react";
import { TbArrowUp } from "react-icons/tb";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className={`text-center my-2 justify-center mx-auto bg-black text-white rounded-lg hover:cursor-pointer ${
            isVisible ? "flex gap-1 items-center" : "hidden"
          } px-2`}
          onClick={scrollToTop}
        >
          <TbArrowUp />
          <p className="text-sm ">Back to top</p>
        </button>
      )}
    </>
  );
}
