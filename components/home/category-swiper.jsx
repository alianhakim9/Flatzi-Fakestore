"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ClearCategoryBtn from "./clear-category-btn";

export default function CategorySwiper({ categories }) {
  const [isActive, setIsActive] = useState(false);
  const [currentTerm, setCurrentTerm] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleClick = (term) => {
    setIsActive(true);
    setCurrentTerm(term);
    if (term) {
      params.set("category", term);
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const onClearSelectedCategory = () => {
    setIsActive(false);
    setCurrentTerm("");
    params.delete("category");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="block">
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3}
        className="mySwiper"
        spaceBetween={10}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <p
              className={`py-2 rounded-md px-2 text-sm hover:cursor-pointer hover:bg-gray-200 select-none ${
                isActive && currentTerm === category
                  ? "bg-black text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => handleClick(category)}
            >
              {category}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      {isActive && <ClearCategoryBtn onClick={onClearSelectedCategory} />}
    </div>
  );
}
