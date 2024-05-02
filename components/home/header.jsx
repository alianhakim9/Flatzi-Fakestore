"use client";
import { useEffect, useMemo, useState } from "react";

export default function Header() {
  const values = useMemo(() => ["Unique", "Great"], []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setFade(false);
      }, 1000);
      const nextIndex = (currentIndex + 1) % values.length;
      setCurrentIndex(nextIndex);
      setCurrentValue(values[nextIndex]);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, values]);

  const [currentValue, setCurrentValue] = useState(values[currentIndex]);
  const [fade, setFade] = useState(false);

  return (
    <h1 className="text-5xl font-black px-4 py-5">
      Define Yourself In Your
      <span
        className={`mx-2 transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {currentValue}
      </span>
      Way.
    </h1>
  );
}
