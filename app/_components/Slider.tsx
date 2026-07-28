"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type SliderProps = {
  images: string[];
};

export default function Slider({ images }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="relative">
      <div className="relative aspect-video">
        <Image
          src={images[currentIndex]}
          alt="Jeran"
          fill
          sizes="100%"
          loading="eager"
        />
      </div>

      <button
        className="bg-accent/80 hover:bg-accent absolute top-1/2 left-1 z-10 cursor-pointer rounded-full duration-300 ease-in-out"
        onClick={handlePrev}
      >
        <ChevronLeft className="h-5 w-5 pr-0.5" />
      </button>
      <button
        className="bg-accent/80 hover:bg-accent absolute top-1/2 right-1 z-10 cursor-pointer rounded-full duration-300 ease-in-out"
        onClick={handleNext}
      >
        <ChevronRight className="h-5 w-5 pl-0.5" />
      </button>
    </div>
  );
}
