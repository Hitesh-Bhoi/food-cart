"use client";

import { useEffect, useState } from "react";
import {
  CarouselWrapper,
  CarouselInner,
  CarouselItem,
  Indicators,
  IndicatorButton,
  PrevButton,
  NextButton,
  ControlIconWrapper,
  ControlIcon,
  CarouselContent,
} from "./carousel.styled";

const slides = [
  {
    image: "https://res.cloudinary.com/dqwzddm94/image/upload/v1773249652/pexels-filirovska-8234152_ncgtdx.jpg",
    tag: "Limited Time Offer",
    title: "Farm Fresh Vegetables",
    description:
      "Stock up on crisp, local produce with bundle savings all week long.",
    button1: {
      label: "Shop Veggies",
      link: "/products/vegetables",
    },
    button2: {
      label: "View Offers",
      link: "/products/vegetables",
    },
  },
  {
    image: "/images/carousel-pexels-style-2.jpg",
    tag: "Seasonal Picks",
    title: "Organic Fruit Deals",
    description:
      "Juicy, sweet, and fresh. Save on today's seasonal fruit selection.",
    button1: {
      label: "Shop Fruits",
      link: "/products/vegetables",
    },
    button2: {
      label: "Explore More",
      link: "/products/vegetables",
    },
  },
  {
    image: "/images/carousel-pexels-flat-4.jpg",
    tag: "Up to 30% Off",
    title: "Daily Grocery Discounts",
    description:
      "Smart savings on essentials with rotating discounts every day.",
    button1: {
      label: "View Discounts",
      link: "/products/vegetables",
    },
    button2: {
      label: "Browse All",
      link: "/products/vegetables",
    },
  },
  {
    image: "https://res.cloudinary.com/dqwzddm94/image/upload/v1773249431/pexels-vanessa-loring-5966149_i5pbre.jpg",
    tag: "Fresh & Bright",
    title: "Colorful Market Specials",
    description:
      "Handpicked deals across fruits and veggies, refreshed daily.",
    button1: {
      label: "Shop Specials",
      link: "/products/vegetables",
    },
    button2: {
      label: "See All Deals",
      link: "/products/vegetables",
    },
  },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <CarouselWrapper>
      <CarouselInner>
        {slides.map((item, index) => (
          <CarouselItem
            key={index}
            data-active={activeIndex === index}
            $bg={item.image}
          >
            <CarouselContent>
              <span className="carousel_tag">{item.tag}</span>
              <p className="carousel_title">{item.title}</p>
              <p className="carousel_description">{item.description}</p>
              <div className="carousel_buttons">
                <button className="button1">{item.button1.label}</button>
                <button className="button2">{item.button2.label}</button>
              </div>
            </CarouselContent>
          </CarouselItem>
        ))}
      </CarouselInner>

      {/* Indicators */}
      <Indicators>
        {slides.map((_, index) => (
          <IndicatorButton
            key={index}
            aria-current={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Indicators>

      {/* Controls */}
      <PrevButton className="slider_button" onClick={prevSlide}>
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

      <NextButton className="slider_button" onClick={nextSlide}>
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
