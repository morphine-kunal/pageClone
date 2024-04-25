/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const Carousel: React.FC<{ slides: JSX.Element[] }> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const nextSlide = () => {
    setDirection("right");
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
      setDirection(null);
    }, 500);
  };

  const prevSlide = () => {
    setDirection("left");
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
      setDirection(null);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;

    if (index > currentSlide) {
      setDirection("right");
      setTimeout(() => {
        setCurrentSlide((prevSlide) => index);
        setDirection(null);
      }, 500);
    } else {
      setDirection("left");
      setTimeout(() => {
        setCurrentSlide((prevSlide) => index);
        setDirection(null);
      }, 500);
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${
              index === currentSlide
                ? ""
                : direction === "right"
                ? "slide-out"
                : "slide-in"
            }`}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className=" flex justify-center items-center absolute left-[50%] bottom-[150px] lg:bottom-[20px] translate-x-[-50%]  z-10 mt-12 pb-8">
        <div className="w-full flex relative bg-white px-3 py-3 bg-white rounded-full">
          <div
            className="flex justify-center items-center pr-[12px] cursor-pointer"
            onClick={() => {
              goToSlide(0);
            }}
          >
            <img
              alt=""
              src="https://ourahealth.imgix.net/product/simple/pdp-swatch-horizon-titanium.png?ixlib=js-2.3.2&amp;fm=webp&amp;w=96&amp;q=75&amp;s=6d2b7956f10899bee2326399a7c4ed8f"
              className="dot-img"
            />
            {currentSlide == 0 ? (
              <p className="pl-[12px] text-sm">Brushed Titanium</p>
            ) : (
              ""
            )}
          </div>
          <div
            className="flex justify-center items-center pr-[12px] cursor-pointer"
            onClick={() => {
              goToSlide(1);
            }}
          >
            <img
              alt=""
              src="https://ourahealth.imgix.net/product/pdp-swatch-horizon-silver@2x.png?ixlib=js-2.3.2&fm=webp&w=96&q=75&s=4a5ec5f58af2db15b2b2c9c09ba3e04f"
              className="dot-img"
            />
            {currentSlide == 1 ? (
              <p className="pl-[12px] text-sm">Silver Smart</p>
            ) : (
              ""
            )}
          </div>
          <div
            className="flex justify-center items-center pr-[12px] cursor-pointer"
            onClick={() => {
              goToSlide(2);
            }}
          >
            <img
              alt=""
              src="https://ourahealth.imgix.net/product/pdp-swatch-horizon-black@2x.png?ixlib=js-2.3.2&fm=webp&w=96&q=75&s=5423262fdeaf83e4301b87a2229ba598"
              className="dot-img"
            />
            {currentSlide == 2 ? (
              <p className="pl-[12px] text-sm">Black Smart</p>
            ) : (
              ""
            )}
          </div>
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => {
              goToSlide(3);
            }}
          >
            <img
              alt=""
              src="https://ourahealth.imgix.net/product/pdp-swatch-horizon-stealth@2x.png?ixlib=js-2.3.2&fm=webp&w=96&q=75&s=8ad98943c9bf79e584a1ea92c0f2dc2e"
              className="dot-img"
            />
            {currentSlide == 3 ? (
              <p className="pl-[12px] text-sm">Stealth Smart</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
