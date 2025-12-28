"use client";

import { useState } from "react";
import {
  CarouselWrapper,
  CarouselInner,
  CarouselItem,
  CarouselImage,
  Indicators,
  IndicatorButton,
  PrevButton,
  NextButton,
  ControlIconWrapper,
  ControlIcon,
} from "./carousel.styled";

const images = [
  "/images/veg-1.png",
  "/images/veg-2.png",
  "/images/veg-3.png",
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <CarouselWrapper>
      <CarouselInner>
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            data-active={activeIndex === index}
          >
            <CarouselImage src={src} alt={`Offer ${index + 1}`} />
          </CarouselItem>
        ))}
      </CarouselInner>

      {/* Indicators */}
      <Indicators>
        {images.map((_, index) => (
          <IndicatorButton
            key={index}
            aria-current={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Indicators>

      {/* Controls */}
      <PrevButton onClick={prevSlide}>
        <ControlIconWrapper>
          <ControlIcon viewBox="0 0 24 24" fill="none">
            <path
              d="m15 19-7-7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </ControlIcon>
        </ControlIconWrapper>
      </PrevButton>

      <NextButton onClick={nextSlide}>
        <ControlIconWrapper>
          <ControlIcon viewBox="0 0 24 24" fill="none">
            <path
              d="m9 5 7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </ControlIcon>
        </ControlIconWrapper>
      </NextButton>
    </CarouselWrapper>
  );
}
